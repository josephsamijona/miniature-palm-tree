import React from 'react';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import heroBackground from '../assets/images/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Professional interpreters in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-primary-500/10 text-primary-500 py-2 px-4 rounded-full text-sm font-medium">
                Professional Interpretation Services
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Breaking Language <br />
              <span className="text-primary-500">Barriers</span> in Business
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-xl">
              Expert interpretation services for meetings, conferences, and events. 
              Connecting businesses worldwide with professional language solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary group">
                <Calendar className="w-5 h-5 mr-2" />
                Book an Interpreter
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-500 font-bold">24/7</span>
                  </div>
                  <span>Available Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-500 font-bold">50+</span>
                  </div>
                  <span>Expert Interpreters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-500 font-bold">100%</span>
                  </div>
                  <span>Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Decorative Elements */}
          <div className="hidden lg:block relative">
            {/* Floating Elements */}
            <div className="absolute -top-20 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-900/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 25L60 31.7C120 38.3 240 51.7 360 55.8C480 60 600 55 720 46.7C840 38.3 960 26.7 1080 25C1200 23.3 1320 31.7 1380 35.8L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V25Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;