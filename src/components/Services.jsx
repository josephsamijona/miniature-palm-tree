import React from 'react';
import ServiceCard from './ServiceCard';
import { Globe2, Phone, Video, FileText, Users, Languages } from 'lucide-react';

// Import images
import onSiteImage from '../assets/images/onsite-service.jpg';
import phoneImage from '../assets/images/phone-service.jpg';
import videoImage from '../assets/images/video-service.jpg';
import documentImage from '../assets/images/document-service.jpg';
import conferenceImage from '../assets/images/conference-service.jpg';
import specializedImage from '../assets/images/specialized-service.jpg';

const Services = () => {
  const services = [
    {
      title: "On-Site Interpretation",
      description: "Professional interpretation services for meetings, conferences, and events",
      icon: Globe2,
      image: onSiteImage,
      features: [
        "Certified professional interpreters",
        "State-of-the-art equipment provided",
        "Support for multiple languages",
        "Perfect for conferences and large events"
      ],
      isPopular: true
    },
    {
      title: "Phone Interpretation",
      description: "24/7 remote interpretation services via telephone",
      icon: Phone,
      image: phoneImage,
      features: [
        "Available 24/7",
        "Immediate connection to interpreters",
        "Over 25 languages supported",
        "Pay-per-minute pricing"
      ]
    },
    {
      title: "Video Interpretation",
      description: "Real-time video interpretation for remote meetings",
      icon: Video,
      image: videoImage,
      features: [
        "HD video quality",
        "Secure and confidential",
        "Compatible with major platforms",
        "Technical support included"
      ]
    },
    {
      title: "Document Translation",
      description: "Accurate translation of business documents and materials",
      icon: FileText,
      image: documentImage,
      features: [
        "Legal document translation",
        "Technical documentation",
        "Marketing materials",
        "Certified translations available"
      ]
    },
    {
      title: "Conference Interpretation",
      description: "Specialized interpretation for large-scale events",
      icon: Users,
      image: conferenceImage,
      features: [
        "Simultaneous interpretation",
        "Multiple language pairs",
        "Professional booth setup",
        "Technical staff support"
      ]
    },
    {
      title: "Specialized Interpretation",
      description: "Industry-specific interpretation services",
      icon: Languages,
      image: specializedImage,
      features: [
        "Medical interpretation",
        "Legal interpretation",
        "Technical interpretation",
        "Financial sector expertise"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Interpretation Solutions
          </h2>
          <p className="text-gray-600">
            From on-site translation to remote services, we provide professional 
            language solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              features={service.features}
              isPopular={service.isPopular}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a customized solution? Contact us for a personalized quote.
          </p>
          <button className="btn btn-primary">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;