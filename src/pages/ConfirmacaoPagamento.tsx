import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ConfirmacaoPagamento = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Obtém o parâmetro de query ?method=...
  const params = new URLSearchParams(location.search);
  const method = params.get("method");

  const showPixKey = method === "pix";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-2xl font-bold">Confirmação de pagamento</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">Seleção de pagamento confirmada.</p>

          {showPixKey && (
            <p className="text-lg font-medium text-gray-800">
              Chave Pix (e‑mail): <span className="text-rose-600">joycebernardo07@gmail.com</span>
            </p>
          )}

          {/* Texto atualizado com link correto */}
          <p className="text-sm text-gray-700">
            Após efetuar o pagamento, envie o comprovante para{" "}
            <a
              href="https://wa.me/5535997362964"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:underline"
            >
              https://wa.me/5535997362964
            </a>
          </p>

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