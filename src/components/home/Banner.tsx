
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Banner = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-48 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="Woman working on laptop"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 p-6 md:p-8 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Start Your Mental Wellness Journey Today</h2>
          <p className="text-sm md:text-base text-gray-600">Experience personalized mental coaching with AI-powered insights and support. Let's work together to achieve your mental wellness goals.</p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 w-full md:w-auto justify-center">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
