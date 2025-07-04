import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "@/contexts/TranslationContext";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import RouteProtector from "./components/RouteProtector";
import JoinWaitlistPage from "./components/auth/JoinWaitlistPage";

// Initialize i18n
import './i18n';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes - accessible to everyone */}
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth/join-waitlist" element={<JoinWaitlistPage />} />
            <Route path="/auth/signup" element={<JoinWaitlistPage />} />
            
            {/* Error pages */}
            <Route path="/404" element={<NotFound />} />
            <Route path="/500" element={<ServerError />} />
            
            {/* Coming soon routes - temporarily disabled */}
            <Route path="/dashboard" element={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-center"><h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Coming Soon</h1><p className="text-gray-600">We're working hard to bring you an amazing dashboard experience.</p></div></div>} />
            <Route path="/auth/login" element={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-center"><h1 className="text-2xl font-bold text-gray-900 mb-2">Login Coming Soon</h1><p className="text-gray-600">Authentication features will be available after launch.</p></div></div>} />
            
            {/* Catch-all route - redirect to 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;
