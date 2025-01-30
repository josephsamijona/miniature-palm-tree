import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  image, 
  features = [], 
  isPopular = false 
}) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </div>
        )}

        {/* Icon */}
        <div className="absolute left-4 bottom-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="mr-2 text-primary-600">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Action Button */}
        <button className="group/btn inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
          Learn More 
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 rounded-2xl transition-colors pointer-events-none" />
    </div>
  );
};

export default ServiceCard;

// Usage Example:
/*
import { Globe2 } from 'lucide-react';
import serviceImage from '../assets/images/service1.jpg';

<ServiceCard
  title="On-Site Interpretation"
  description="Professional interpretation services for your meetings and events"
  icon={Globe2}
  image={serviceImage}
  features={[
    "Real-time interpretation",
    "Professional certified interpreters",
    "Technical equipment provided",
    "Multiple language support"
  ]}
  isPopular={true}
/>
*/