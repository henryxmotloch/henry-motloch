
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";
import AlohaPlumeriaPage from "./pages/AlohaPlumeriaPage";
import WillowGrovePage from "./pages/WillowGrovePage";
import BitmanMvpPage from "./pages/BitmanMvpPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/power-bi-dashboard" element={<ProjectPage />} />
          <Route path="/projects/aloha-plumeria" element={<AlohaPlumeriaPage />} />
          <Route path="/projects/willow-grove" element={<WillowGrovePage />} />
          <Route path="/projects/bitman-mvp" element={<BitmanMvpPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
