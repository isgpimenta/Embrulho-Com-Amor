import { useParams, useNavigate } from "react-router-dom";
import { Gift, Sparkles, Palette, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const basketThemes = [
  {
    id: "classic",
    name: "Cesta Um",
    colors: ["#fef3c7", "#fde68a"],
    icon: Gift,
  },
  {
    id: "modern",
    name: "Cesta Dois",
    colors: ["#1e293b", "#0f172a"],
    icon: Sparkles,
  },
  {
    id: "minimal",
    name: "Cesta Três",
    colors: ["#e5e7eb", "#d1d5db"],
    icon: Palette,
  },
];

export const CestaDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const theme = basketThemes.find((t) => t.id === id);

  if (!theme) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">Cesta não encontrada.</p>
        <Button
          variant="ghost"
          className="ml-4"
          onClick={() => navigate("/embrulho-com-amor")}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar ao catálogo
        </Button>
      </div>
    );
  }

  const Icon = theme.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate("/embrulho-com-amor")}
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Voltar ao catálogo
        </Button>

        <Card className="overflow-hidden border-2 border-dashed border-gray-200">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
            <CardTitle className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-gray-500" />
              {theme.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-12">
            <div
              className={cn(
                "relative w-64 h-64 rounded-xl shadow-2xl transition-all duration-700 transform hover:scale-105",
              )}
              style={{
                background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
              }}
            >
              <Icon className="w-16 h-16 text-white mx-auto mt-12" />
              <p className="mt-4 text-center text-white font-semibold">
                {theme.name}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CestaDetalhe;