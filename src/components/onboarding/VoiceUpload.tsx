
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

export const VoiceUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFile(event.target.files[0]);
    }
  };

  const handleContinue = () => {
    navigate("/onboarding/calendar");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#9b87f5]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Upload a sample of your voice
          </h1>
        </div>

        {!uploadedFile ? (
          <div className="flex flex-col items-center space-y-4">
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileUpload}
              className="hidden"
              id="voice-upload"
            />
            <label htmlFor="voice-upload">
              <Button
                className="bg-black text-white hover:bg-gray-800"
                type="button"
              >
                Upload
              </Button>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">
                {uploadedFile.name}
              </span>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-gray-200"
              >
                <Play className="h-5 w-5" />
              </Button>
            </div>
            <Button
              className="w-full bg-black text-white hover:bg-gray-800"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
