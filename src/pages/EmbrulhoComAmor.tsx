import { useState } from "react";
import { Gift, Heart, Sparkles, Package, ShoppingBag, Star, Palette, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const giftThemes = [
  {
    id: "romantic",
    name: "Romântico",
    colors: "from-rose-400 to-pink-500",
    accent: "bg-rose-500",
    icon: Heart,
  },
  {
    id: "elegant",
    name: "Elegante",
    colors: "from-slate-800 to-slate-900",
    accent: "bg-slate-600",
    icon: Sparkles,
  },
  {
    id: "festive",
    name: "Festivo",
    colors: "from-amber-400 to-orange-500",
    accent: "bg-amber-500",
    icon: Star,
  },
  {
    id: "minimal",
    name: "Minimalista",
    colors: "from-zinc-200 to-zinc-400",
    accent: "bg-zinc-500",
    icon: Palette,
  },
];

const ribbons = [
  { id: "classic", name: "Clássico", color: "bg-rose-500" },
  { id: "gold", name: "Dourado", color: "bg-amber-400" },
  { id: "silver", name: "Prata", color: "bg-slate-300" },
  { id: "velvet", name: "Veludo", color: "bg-purple-600" },
];

const EmbrulhoComAmor = () => {
  const [selectedTheme, setSelectedTheme] = useState(giftThemes[0]);
  const [selectedRibbon, setSelectedRibbon] = useState(ribbons[0]);
  const [hasMessage, setHasMessage] = useState(true);
  const [isWrapped, setIsWrapped] = useState(false);
  const [personalMessage, setPersonalMessage] = useState("Com todo o meu carinho...");

  const handleWrapGift = () => {
    setIsWrapped(true);
    setTimeout(() => setIsWrapped(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <Gift className="w-8 h-8 text-rose-500" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              Embrulho Com Amor
            </h1>
            <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforme cada presente em uma lembrança inesquecível com nosso embrulho especial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Gift Preview */}
          <Card className="overflow-hidden border-2 border-dashed border-rose-200">
            <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-rose-500" />
                Visualização do Presente
              </CardTitle>
              <CardDescription>Veja como ficará seu embrulho</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div 
                className={cn(
                  "relative w-64 h-64 rounded-xl shadow-2xl transition-all duration-700 transform hover:scale-105",
                  isWrapped && "animate-bounce"
                )}
              >
                {/* Gift Box */}
                <div className={cn(
                  "absolute inset-0 rounded-xl shadow-lg flex items-center justify-center",
                  selectedTheme.accent
                )}
                style={{
                  background: `linear-gradient(135deg, ${selectedTheme.colors})`
                }}
                >
                  <div className="text-white text-center p-4">
                    <Package className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <p className="font-semibold text-lg">Presente Especial</p>
                  </div>
                </div>

                {/* Ribbon */}
                <div className={cn(
                  "absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-8 rounded-full shadow-md",
                  selectedRibbon.color
                )}
                />
                <div className={cn(
                  "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-20 rounded-full shadow-md",
                  selectedRibbon.color
                )}
                />

                {/* Bow */}
                <div className={cn(
                  "absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center",
                  selectedRibbon.color
                )}
                >
                  <Heart className="w-6 h-6 text-white" />
                </div>

                {/* Message Tag */}
                {hasMessage && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg min-w-[200px]">
                    <p className="text-sm text-slate-700 font-medium text-center italic">
                      "{personalMessage}"
                    </p>
                  </div>
                )}
              </div>

              {isWrapped && (
                <div className="mt-8 flex items-center gap-2 text-rose-600 font-medium">
                  <CheckCircle className="w-5 h-5" />
                  <span>Presente embrulhado com sucesso! ✨</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Customization Panel */}
          <div className="space-y-6">
            {/* Theme Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-rose-500" />
                  Tema do Embrulho
                </CardTitle>
                <CardDescription>Escolha o estilo que combina com a ocasião</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {giftThemes.map((theme) => {
                    const Icon = theme.icon;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => setSelectedTheme(theme)}
                        className={cn(
                          "p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2",
                          selectedTheme.id === theme.id
                            ? "border-rose-500 bg-rose-50 shadow-md scale-105"
                            : "border-slate-200 hover:border-rose-300 hover:bg-rose-50"
                        )}
                      >
                        <div className={cn(
                          "w-12 h-12 rounded-lg flex items-center justify-center",
                          theme.accent
                        )}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-medium text-sm">{theme.name}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Ribbon Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Laço e Detalhes
                </CardTitle>
                <CardDescription>Personalize os detalhes do seu embrulho</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {ribbons.map((ribbon) => (
                    <button
                      key={ribbon.id}
                      onClick={() => setSelectedRibbon(ribbon)}
                      className={cn(
                        "p-3 rounded-lg border-2 transition-all duration-300 flex items-center gap-2",
                        selectedRibbon.id === ribbon.id
                          ? "border-rose-500 bg-rose-50 shadow-md"
                          : "border-slate-200 hover:border-rose-300"
                      )}
                    >
                      <div className={cn("w-8 h-3 rounded-full", ribbon.color)} />
                      <span className="text-sm font-medium">{ribbon.name}</span>
                    </button>
                  ))}
                </div>

                {/* Message Toggle */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-medium">Incluir mensagem</span>
                  </div>
                  <button
                    onClick={() => setHasMessage(!hasMessage)}
                    className={cn(
                      "w-12 h-6 rounded-full transition-colors",
                      hasMessage ? "bg-rose-500" : "bg-slate-300"
                    )}
                  >
                    <div className={cn(
                      "w-5 h-5 rounded-full bg-white shadow-md transition-transform",
                      hasMessage ? "translate-x-7" : "translate-x-1"
                    )} />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Personal Message */}
            {hasMessage && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500" />
                    Mensagem Pessoal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={personalMessage}
                    onChange={(e) => setPersonalMessage(e.target.value)}
                    placeholder="Escreva uma mensagem especial..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-rose-500 focus:outline-none resize-none text-slate-700"
                    rows={3}
                  />
                </CardContent>
              </Card>
            )}

            {/* Action Button */}
            <Button
              onClick={handleWrapGift}
              className="w-full py-6 text-lg font-bold bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Embrulhar Presente com Amor
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Embrulho Premium</h3>
              <p className="text-slate-600 text-sm">Materiais de alta qualidade para um acabamento perfeito</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Feito com Carinho</h3>
              <p className="text-slate-600 text-sm">Cada detalhe pensado para transmitir seus sentimentos</p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Personalizado</h3>
              <p className="text-slate-600 text-sm">Opções infinitas para criar o embrulho dos sonhos</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmbrulhoComAmor;