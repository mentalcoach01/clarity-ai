
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const calendarOptions = [
  "Google Calendar",
  "iOS Calendar",
  "Outlook Calendar",
];

export const CalendarConnect = () => {
  const [selectedCalendar, setSelectedCalendar] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedCalendar) {
      navigate("/onboarding/watch");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#9b87f5]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Connect your calendar
          </h1>
        </div>

        <div className="space-y-3">
          {calendarOptions.map((calendar) => (
            <Card
              key={calendar}
              className={`p-4 cursor-pointer transition-all ${
                selectedCalendar === calendar
                  ? "bg-blue-50 border-blue-200"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCalendar(calendar)}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {calendar}
                </span>
                {selectedCalendar === calendar && (
                  <Check className="h-5 w-5 text-blue-600" />
                )}
              </div>
            </Card>
          ))}
        </div>

        <Button
          className="w-full bg-black text-white hover:bg-gray-800"
          onClick={handleContinue}
          disabled={!selectedCalendar}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
