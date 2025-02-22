
import VoiceCloning from "@/components/VoiceCloning";
import Affirmations from "@/components/Affirmations";
import StressMonitor from "@/components/StressMonitor";
import CalendarIntegration from "@/components/CalendarIntegration";
import { Home, Brain, Calendar, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Mental Coach</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <NavLink icon={<Home className="h-5 w-5" />} label="Home" active />
              <NavLink icon={<Brain className="h-5 w-5" />} label="Voice" />
              <NavLink icon={<Activity className="h-5 w-5" />} label="Stress" />
              <NavLink icon={<Calendar className="h-5 w-5" />} label="Calendar" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Welcome to Your AI Mental Coach
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VoiceCloning />
            <StressMonitor />
            <Affirmations />
            <CalendarIntegration />
          </div>
        </div>
      </div>
    </div>
  );
};

// NavLink component for navigation items
const NavLink = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <a
    href="#"
    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
      active
        ? "text-purple-600 bg-purple-50"
        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
    } transition-colors duration-150 ease-in-out`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </a>
);

export default Index;

