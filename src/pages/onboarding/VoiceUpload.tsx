
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Upload } from "lucide-react";

const VoiceUpload = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
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

      {!uploadedFile ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <input
            type="file"
            accept="audio/*"
            className="hidden"
            id="voice-upload"
            onChange={handleFileUpload}
          />
          <label htmlFor="voice-upload">
            <Button variant="outline" className="gap-2">
              <Upload className="h-5 w-5" />
              Upload
            </Button>
          </label>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between p-4 border rounded-md mb-8">
            <span className="text-sm">Voice.mp3</span>
            <Button variant="ghost" size="icon">
              <Play className="h-5 w-5" />
            </Button>
          </div>
          <Button
            className="w-full"
            onClick={() => navigate('/onboarding/calendar')}
          >
            Continue
          </Button>
        </>
      )}
    </div>
  );
};

export default VoiceUpload;
