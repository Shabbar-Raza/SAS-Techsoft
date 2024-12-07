import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleExploreWork = () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuote = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Innovating Web Experiences,
            <br />
            <span className="text-gold-400">Empowering Your Business</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We craft exceptional digital experiences that transform businesses and engage users.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              onClick={handleGetQuote}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-400 text-navy-900 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gold-500 transition-colors"
            >
              Get a Free Quote
              <ChevronRight size={20} />
            </motion.button>
            <motion.button
              onClick={handleExploreWork}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};