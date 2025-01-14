import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white">
      {/* Footer content */}
    </footer>
  );
};

export default Footer;