import { Brain, Home, Activity, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
const LeftSidebar = () => {
  return <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-purple-600" />
          <span className="text-xl font-bold text-gray-900">ClarityAi</span>
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
    </Sidebar>;
};
export default LeftSidebar;