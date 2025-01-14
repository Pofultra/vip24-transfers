import React from 'react';
import Card from '../common/Card';
import { useTranslation } from '../../hooks/useTranslation';

const ServicesGrid = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'airport',
      title: 'services.airport.title',
      description: 'services.airport.description',
    },
    // ... más servicios
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card 
          key={index}
          hover
          className="text-center"
        >
          {/* Service card content */}
        </Card>
      ))}
    </div>
  );
};

export default ServicesGrid;