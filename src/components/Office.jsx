import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUsers, FaBuilding, FaGlobe } from 'react-icons/fa';

function Office() {
  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Tech Street, Silicon Valley',
      employees: '250+',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      description: 'Our headquarters and main innovation hub',
      features: ['R&D Center', 'AI Lab', 'Training Hub']
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '456 Innovation Ave, Tech Quarter',
      employees: '180+',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
      description: 'European operations and client services',
      features: ['Client Success', 'Sales Hub', 'Support Center']
    },
    {
      city: 'Singapore',
      country: 'Asia Pacific',
      address: '789 Business District, Marina Bay',
      employees: '120+',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
      description: 'Asia-Pacific regional headquarters',
      features: ['Regional HQ', 'Development', 'Partnerships']
    }
  ];

  return (
    <section id="office" className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-sky-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-sky-200/15 to-blue-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center mb-8"
          >
            <span className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-8 py-3 rounded-full text-lg font-black shadow-xl border-2 border-blue-400/30 flex items-center space-x-2">
              <FaGlobe className="w-5 h-5" />
              <span>Global Presence</span>
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text">
              Offices
            </span>
            <br />
            Worldwide
          </h2>
          
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            From Silicon Valley to Singapore, our global team is dedicated to revolutionizing talent acquisition across every continent.
          </p>
        </motion.div>

        {/* Premium Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 overflow-hidden hover:shadow-3xl transition-all duration-700"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={office.image}
                  alt={`${office.city} office`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                
                {/* Floating Location Badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-2 shadow-xl border border-blue-200/50"
                >
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-slate-900">{office.country}</span>
                  </div>
                </motion.div>

                {/* Employee Count Badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-500 to-sky-600 rounded-2xl px-4 py-2 shadow-xl border-2 border-blue-400/30"
                >
                  <div className="flex items-center space-x-2">
                    <FaUsers className="w-4 h-4 text-white" />
                    <span className="font-black text-white">{office.employees}</span>
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* City Header */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-3xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-500"
                >
                  {office.city}
                </motion.h3>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="flex items-start space-x-3 mb-4"
                >
                  <FaBuilding className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-600 font-medium">{office.address}</span>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-slate-700 leading-relaxed mb-6 font-medium"
                >
                  {office.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                  className="space-y-3"
                >
                  <h4 className="font-black text-slate-900 text-lg">Key Functions</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + featureIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm border border-blue-200 shadow-lg"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                  className="mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl py-3 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30"
                  >
                    Visit This Office
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 p-12"
        >
          <h3 className="text-3xl font-black text-center text-slate-900 mb-12">Global Impact</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3", label: "Continents", icon: "🌍", color: "from-blue-500 to-sky-600" },
              { number: "550+", label: "Team Members", icon: "👥", color: "from-sky-500 to-blue-600" },
              { number: "24/7", label: "Global Support", icon: "🕐", color: "from-blue-600 to-sky-500" },
              { number: "195", label: "Countries Served", icon: "🌐", color: "from-sky-600 to-blue-700" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-semibold text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-black text-slate-900 mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text">
              Global Team
            </span>
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our mission of revolutionizing recruitment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30"
            >
              View Open Positions
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-10 py-4 bg-white/90 backdrop-blur-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default Office;

 