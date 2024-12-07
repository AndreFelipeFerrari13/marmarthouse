import React from 'react';

export function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Arte em Mármore e Granito
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transformando ambientes com elegância e sofisticação
          </p>
          <a
            href="#contact"
            className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-800 transition duration-300"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}