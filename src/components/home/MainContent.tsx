
import VoiceCloning from "@/components/VoiceCloning";
import Affirmations from "@/components/Affirmations";
import StressMonitor from "@/components/StressMonitor";
import CalendarIntegration from "@/components/CalendarIntegration";
import Banner from "./Banner";

const MainContent = () => {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <Banner />
        <h2 className="text-2xl font-bold text-gray-900">
          Explore
        </h2>
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

export default MainContent;
