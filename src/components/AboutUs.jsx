import React from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  return (
    <section id="aboutus" className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-sky-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-sky-200/15 to-blue-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center"
            >
              <span className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-8 py-3 rounded-full text-lg font-black shadow-xl border-2 border-blue-400/30">
                The Company
              </span>
            </motion.div>

            {/* Premium Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl font-black leading-tight"
            >
              <span className="text-slate-900">Get to Know Us</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text">
                Better
              </span>
            </motion.h2>

            {/* Premium Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-slate-600 leading-relaxed font-medium"
            >
              VISSER was founded in 2020 to revolutionize how companies connect with top talent globally. With a vision to redefine career connections and team building, our journey is powered by the success stories of countless professionals and businesses who have transformed their hiring processes through our advanced AI technology.
            </motion.p>

            {/* Premium Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="space-y-4"
            >
              {[
                "🚀 AI-Powered Talent Matching",
                "🌍 Global Reach & Local Impact", 
                "⚡ 15x Faster Hiring Process",
                "🎯 98% Match Accuracy Rate"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-4 text-lg font-semibold text-slate-700"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full"></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30"
              >
                Learn More About Us
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-10 py-4 bg-white/90 backdrop-blur-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-500"
              >
                View Our Story
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Premium Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Premium Frame */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-200/50">
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-100">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="VISSER Team Collaboration"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>

              {/* Premium Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-sky-600 rounded-2xl flex items-center justify-center shadow-xl border-2 border-blue-400/30"
              >
                <span className="text-white font-black text-2xl">AI</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-sky-400/30"
              >
                <span className="text-white font-bold text-lg">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Premium Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "2020", label: "Founded" },
            { number: "25K+", label: "Companies" },
            { number: "1M+", label: "Placements" },
            { number: "195", label: "Countries" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
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

export default AboutUs; 