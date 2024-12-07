import React from 'react';
import { Menu, Phone, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo.png" alt="Art House Marmoraria" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900">Sobre</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900">Serviços</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-900">Portfólio</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900">Contato</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+551199999999" className="flex items-center text-gray-700">
              <Phone className="h-5 w-5 mr-2" />
              (11) 9999-9999
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}