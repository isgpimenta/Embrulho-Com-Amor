import { useState } from "react";
import { Gift, Sparkles, Palette, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

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
  },
  {
    id: "minimal",
    name: "Cesta Três",
    price: "R$ 149,90",
    colors: ["#e5e7eb", "#d1d5db"],
    icon: Palette,
  },
];

const CestasPersonalizadas = () => {
  const [selectedTheme, setSelectedTheme] = useState(basketThemes[0]);
  const navigate = useNavigate();

  const handleSelect = (theme: typeof basketThemes[0]) => {
    setSelectedTheme(theme);
    navigate(`/cesta/${theme.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-gray-500" />
              Catálogo de Cestas
            </CardTitle>
            <CardDescription>Selecione uma cesta pelo número</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6">
              {basketThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleSelect(theme)}
                  className={cn(
                    "p-6 rounded-xl border-2 transition-all hover:shadow-md flex flex-row items-center gap-4 w-full text-left",
                    selectedTheme.id === theme.id
                      ? "border-gray-500 bg-gray-50"
                      : "border-gray-200 hover:border-gray-300",
                  )}
                >
                  {theme.image ? (
                    <img 
                      src={theme.image} 
                      alt={theme.name} 
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                  ) : (
                    <div
                      className="w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
                      }}
                    >
                      <theme.icon className="w-10 h-10 text-white" />
                    </div>
                  )}
                  <div className="flex flex-col flex-1">
                    <span className="text-xl font-bold text-gray-800">
                      {theme.name}
                    </span>
                    <span className="text-base text-gray-600">{theme.price}</span>
                  </div>
                  {selectedTheme.id === theme.id && (
                    <CheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CestasPersonalizadas;