import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmbrulhoComAmor from "./pages/EmbrulhoComAmor";
import CestaDetalhe from "./pages/CestaDetalhe";
import Pagamento from "./pages/Pagamento";
import ConfirmacaoPagamento from "./pages/ConfirmacaoPagamento";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/embrulho-com-amor" element={<EmbrulhoComAmor />} />
          <Route path="/cesta/:id" element={<CestaDetalhe />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/confirmacao-pagamento" element={<ConfirmacaoPagamento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;