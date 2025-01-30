import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      description: 'Available 24/7 for urgent requests'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'contact@cassybridge.com',
      description: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'New York, NY',
      description: 'Available nationwide'
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
            Need interpretation services? Contact us for a free consultation and quote.
            We're here to help you break language barriers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 font-medium">{item.detail}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="onsite">On-site Interpretation</option>
                    <option value="phone">Phone Interpretation</option>
                    <option value="video">Video Interpretation</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-textarea w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full btn btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;