import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import Button from '../common/Button';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center container-padding">
        <h1 className="heading-1 mb-6 animate-fadeIn">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fadeIn">
          {t('hero.subtitle')}
        </p>
        <Button 
          variant="primary" 
          className="animate-fadeIn"
          onClick={() => navigate('/booking')}
        >
          {t('hero.cta')}
        </Button>
      </div>
    </section>
  );
};

export default Hero;