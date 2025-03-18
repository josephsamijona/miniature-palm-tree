import React from 'react';
import { Phone, Mail, Clock,  Globe2 } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Globe2, // Replace MapPin with Globe2 to indicate online service
      title: 'Virtual Service',
      detail: 'Available Online',
      description: '500 Grossman Drive #1010, Braintree MA 02184'
    
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'cgsdlogistics@gmail.com',
      description: 'Response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+1 (774) 564-8187',
      description: 'Available 24/7 for urgent requests'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: '24/7 Availability',
      description: 'Always here to help'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600">
            Need interpretation services? We're here to help you break language barriers.
            Contact us today to learn how we can assist you with your language needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Contact Information Cards */}
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <div className="flex-shrink-0 mb-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium mb-1">{item.detail}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Contact;