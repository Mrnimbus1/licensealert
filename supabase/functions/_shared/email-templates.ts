// Simple email templates for LicenseAlert

// Welcome email template
export const createWelcomeEmailTemplate = (translations: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${translations.subject}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2>${translations.greeting}</h2>
  
  <p>${translations.message1}</p>
  <p>${translations.message2}</p>
  
  <p><strong>${translations.whatsNext}</strong></p>
  <ul>
    <li>${translations.benefit1}</li>
    <li>${translations.benefit2}</li>
    <li>${translations.benefit3}</li>
  </ul>
  
  <p>${translations.message3}</p>
  <p><strong>${translations.signature}</strong></p>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
  <p style="font-size: 12px; color: #666;">
    © ${new Date().getFullYear()} LicenseAlert. All rights reserved.<br>
    <a href="https://licensealert.app" style="color: #666;">licensealert.app</a>
  </p>
</body>
</html>
`;

// Contact confirmation email template
export const createContactEmailTemplate = (name: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for contacting LicenseAlert!</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2>Thanks for reaching out, ${name}!</h2>
  
  <p>We've received your message and will get back to you within 24 hours.</p>
  
  <p><strong>Your message:</strong></p>
  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
    <p style="margin: 0; font-style: italic;">${message.replace(/\n/g, '<br>')}</p>
  </div>
  
  <p>We're excited to help you with your license management needs!</p>
  <p><strong>– The LicenseAlert Team</strong></p>
  
  <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
  <p style="font-size: 12px; color: #666;">
    © ${new Date().getFullYear()} LicenseAlert. All rights reserved.<br>
    <a href="https://licensealert.app" style="color: #666;">licensealert.app</a>
  </p>
</body>
</html>
`;

// Admin notification email template
export const createAdminNotificationTemplate = (name: string, email: string, message: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2>New Contact Form Submission</h2>
  
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Message:</strong></p>
  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
    <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
  </div>
  
  <p style="font-size: 12px; color: #666;">Submitted at: ${new Date().toISOString()}</p>
</body>
</html>
`;