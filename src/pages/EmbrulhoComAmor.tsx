import { MadeWithDyad } from "@/components/made-with-dyad";

const EmbrulhoComAmor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-8">
          Embrulho Com Amor
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Transformamos momentos especiais em lembranças inesquecíveis com nossos 
            embrulhos personalizados e cheios de carinho.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-pink-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">Personalizado</h3>
              <p className="text-gray-600">Criamos designs únicos que refletem a personalidade de cada presente.</p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-purple-600 mb-3">Com Amor</h3>
              <p className="text-gray-600">Cada embrulho é feito com dedicação e muito carinho.</p>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Qualidade</h3>
              <p className="text-gray-600">Materiais premium que garantem beleza e resistência.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Embrulho presente para todas as ocasiões</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Cartões personalizados</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Ribbon e acessórios decorativos</span>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                <span className="text-gray-700">Embrulho expresso</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">contato@embrulhoamor.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 99999-9999</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço</h3>
              <p className="text-gray-600">São Paulo, SP</p>
            </div>
          </div>
        </div>
      </div>
      
      <MadeWithDyad />
    </div>
  );
};

export default EmbrulhoComAmor;