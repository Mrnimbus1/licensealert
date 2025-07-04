
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createWelcomeEmailTemplate } from "../_shared/email-templates.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://www.licensealert.app",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const hourInMs = 60 * 60 * 1000;
  
  const current = rateLimitMap.get(ip);
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + hourInMs });
    return false;
  }
  
  if (current.count >= 3) {
    return true;
  }
  
  current.count++;
  return false;
};

interface WelcomeEmailRequest {
  email: string;
  name?: string;
  language?: string;
}

// Email translations
const emailTranslations = {
  en: {
    subject: "Thanks for joining the LicenseAlert waitlist! 🚀",
    greeting: "Thanks for signing up!",
    message1: "You're now on the waitlist for LicenseAlert.",
    message2: "We'll notify you as soon as we launch in your region.",
    message3: "In the meantime, follow us for updates.",
    signature: "– The LicenseAlert Team",
    whatsNext: "What's next?",
    benefit1: "Priority early access when we launch",
    benefit2: "Exclusive updates and license management tips", 
    benefit3: "Special launch discount just for early supporters"
  },
  fr: {
    subject: "Merci de rejoindre la liste d'attente LicenseAlert! 🚀",
    greeting: "Merci de vous être inscrit!",
    message1: "Vous êtes maintenant sur la liste d'attente pour LicenseAlert.",
    message2: "Nous vous avertirons dès que nous lancerons dans votre région.",
    message3: "En attendant, suivez-nous pour les mises à jour.",
    signature: "– L'équipe LicenseAlert",
    whatsNext: "Que se passe-t-il ensuite?",
    benefit1: "Accès prioritaire anticipé lors du lancement",
    benefit2: "Mises à jour exclusives et conseils de gestion des licences",
    benefit3: "Remise de lancement spéciale pour les premiers supporters"
  }
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    
    if (isRateLimited(clientIP)) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again in an hour." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    const { email, name, language = 'en' }: WelcomeEmailRequest = await req.json();
    
    // Return 400 if no email is provided
    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }
    
    console.log('Sending welcome email to:', email, 'in language:', language);

    // Get translations for the specified language, fallback to English
    const translations = emailTranslations[language as keyof typeof emailTranslations] || emailTranslations.en;

    const emailResponse = await resend.emails.send({
      from: "LicenseAlert <hello@licensealert.app>",
      to: [email],
      subject: translations.subject,
      html: createWelcomeEmailTemplate(translations),
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: emailResponse.data?.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
