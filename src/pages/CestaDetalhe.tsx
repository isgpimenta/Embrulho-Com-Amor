import { useParams, useNavigate } from "react-router-dom";
import { Gift, Sparkles, Palette, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const basketThemes = [
  {
    id: "classic",
    name: "Cesta Um",
    price: "R$ 220,00",
    colors: ["#fef3c7", "#fde68a"],
    icon: Gift,
    image: "/cesta 1.jpeg",
    items: [
      "01 vela aromática",
      "01 foto polaróide",
      "01 pelúcia",
      "03 balões metalizados",
    ],
  },
  {
    id: "modern",
    name: "Cesta Dois",
    price: "R$ 120,00",
    colors: ["#1e293b", "#0f172a"],
    icon: Sparkles,
    image: "/cesta 2.jpeg",
    items: [
      "01 porta‑jóias",
      "01 caixa de Ferrero Rocher",
      "01 flor calandiva média",
    ],
  },
  {
    id: "minimal",
    name: "Cesta Três",
    price: "R$ 270,00",
    colors: ["#e5e7eb", "#d1d5db"],
    icon: Palette,
    image: "/cesta 3.jpeg",
    items: [
      "01 pelúcia",
      "01 caixa de Ferrero Rocher",
      "01 suco",
      "01 pacote com uvas",
      "01 pacote de pãezinhos",
    ],
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
              <Icon className="w-5 h-5 text-rose-500" />
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

            {/* Seção de Itens da Cesta */}
            <div className="mt-10 w-full max-w-md px-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Itens da Cesta
              </h3>
              <ul className="space-y-4 text-gray-600">
                {theme.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-rose-500 rounded-full flex-shrink-0"></span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CestaDetalhe;