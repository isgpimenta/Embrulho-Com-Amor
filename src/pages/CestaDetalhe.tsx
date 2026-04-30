import { useParams, useNavigate } from "react-router-dom";
import { Gift, Sparkles, Palette, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const basketThemes = [
  {
    id: "classic",
    name: "Cesta Um",
    price: "R$ 199,90",
    colors: ["#fef3c7", "#fde68a"],
    icon: Gift,
    image: "/cesta 1.jpeg",
  },
  {
    id: "modern",
    name: "Cesta Dois",
    price: "R$ 299,90",
    colors: ["#1e293b", "#0f172a"],
    icon: Sparkles,
    image: "/cesta 2.jpeg",
  },
  {
    id: "minimal",
    name: "Cesta Três",
    price: "R$ 149,90",
    colors: ["#e5e7eb", "#d1d5db"],
    icon: Palette,
    image: "/cesta 3.jpeg",
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
            <CardTitle className="flex flex-col items-center gap-2">
              <Icon className="w-5 h-5 text-gray-500" />
              <span>{theme.name}</span>
              <span className="text-sm text-gray-600">{theme.price}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-16">
            {theme.image ? (
              <img
                src={theme.image}
                alt={theme.name}
                className="w-full max-w-md max-h-96 rounded-xl object-contain shadow-2xl transition-all duration-700 transform hover:scale-105"
              />
            ) : (
              <div
                className={cn(
                  "relative w-full max-w-lg h-80 md:h-96 rounded-xl shadow-2xl transition-all duration-700 transform hover:scale-105",
                )}
                style={{
                  background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
                }}
              >
                <Icon className="w-20 h-20 text-white mx-auto mt-16" />
                <p className="mt-4 text-center text-white font-semibold text-xl">
                  {theme.name}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CestaDetalhe;