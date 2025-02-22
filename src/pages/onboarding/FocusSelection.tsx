
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const focusOptions = [
  "Managing Stress",
  "Self-Assurance",
  "Positive Thinking",
  "Resilience",
];

const FocusSelection = () => {
  const navigate = useNavigate();
  const [selectedFocus, setSelectedFocus] = useState<string>("");

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
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        </div>
        <div className="w-6"></div>
      </div>

      <h1 className="text-2xl font-semibold mb-8">
        What would you like to focus on?
      </h1>

      <div className="space-y-4 mb-8">
        {focusOptions.map((option) => (
          <Card
            key={option}
            className={cn(
              "p-4 cursor-pointer transition-all",
              selectedFocus === option
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200"
            )}
            onClick={() => setSelectedFocus(option)}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm">{option}</span>
              {selectedFocus === option && (
                <Check className="h-5 w-5 text-purple-500" />
              )}
            </div>
          </Card>
        ))}
      </div>

      <Button
        className="w-full"
        disabled={!selectedFocus}
        onClick={() => navigate('/onboarding/voice')}
      >
        Continue
      </Button>
    </div>
  );
};

export default FocusSelection;
