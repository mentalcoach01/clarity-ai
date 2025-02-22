
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import VoiceCloning from "@/components/VoiceCloning";
import Affirmations from "@/components/Affirmations";
import StressMonitor from "@/components/StressMonitor";
import CalendarIntegration from "@/components/CalendarIntegration";
import { 
  Home, 
  Brain, 
  Calendar, 
  Activity, 
  LogOut,
  Search,
  Bell,
  UserCircle,
  Menu,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    if (!session) {
      navigate("/auth");
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/auth");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) return null;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-100 via-purple-50 to-white">
        {/* Left Sidebar */}
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="p-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">AI Mental Coach</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/" className="flex items-center space-x-3 px-4 text-gray-700 hover:text-purple-600">
                    <Home className="h-6 w-6" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="#voice" className="flex items-center space-x-3 px-4 text-gray-700 hover:text-purple-600">
                    <Brain className="h-6 w-6" />
                    <span>Voice</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="#stress" className="flex items-center space-x-3 px-4 text-gray-700 hover:text-purple-600">
                    <Activity className="h-6 w-6" />
                    <span>Stress</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="#calendar" className="flex items-center space-x-3 px-4 text-gray-700 hover:text-purple-600">
                    <Calendar className="h-6 w-6" />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Top Navigation */}
          <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 w-full">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <SidebarTrigger>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SidebarTrigger>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <UserCircle className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-purple-600"
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="p-8">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* New Half Banner */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="flex items-center">
                  <div className="w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                      alt="Woman working on laptop"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Start Your Mental Wellness Journey Today</h2>
                    <p className="text-gray-600">Experience personalized mental coaching with AI-powered insights and support. Let's work together to achieve your mental wellness goals.</p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

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
      </div>
    </SidebarProvider>
  );
};

export default Index;

