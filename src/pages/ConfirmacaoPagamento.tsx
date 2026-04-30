import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ConfirmacaoPagamento = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-2xl font-bold">Confirmação de pagamento</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {/* Conteúdo futuro será adicionado aqui */}
          <p className="text-gray-600 mb-6">Seleção de pagamento confirmada.</p>
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfirmacaoPagamento;