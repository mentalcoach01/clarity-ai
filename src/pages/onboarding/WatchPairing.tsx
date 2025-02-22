
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const WatchPairing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        </div>
        <div className="w-6"></div>
      </div>

      <h1 className="text-2xl font-semibold mb-4">
        Pair Apple Watch
      </h1>
      
      <p className="text-sm text-gray-600 mb-8">
        For the optimal experience, we recommend pairing Apple Watch
      </p>

      <div className="flex items-center justify-center mb-8">
        <div className="text-center">
          <img 
            src="/public/lovable-uploads/c58bffbc-99cc-4c3e-b6d6-51dcb79995ba.png" 
            alt="Apple Watch" 
            className="w-32 h-32 mb-4"
          />
          <span className="text-sm font-medium">Alex's Watch</span>
        </div>
      </div>

      <Button
        className="w-full"
        onClick={() => navigate('/')}
      >
        Continue
      </Button>
    </div>
  );
};

export default WatchPairing;
