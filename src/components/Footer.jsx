import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Cassy Bridge</h3>
              <p className="mt-2 text-sm">Professional Interpretation Services</p>
            </div>
            <p className="text-gray-400">
              Breaking language barriers with professional interpretation services. Available 24/7 for all your communication needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="flex items-center hover:text-primary-500 transition-colors">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center hover:text-primary-500 transition-colors">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center hover:text-primary-500 transition-colors">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </li>
              <li>
                <a href="#book" className="flex items-center hover:text-primary-500 transition-colors">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Book Interpreter
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  On-Site Interpretation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Phone Interpretation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Video Interpretation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Document Translation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Conference Interpretation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <span>contact@cassybridge.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary-500" />
                <span>123 Business Ave, New York, NY 10001</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} Cassy Bridge Interpreting. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;