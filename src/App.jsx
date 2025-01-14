import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Globe, Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

// Custom hooks
import { useTranslation } from './hooks/useTranslation';

// Components
import Button from './components/common/Button';

// Language options
const languages = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      services: "Servicios",
      book: "Reservar"
    },
    hero: {
      title: "Traslados Premium en Zúrich",
      subtitle: "Servicio exclusivo de transporte las 24 horas",
      cta: "Reservar Ahora"
    },
    footer: {
      contact: "Contacto",
      quickLinks: "Enlaces Rápidos",
      rights: "Todos los derechos reservados"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      book: "Book Now"
    },
    hero: {
      title: "Premium Transfers in Zurich",
      subtitle: "Exclusive 24/7 Transportation Service",
      cta: "Book Now"
    },
    footer: {
      contact: "Contact",
      quickLinks: "Quick Links",
      rights: "All rights reserved"
    }
  }
};

const App = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = languages[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-2xl text-white">
              VIP24-transfers
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-white">
              <a href="#home" className="hover:text-gold transition-colors">{t.nav.home}</a>
              <a href="#about" className="hover:text-gold transition-colors">{t.nav.about}</a>
              <a href="#services" className="hover:text-gold transition-colors">{t.nav.services}</a>
              <Button variant="primary">
                {t.nav.book}
              </Button>
              <button 
                onClick={() => setCurrentLang(currentLang === 'en' ? 'es' : 'en')}
                className="flex items-center space-x-2 hover:text-gold transition-colors"
              >
                <Globe size={20} />
                <span>{currentLang.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 text-white">
              <a href="#home" className="block px-3 py-2 hover:bg-gold/20">{t.nav.home}</a>
              <a href="#about" className="block px-3 py-2 hover:bg-gold/20">{t.nav.about}</a>
              <a href="#services" className="block px-3 py-2 hover:bg-gold/20">{t.nav.services}</a>
              <button className="w-full text-left px-3 py-2 text-gold hover:bg-gold/20">
                {t.nav.book}
              </button>
              <button 
                onClick={() => setCurrentLang(currentLang === 'en' ? 'es' : 'en')}
                className="w-full text-left px-3 py-2 flex items-center space-x-2 hover:bg-gold/20"
              >
                <Globe size={20} />
                <span>{currentLang.toUpperCase()}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home"
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeIn">{t.hero.subtitle}</p>
          <Button 
            variant="primary"
            className="animate-fadeIn"
          >
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-gray-600 mb-4">
                Vip24-transfers es su socio de confianza para traslados premium en Zúrich. 
                Nos especializamos en servicios de transporte exclusivo, ofreciendo comodidad 
                y elegancia en cada viaje.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight className="text-gold" />
                  <span>Servicio disponible 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight className="text-gold" />
                  <span>Chóferes profesionales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight className="text-gold" />
                  <span>Flota de vehículos de lujo</span>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <img 
                src="/images/about-img.jpg" 
                alt="Luxury vehicle" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Traslados al Aeropuerto</h3>
              <p className="text-gray-600">
                Servicio puerta a puerta desde y hacia el aeropuerto de Zúrich, 
                con monitoreo de vuelos y asistencia con equipaje.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Tours por la Ciudad</h3>
              <p className="text-gray-600">
                Descubra Zúrich con nuestros tours personalizados en vehículos 
                de lujo con chófer privado.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Eventos Especiales</h3>
              <p className="text-gray-600">
                Servicio premium para eventos corporativos, bodas y ocasiones 
                especiales en Zúrich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VIP24-transfers</h3>
              <p className="text-gray-400">
                Su socio de confianza para traslados premium en Zúrich
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone size={20} className="text-gold" />
                  <span>+41 XX XXX XX XX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={20} className="text-gold" />
                  <span>info@vip24-transfers.ch</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={20} className="text-gold" />
                  <span>Zúrich, Suiza</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
              <div className="space-y-2">
                <a href="#home" className="block hover:text-gold">{t.nav.home}</a>
                <a href="#about" className="block hover:text-gold">{t.nav.about}</a>
                <a href="#services" className="block hover:text-gold">{t.nav.services}</a>
                <a href="#book" className="block hover:text-gold">{t.nav.book}</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VIP24-transfers. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;