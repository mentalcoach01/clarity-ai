
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const calendarOptions = [
  {
    name: "Sign in with Google",
    provider: "google",
  },
  {
    name: "Sign in with iOS Calendar",
    provider: "ios",
  },
  {
    name: "Sign in with Outlook",
    provider: "outlook",
  },
];

export const CalendarConnect = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const completeOnboarding = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          has_completed_onboarding: true,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      navigate("/");
    } catch (error: any) {
      console.error('Error completing onboarding:', error);
      toast({
        title: "Error",
        description: "There was a problem completing your onboarding",
        variant: "destructive",
      });
    }
  };

  const handleCalendarSelect = async (provider: string) => {
    // Handle calendar integration here
    await completeOnboarding();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Connect your calendar
          </h1>
        </div>

        <div className="space-y-3">
          {calendarOptions.map((option) => (
            <Button
              key={option.provider}
              variant="outline"
              className="w-full justify-start gap-3 py-6"
              onClick={() => handleCalendarSelect(option.provider)}
            >
              <Calendar className="h-5 w-5" />
              {option.name}
            </Button>
          ))}
        </div>

        <Button
          variant="link"
          className="w-full text-gray-600"
          onClick={completeOnboarding}
        >
          Skip for now
        </Button>
      </div>
    </div>
  );
};

