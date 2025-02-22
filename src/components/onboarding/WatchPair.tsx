
import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const WatchPair = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
            <div className="h-2 w-2 rounded-full bg-[#9b87f5]" />
            <div className="h-2 w-2 rounded-full bg-[#8E9196]" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Pair Apple Watch
          </h1>
          <p className="text-sm text-gray-500">
            For the optimal experience, we recommend pairing Apple Watch
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 py-8">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
            <Apple className="h-12 w-12" />
          </div>
          <span className="text-sm font-medium">Alex's Watch</span>
        </div>

        <Button
          className="w-full bg-black text-white hover:bg-gray-800"
          onClick={() => navigate("/")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
