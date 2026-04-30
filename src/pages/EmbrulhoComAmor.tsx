import { useState } from "react";
import { Gift, Heart, Sparkles, Package, ShoppingBag, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const basketThemes = [
  {
    id: "classic",
    name: "Clássica",
    colors: ["#fef3c7", "#fde68a"],
    icon: Gift,
  },
  {
    id: "modern",
    name: "Moderna",
    colors: ["#1e293b", "#0f172a"],
    icon: Sparkles,
  },
];

const CestasPersonalizadas = () => {
  const [selectedTheme, setSelectedTheme] = useState(basketThemes[0]);
  const [hasMessage, setHasMessage] = useState(true);
  const [isWrapped, setIsWrapped] = useState(false);
  const [personalMessage, setPersonalMessage] = useState("Com todo o meu carinho...");

  const handleWrapGift = () => {
    setIsWrapped(true);
    setTimeout(() => setIsWrapped(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <Gift className="w-8 h-8 text-gray-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent">
              Cestas Personalizadas
            </h1>
            <Heart className="w-8 h-8 text-gray-500 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crie cestas especiais com itens que combinam com cada ocasião
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Basket Preview */}
          <Card className="overflow-hidden border-2 border-dashed border-gray-200">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-gray-500" />
                Catálogo
              </CardTitle>
              <CardDescription>Veja como ficará sua cesta no catálogo</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div
                className={cn(
                  "relative w-64 h-64 rounded-xl shadow-2xl transition-all duration-700 transform hover:scale-105",
                  isWrapped && "animate-bounce",
                )}
              >
                {/* Basket */}
                <div
                  className="absolute inset-0 rounded-xl shadow-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${selectedTheme.colors[0]}, ${selectedTheme.colors[1]})`,
                  }}
                >
                  <div className="text-white text-center p-4">
                    <Package className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <p className="font-semibold text-lg">Cesta Especial</p>
                  </div>
                </div>

                {/* Ribbon */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-8 rounded-full shadow-md bg-gray-800" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-20 rounded-full shadow-md bg-gray-800" />

                {/* Bow */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-gray-800">
                  <Heart className="w-6 h-6 text-white" />
                </div>

                {/* Message Tag */}
                {hasMessage && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg min-w-[200px]">
                    <p className="text-sm text-gray-700 font-medium text-center italic">
                      "{personalMessage}"
                    </p>
                  </div>
                )}
              </div>

              {isWrapped && (
                <div className="mt-8 flex items-center gap-2 text-gray-600 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  <span>Cesta montada com sucesso! ✨</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Customization Panel */}
          <div className="space-y-6">
            {/* Personal Message */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-gray-500" />
                  Mensagem Pessoal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  placeholder="Escreva uma mensagem especial..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-500 focus:outline-none resize-none text-gray-700"
                  rows={3}
                />
              </CardContent>
            </Card>

            {/* Action Button */}
            <Button
              onClick={handleWrapGift}
              className="w-full py-6 text-lg font-bold bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Montar Minha Cesta
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cesta Premium</h3>
              <p className="text-gray-600 text-sm">Materiais de alta qualidade para uma cesta incrível</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Feita com Carinho</h3>
              <p className="text-gray-600 text-sm">Cada detalhe pensado para você</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Personalizado</h3>
              <p className="text-gray-600 text-sm">Opções infinitas para criar a cesta dos sonhos</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CestasPersonalizadas;