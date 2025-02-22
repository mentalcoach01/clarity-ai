
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type Affirmation = Database["public"]["Tables"]["affirmations"]["Row"];

const Affirmations = () => {
  const [affirmations, setAffirmations] = useState<Affirmation[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAffirmations = async () => {
      try {
        const { data, error } = await supabase
          .from("affirmations")
          .select("*")
          .order("timestamp", { ascending: false })
          .limit(5);

        if (error) throw error;
        setAffirmations(data || []);
      } catch (error) {
        console.error("Error fetching affirmations:", error);
        toast({
          title: "Error",
          description: "Failed to load affirmations",
          variant: "destructive",
        });
      }
    };

    fetchAffirmations();
  }, [toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Affirmations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {affirmations.map((affirmation) => (
            <div
              key={affirmation.id}
              className="p-4 bg-secondary rounded-lg"
            >
              <p className="text-lg">{affirmation.text}</p>
              {affirmation.context && (
                <p className="text-sm text-muted-foreground mt-2">
                  Context: {affirmation.context}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Affirmations;
