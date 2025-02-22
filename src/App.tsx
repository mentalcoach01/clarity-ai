
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import FocusSelection from "./pages/onboarding/FocusSelection";
import VoiceUpload from "./pages/onboarding/VoiceUpload";
import CalendarConnect from "./pages/onboarding/CalendarConnect";
import WatchPairing from "./pages/onboarding/WatchPairing";

const queryClient = new QueryClient();

const App = () => {
  const hasCompletedOnboarding = localStorage.getItem("hasCompletedOnboarding") === "true";

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  hasCompletedOnboarding ? (
                    <Index />
                  ) : (
                    <Navigate to="/onboarding/focus" replace />
                  )
                } 
              />
              <Route path="/auth" element={<Navigate to="/" replace />} />
              <Route path="/onboarding/focus" element={<FocusSelection />} />
              <Route path="/onboarding/voice" element={<VoiceUpload />} />
              <Route path="/onboarding/calendar" element={<CalendarConnect />} />
              <Route path="/onboarding/watch" element={<WatchPairing />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

