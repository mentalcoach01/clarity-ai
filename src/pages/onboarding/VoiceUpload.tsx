
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Pause, Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const VoiceUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('audio/')) {
        setUploadedFile(file);
      } else {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload an audio file",
        });
      }
    }
  };

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
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
            <span className="text-sm">{uploadedFile.name}</span>
            <Button variant="ghost" size="icon" onClick={togglePlayback}>
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
          </div>
          <audio
            ref={audioRef}
            src={URL.createObjectURL(uploadedFile)}
            onEnded={handleAudioEnd}
            className="hidden"
          />
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
