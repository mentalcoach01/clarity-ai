
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Pause } from "lucide-react";

const VoicePreview = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fileName = localStorage.getItem('voiceFile') || 'Voice.mp3';
  const fileUrl = localStorage.getItem('voiceFileUrl');

  if (!fileUrl) {
    navigate('/onboarding/voice');
    return null;
  }

  const togglePlayback = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
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

      <div className="flex items-center justify-between p-4 border rounded-md mb-8">
        <span className="text-sm">{fileName}</span>
        <Button variant="ghost" size="icon" onClick={togglePlayback}>
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </Button>
      </div>

      <audio
        ref={audioRef}
        src={fileUrl}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />

      <Button
        className="w-full"
        onClick={() => navigate('/onboarding/calendar')}
      >
        Continue
      </Button>
    </div>
  );
};

export default VoicePreview;
