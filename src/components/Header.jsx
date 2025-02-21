import React, { useState, useEffect } from 'react';
import { Menu, X, Globe2, Phone, Users, MessageSquare } from 'lucide-react';
import logoImage from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', icon: <Globe2 className="w-4 h-4" /> },
    { name: 'Solutions', href: '#solutions', icon: <Phone className="w-4 h-4" /> },
    { name: 'About Us', href: '#about', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const headerClass = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3' : 'bg-black/80 backdrop-blur-sm py-5'
  }`;

  return (
    <header className={headerClass}>
      <div className="container-custom mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="h-20 w-auto" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-1 hover-lift ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-400'
                }`}
              >
                <div className={isScrolled ? 'text-primary-600' : 'text-primary-400'}>{link.icon}</div>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled 
                ? 'hover:bg-gray-100 text-gray-900' 
                : 'hover:bg-white/10 text-white'
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
            <div className="py-4 space-y-2 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 py-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="text-primary-600">{link.icon}</div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;