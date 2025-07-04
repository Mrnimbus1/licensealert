import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
const ServerError = () => {
  useEffect(() => {
    console.error("500 Error: Server encountered an internal error");
  }, []);
  const handleReload = () => {
    window.location.reload();
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(79,70,229,0.15)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-xl opacity-70 animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md text-center animate-form-enter">
          {/* Icon */}
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl mb-6">
              <Wrench className="h-12 w-12 text-white animate-pulse" />
            </div>
          </div>

          {/* Content container */}
          <div className="glass-effect rounded-3xl p-8 shadow-modern-xl border border-gray-200/50">
            {/* 500 Title */}
            <h1 className="text-6xl font-bold text-gradient-primary mb-4">
              500
            </h1>
            
            {/* Main message */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h2>
            
            {/* Explanation */}
            <p className="text-gray-600 mb-8 text-lg">
              We're working to fix it. Try again later.
            </p>
            
            {/* Action buttons */}
            <div className="space-y-3">
              <Button onClick={handleReload} size="lg" className="w-full h-14 text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                Reload the page
              </Button>
              
              <Link to="/" className="block">
                <Button variant="outline" size="lg" className="w-full h-14 text-base font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 text-sm text-gray-500">© 2025 LicenseAlert. All rights reserved.</div>
        </div>
      </div>
    </div>;
};
export default ServerError;