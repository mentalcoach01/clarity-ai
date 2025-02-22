
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const VoiceCloning = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication status when component mounts
    checkAuth();
    
    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    // Cleanup subscription
    return () => subscription.unsubscribe();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to upload voice samples",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      // Validate file type
      if (!file.type.startsWith('audio/')) {
        throw new Error("Please upload an audio file");
      }

      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("voice-samples")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      toast({
        title: "Success",
        description: "Voice sample uploaded successfully",
      });
    } catch (error: any) {
      console.error("Upload error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to upload voice sample",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border border-purple-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-gray-900">Voice Cloning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="hidden"
            id="voice-upload"
            disabled={isUploading || !isAuthenticated}
          />
          <label htmlFor="voice-upload">
            <Button 
              asChild 
              disabled={isUploading || !isAuthenticated}
              variant={isAuthenticated ? "default" : "secondary"}
            >
              <span>
                {isUploading ? "Uploading..." : 
                 !isAuthenticated ? "Sign in to Upload" : 
                 "Upload Voice Sample"}
              </span>
            </Button>
          </label>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceCloning;
