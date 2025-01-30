import React, { useState, useEffect } from 'react';
import { Menu, X, Globe2, Phone, Calendar, Search } from 'lucide-react';

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
    { name: 'About Us', href: '#about', icon: null },
    { name: 'Contact', href: '#contact', icon: null },
  ];

  const headerClass = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-black/80 backdrop-blur-sm py-4'
  }`;

  return (
    <header className={headerClass}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                Cassy Bridge
              </span>
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
                {link.icon && <div className={isScrolled ? 'text-primary-600' : 'text-primary-400'}>{link.icon}</div>}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`flex items-center space-x-1 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-400'
            }`}>
              <Search className="w-4 h-4" />
            </button>
            <a 
              href="#book" 
              className={`btn ${
                isScrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-white text-primary-600 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Interpreter
            </a>
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
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t">
                <a href="#book" className="btn btn-primary w-full justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Interpreter
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;