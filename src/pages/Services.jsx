import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import PricingSection from '../components/services/PricingSection';

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <ServicesHero />
      <ServicesList />
      <PricingSection />
    </>
  );
};

export default Services;