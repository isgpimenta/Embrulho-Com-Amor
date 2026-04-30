"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const EmbrulhoComAmor = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-primary">
            Embrulho Com Amor
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center text-gray-700">
          <p>Bem‑vindo à página de embrulhos personalizados.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmbrulhoComAmor;