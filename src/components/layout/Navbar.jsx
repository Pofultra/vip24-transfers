import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'nav.home' },
    { href: '/about', label: 'nav.about' },
    { href: '/services', label: 'nav.services' },
  ];

  return (
    <nav className={clsx(
      'fixed w-full z-50 transition-all duration-300',
      {
        'bg-black/90 shadow-lg': isScrolled,
        'bg-transparent': !isScrolled
      }
    )}>
      {/* Navbar content */}
    </nav>
  );
};

export default Navbar;