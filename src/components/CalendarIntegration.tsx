
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type CalendarEvent = Database["public"]["Tables"]["calendar_events"]["Row"];

const CalendarIntegration = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("calendar_events")
          .select("*")
          .order("event_time", { ascending: true })
          .limit(5);

        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
        toast({
          title: "Error",
          description: "Failed to load calendar events",
          variant: "destructive",
        });
      }
    };

    fetchEvents();
  }, [toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-4 bg-secondary rounded-lg"
            >
              <h3 className="font-semibold">{event.event_name}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(event.event_time).toLocaleString()}
              </p>
              <p className="text-sm mt-1">{event.event_type}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarIntegration;
