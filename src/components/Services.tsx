import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Search, Settings } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Custom Website Design',
    description: 'Bespoke websites tailored to your brand identity and business goals.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description: 'Powerful online stores with seamless shopping experiences.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your visibility and reach your target audience effectively.'
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: '24/7 technical support and regular updates to keep your site running smoothly.'
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive web solutions to help your business thrive in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gold-400 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-navy-900" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};