
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, Play } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const VoiceUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('audio/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an audio file",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    try {
      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('voice-samples')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      setUploadedFile(file);
      localStorage.setItem('voiceFile', file.name);
      localStorage.setItem('voiceFileUrl', URL.createObjectURL(file));
      
      toast({
        title: "Success",
        description: "Voice sample uploaded successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to upload voice sample",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handlePreview = () => {
    if (uploadedFile) {
      navigate('/onboarding/voice/preview');
    }
  };

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
          <div className="h-2 w-2 rounded-full bg-black"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
          <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        </div>
        <div className="w-6"></div>
      </div>

      <h1 className="text-2xl font-semibold mb-8">
        Upload a sample of your voice
      </h1>

      <div className="flex flex-col items-center justify-center gap-4">
        <input
          type="file"
          accept="audio/*"
          className="hidden"
          id="voice-upload"
          onChange={handleFileUpload}
          disabled={isUploading}
        />
        {!uploadedFile ? (
          <label 
            htmlFor="voice-upload" 
            className="w-full max-w-md"
          >
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors">
              <Button 
                variant="outline" 
                className="mx-auto gap-2" 
                disabled={isUploading}
              >
                <Upload className="h-5 w-5" />
                {isUploading ? "Uploading..." : "Upload Voice Sample"}
              </Button>
              <p className="mt-2 text-sm text-gray-500">
                Click to select an audio file
              </p>
            </div>
          </label>
        ) : (
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <span className="text-sm truncate">
                {uploadedFile.name}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePreview}
              >
                <Play className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceUpload;
