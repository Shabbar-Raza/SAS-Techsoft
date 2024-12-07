import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Innovation First',
    description: 'We stay ahead of industry trends, leveraging the latest technologies.'
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Your success is our priority, with solutions tailored to your needs.'
  },
  {
    icon: Rocket,
    title: 'Proven Excellence',
    description: 'Years of experience delivering exceptional web solutions.'
  },
  {
    icon: Zap,
    title: 'Rapid Delivery',
    description: 'Fast, efficient development without compromising quality.'
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-navy-900 mb-6"
          >
            About SAS Techsoft
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-gray-600"
          >
            <p>
              At SAS Techsoft, we believe in transforming ideas into digital masterpieces. With a team of visionary web developers and creative designers, we specialize in delivering innovative web solutions tailored to elevate businesses of all sizes.
            </p>
            <p>
              Founded by seasoned professionals with years of experience in the tech industry, SAS Techsoft has quickly emerged as a trusted partner for businesses seeking cutting-edge websites. Our portfolio spans diverse industries, showcasing our ability to craft websites that not only look exceptional but also perform flawlessly.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-navy-900 rounded-full flex items-center justify-center">
                <feature.icon className="text-gold-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center text-gray-600 space-y-6"
        >
          <p>
            What sets us apart is our passion for innovation, commitment to excellence, and a customer-centric approach. We stay ahead of industry trends, leveraging the latest technologies to ensure our clients receive state-of-the-art solutions.
          </p>
          <p>
            Whether it's a sleek corporate site, an engaging e-commerce platform, or a customized digital experience, we deliver results that drive growth and leave a lasting impression. At SAS Techsoft, we don't just build websites—we create digital experiences that resonate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};