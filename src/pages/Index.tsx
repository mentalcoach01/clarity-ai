
import VoiceCloning from "@/components/VoiceCloning";
import Affirmations from "@/components/Affirmations";
import StressMonitor from "@/components/StressMonitor";
import CalendarIntegration from "@/components/CalendarIntegration";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">AI Mental Coach</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VoiceCloning />
          <StressMonitor />
          <Affirmations />
          <CalendarIntegration />
        </div>
      </div>
    </div>
  );
};

export default Index;
