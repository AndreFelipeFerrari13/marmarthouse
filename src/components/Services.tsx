import React from 'react';
import { Gem, Home, Building2, Trophy } from 'lucide-react';

const services = [
  {
    icon: <Home className="w-12 h-12" />,
    title: "Bancadas",
    description: "Bancadas personalizadas para cozinha e banheiro com acabamento premium."
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Escadas",
    description: "Escadas em mármore e granito com design exclusivo e instalação profissional."
  },
  {
    icon: <Gem className="w-12 h-12" />,
    title: "Revestimentos",
    description: "Revestimentos em pedras naturais para pisos e paredes."
  },
  {
    icon: <Trophy className="w-12 h-12" />,
    title: "Projetos Especiais",
    description: "Desenvolvimento de projetos especiais e peças sob medida."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600">Excelência em cada detalhe</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-blue-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}