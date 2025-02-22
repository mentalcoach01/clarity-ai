
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type StressLevel = Database["public"]["Tables"]["stress_levels"]["Row"];

const StressMonitor = () => {
  const [stressLevels, setStressLevels] = useState<StressLevel[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchStressLevels = async () => {
      try {
        const { data, error } = await supabase
          .from("stress_levels")
          .select("*")
          .order("timestamp", { ascending: false })
          .limit(1);

        if (error) throw error;
        setStressLevels(data || []);
      } catch (error) {
        console.error("Error fetching stress levels:", error);
        toast({
          title: "Error",
          description: "Failed to load stress levels",
          variant: "destructive",
        });
      }
    };

    fetchStressLevels();
  }, [toast]);

  const latestStressLevel = stressLevels[0]?.level || 0;

  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-purple-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-gray-900">Current Stress Level</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress 
            value={latestStressLevel * 10} 
            className="w-full h-4 bg-purple-100"
            style={{
              '--tw-bg-opacity': '0.8',
              backgroundColor: 'rgb(243 232 255 / var(--tw-bg-opacity))'
            }}
          />
          <p className="text-center text-lg text-gray-700">
            Level: {latestStressLevel} / 10
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StressMonitor;
