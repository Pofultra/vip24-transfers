import React, { useState, useEffect } from 'react';

export const VehicleCarousel = ({ vehicles }) => {
  const [currentVehicleIndex, setCurrentVehicleIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const vehicle = vehicles[currentVehicleIndex];

  // Cambiar imagen automáticamente cada 5 segundos
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % vehicle.images.length);
    }, 5000);

    return () => clearInterval(imageTimer);
  }, [vehicle.images.length]);

  // Cambiar de vehículo manualmente
  const handleNextVehicle = () => {
    setCurrentVehicleIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
    setCurrentImageIndex(0); // Reinicia al cambiar de vehículo
  };

  const handlePrevVehicle = () => {
    setCurrentVehicleIndex((prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length);
    setCurrentImageIndex(0); // Reinicia al cambiar de vehículo
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Imagen del vehículo */}
      <div className="relative h-80">
        {vehicle.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${vehicle.name} - ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Información del vehículo */}
      <div className="p-6 text-center relative flex justify-center items-center">
        {/* Botón anterior */}
        <button
          onClick={handlePrevVehicle}
          className="absolute left-4 bg-black/50 text-white p-2 rounded-full h-[3rem] w-[3rem] flex items-center justify-center"
        >
          ‹
        </button>

        <div>
          <h3
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", lineHeight: '1.2' }}
          >
            {vehicle.name}
          </h3>
          <p
            className="text-2xl md:text-3xl font-semibold text-gray-600"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Tarifa: <span className="text-gold font-bold">{vehicle.cost}/km</span>
          </p>
        </div>

        {/* Botón siguiente */}
        <button
          onClick={handleNextVehicle}
          className="absolute right-4 bg-black/50 text-white p-2 rounded-full h-[3rem] w-[3rem] flex items-center justify-center"
        >
          ›
        </button>
      </div>

      {/* Características en el fondo */}
      <div
        className="p-4"
        style={{
          background: 'linear-gradient(180deg, #4A4A4A, #2F2F2F)',
          color: 'white',
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <p className="text-sm text-center">
          {vehicle.features.join(' • ')}
        </p>
      </div>
    </div>
  );
};
