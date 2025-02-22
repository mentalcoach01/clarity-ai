
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const VoiceSample = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/onboarding/calendar");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Upload a sample of your voice
          </h1>
        </div>

        <Card className="p-8 flex flex-col items-center justify-center space-y-4 border-dashed border-2">
          <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
            <Mic className="h-8 w-8 text-purple-600" />
          </div>
          <p className="text-sm text-gray-600 text-center">
            Tap to record or drag and drop your audio file here
          </p>
        </Card>

        <Button
          className="w-full bg-black text-white hover:bg-gray-800"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
