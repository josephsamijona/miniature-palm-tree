import React from 'react';
import { CheckCircle, Award, Users, Globe2 } from 'lucide-react';
import aboutImage1 from '../assets/images/modern-conference-room.jpg';
import aboutImage2 from '../assets/images/interpretation-booth.jpg';

const About = () => {
  const features = [
    {
      title: "Industry Expertise",
      description: "Over a decade of excellence in professional interpretation services",
      icon: Award
    },
    {
      title: "Global Reach",
      description: "Serving clients across multiple industries worldwide",
      icon: Globe2
    },
    {
      title: "Certified Interpreters",
      description: "Team of certified professionals with extensive experience",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <span className="text-primary-600 font-semibold">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
              Setting the Standard in Professional Interpretation Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At CGSD LOGISTICS , we're dedicated to breaking down language 
              barriers and facilitating seamless communication across cultures. Our 
              commitment to excellence and professional integrity has made us a trusted 
              partner for businesses worldwide.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Advanced interpretation equipment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">Customized solutions for every client</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700">24/7 support and availability</span>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage1}
                alt="Modern conference room with interpretation equipment"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating Image */}
            <div className="absolute -bottom-12 -left-12 w-72 h-48 rounded-xl overflow-hidden shadow-lg hidden md:block">
              <img
                src={aboutImage2}
                alt="Professional interpretation booth"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-secondary-100 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;