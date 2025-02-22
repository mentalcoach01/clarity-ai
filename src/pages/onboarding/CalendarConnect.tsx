
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const calendarOptions = [
  "Google Calendar",
  "iOS Calendar",
  "Outlook Calendar",
];

const CalendarConnect = () => {
  const navigate = useNavigate();
  const [selectedCalendar, setSelectedCalendar] = useState<string>("");

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
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        </div>
        <div className="w-6"></div>
      </div>

      <h1 className="text-2xl font-semibold mb-8">
        Connect your calendar
      </h1>

      <div className="space-y-4 mb-8">
        {calendarOptions.map((option) => (
          <Card
            key={option}
            className={cn(
              "p-4 cursor-pointer transition-all",
              selectedCalendar === option
                ? "border-blue-500"
                : "border-gray-200"
            )}
            onClick={() => setSelectedCalendar(option)}
          >
            <span className="text-sm">{option}</span>
          </Card>
        ))}
      </div>

      <Button
        className="w-full"
        disabled={!selectedCalendar}
        onClick={() => navigate('/onboarding/watch')}
      >
        Continue
      </Button>
    </div>
  );
};

export default CalendarConnect;
