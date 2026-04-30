import { useState } from "react";
import { Gift, Sparkles, Palette, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

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
    name: "Minimalista",
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
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-gray-500" />
              Catálogo de Cestas
            </CardTitle>
            <CardDescription>Selecione uma cesta pelo número</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {basketThemes.map((theme, index) => (
                <button
                  key={theme.id}
                  onClick={() => handleSelect(theme)}
                  className={cn(
                    "p-4 rounded-xl border-2 transition-all hover:shadow-md flex flex-col items-center gap-2",
                    selectedTheme.id === theme.id
                      ? "border-gray-500 bg-gray-50"
                      : "border-gray-200 hover:border-gray-300",
                  )}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
                    }}
                  >
                    <theme.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">
                    {index + 1}
                  </span>
                  {selectedTheme.id === theme.id && (
                    <CheckCircle className="w-4 h-4 text-gray-500" />
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