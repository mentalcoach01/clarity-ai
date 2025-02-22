
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const focusAreas = [
  "Managing Stress",
  "Self-Assurance",
  "Positive Thinking",
  "Resilience",
];

export const FocusSelection = () => {
  const [selectedFocus, setSelectedFocus] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedFocus) {
      navigate("/onboarding/voice");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-[#9b87f5]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            What would you like to focus on?
          </h1>
        </div>

        <div className="space-y-3">
          {focusAreas.map((area) => (
            <Card
              key={area}
              className={`p-4 cursor-pointer transition-all ${
                selectedFocus === area
                  ? "bg-purple-50 border-purple-200"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedFocus(area)}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{area}</span>
                {selectedFocus === area && (
                  <Check className="h-5 w-5 text-purple-600" />
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="pt-8">
          <Button
            className="w-full bg-black text-white hover:bg-gray-800 h-9 px-3"
            onClick={handleContinue}
            disabled={!selectedFocus}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
