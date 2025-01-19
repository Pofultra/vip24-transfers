import React from 'react';
import { VehicleCarousel } from './VehicleCarousel';

const VehiclesSection = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Mercedes 01',
      cost: '$50/hora',
      features: [
        'Capacidad para 5 pasajeros',
        'Consumo eficiente de combustible',
        'Aire acondicionado',
        'Amplio espacio para equipaje',
        'Conexión WiFi',
        'Sistema de audio premium',
      ],
      images: ['/images/mercedes01.jpg', '/images/mercedes02.jpg', '/images/mercedes03.jpg'],
    },
    {
      id: 2,
      name: 'Mercedes V Class',
      cost: '$70/hora',
      features: [
        'Capacidad para 7 pasajeros',
        'Asientos confortables de lujo',
        'Aire acondicionado',
        'Sistema de entretenimiento',
        'Conexión WiFi',
        'Puertos de carga USB',
      ],
      images: ['/images/mercedes_1.jpg', '/images/mercedes_2.jpg', '/images/mercedes_3.jpg'],
    },
    {
      id: 3,
      name: 'Alfa Romeo Stelvio',
      cost: '$90/hora',
      features: [
        'Capacidad para 5 pasajeros',
        'Alto rendimiento y eficiencia',
        'Sistemas avanzados de seguridad',
        'Aire acondicionado',
        'Sistema de navegación',
        'Audio de alta fidelidad',
      ],
      images: ['/images/alfa_1.jpg', '/images/alfa_2.jpg', '/images/alfa_3.jpg'],
    },
  ];

  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Nuestros Vehículos
        </h2>
        <p
          className="text-center text-gray-700 mb-8"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Descubre nuestra flota de vehículos de lujo diseñada para brindarte comodidad y elegancia
          en cada viaje.
        </p>
        <VehicleCarousel vehicles={vehicles} />
      </div>
    </section>
  );
};

export default VehiclesSection;
