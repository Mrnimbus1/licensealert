
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.15)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md text-center animate-form-enter">
          {/* Icon */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl mb-6">
              <Compass className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Content container */}
          <div className="glass-effect rounded-3xl p-8 shadow-modern-xl border border-gray-200/50">
            {/* 404 Title */}
            <h1 className="text-6xl font-bold text-gradient-primary mb-4">
              404
            </h1>
            
            {/* Main message */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Page not found
            </h2>
            
            {/* Explanation */}
            <p className="text-gray-600 mb-8 text-lg">
              Looks like you took a wrong turn.
            </p>
            
            {/* Action button */}
            <Link to="/">
              <Button 
                size="lg"
                className="w-full h-14 text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
              >
                Return to Home
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-500">
            © 2025 LicenseAlert. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
