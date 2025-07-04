
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import EmailCapture from './EmailCapture';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeOnSite, setTimeOnSite] = useState(0);

  useEffect(() => {
    // Track time on site
    const startTime = Date.now();
    const timeInterval = setInterval(() => {
      setTimeOnSite(Date.now() - startTime);
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page AND user has been on site for at least 30 seconds
      if (e.clientY <= 0 && !hasShown && timeOnSite > 30000) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const handleScroll = () => {
      // Show popup after scrolling 80% of the page AND user has been on site for at least 45 seconds
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 80 && !hasShown && timeOnSite > 45000) {
        timeoutId = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
        }, 10000); // Wait 10 seconds after reaching 80% scroll
      }
    };

    // Check if user has already dismissed the popup (permanently)
    const hasSeenPopup = localStorage.getItem('hasSeenExitIntent');
    const dismissedAt = localStorage.getItem('exitIntentDismissedAt');
    
    if (hasSeenPopup || dismissedAt) {
      setHasShown(true);
      return;
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasShown, timeOnSite]);

  const handleClose = (userDismissed: boolean = false) => {
    setIsOpen(false);
    if (userDismissed) {
      // User explicitly dismissed - don't show again
      localStorage.setItem('exitIntentDismissedAt', Date.now().toString());
      localStorage.setItem('hasSeenExitIntent', 'true');
    }
  };

  const handleEmailSubmit = (email: string) => {
    // User signed up - don't show again
    localStorage.setItem('hasSeenExitIntent', 'true');
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose(true)}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Join Our Waitlist</DialogTitle>
          <DialogDescription>
            Get early access to LicenseAlert when we launch
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Wait! Don't Miss Out
            </h3>
            <p className="text-gray-600">
              Join our waitlist and be the first to get early access to LicenseAlert when we launch.
            </p>
          </div>

          <EmailCapture 
            title=""
            subtitle=""
            placeholder="Enter your email"
            buttonText="Get Early Access"
            variant="default"
            onEmailSubmit={handleEmailSubmit}
          />

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
