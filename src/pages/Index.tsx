
import { SidebarProvider } from "@/components/ui/sidebar";
import TopNavigation from "@/components/home/TopNavigation";
import LeftSidebar from "@/components/home/LeftSidebar";
import MainContent from "@/components/home/MainContent";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-100 via-purple-50 to-white">
        <LeftSidebar />
        <div className="flex-1">
          <TopNavigation onLogout={() => {
            localStorage.removeItem("hasCompletedOnboarding");
            window.location.reload();
          }} />
          <MainContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;

