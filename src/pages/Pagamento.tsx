import { useNavigate } from "react-router-dom";
import { CreditCard, Wallet } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Pagamento = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-2xl font-bold">Escolha o método de pagamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => alert("Pagamento com cartão ainda não implementado")}
          >
            <CreditCard className="w-5 h-5" />
            Cartão de Crédito/Débito
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={() => alert("Pagamento com Pix ainda não implementado")}
          >
            <Wallet className="w-5 h-5" />
            Pix
          </Button>

          <Button
            variant="ghost"
            className="w-full flex items-center justify-center gap-2 mt-4"
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

export default Pagamento;