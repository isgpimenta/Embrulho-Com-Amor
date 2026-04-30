import { MadeWithDyad } from "@/components/made-with-dyad";
import { Gift, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
          <Gift className="w-8 h-8 text-gray-500" />
          <span className="text-lg font-medium text-gray-700">Presentes que emocionam</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent">
          Embrulho Com Amor
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transforme cada presente em uma lembrança inesquecível com nosso embrulho especial, 
          feito com carinho e atenção aos detalhes
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-6 text-lg group"
            onClick={() => window.location.href = '/embrulho-com-amor'}
          >
            Criar Embrulho
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-6 text-lg"
          >
            Ver Exemplos
          </Button>
        </div>

        <Card className="max-w-2xl mx-auto border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Heart className="w-6 h-6 text-gray-500" />
              Por que escolher nosso embrulho?
            </CardTitle>
            <CardDescription className="text-center">
              Feito com os melhores materiais e muito carinho
            </CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-gray-100">
              <p className="font-semibold text-gray-700 mb-2">Premium</p>
              <p className="text-sm text-gray-600">Materiais de alta qualidade</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-200">
              <p className="font-semibold text-gray-700 mb-2">Personalizado</p>
              <p className="text-sm text-gray-600">Feito sob medida para você</p>
            </div>
            <div className="p-4 rounded-lg bg-gray-100">
              <p className="font-semibold text-gray-700 mb-2">Especial</p>
              <p className="text-sm text-gray-600">Para momentos únicos</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;