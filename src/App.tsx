
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import NotFound from "@/pages/NotFound";
import { FocusSelection } from "@/components/onboarding/FocusSelection";
import { VoiceSample } from "@/components/onboarding/VoiceSample";
import { CalendarConnect } from "@/components/onboarding/CalendarConnect";
import { OnboardingLayout } from "@/components/onboarding/OnboardingLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/onboarding"
          element={
            <OnboardingLayout>
              <FocusSelection />
            </OnboardingLayout>
          }
        />
        <Route
          path="/onboarding/voice"
          element={
            <OnboardingLayout>
              <VoiceSample />
            </OnboardingLayout>
          }
        />
        <Route
          path="/onboarding/calendar"
          element={
            <OnboardingLayout>
              <CalendarConnect />
            </OnboardingLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
