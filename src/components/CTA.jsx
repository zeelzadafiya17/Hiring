import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight, FaStar, FaUsers, FaShieldAlt, FaChartLine } from 'react-icons/fa';

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-sky-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-sky-200/20 to-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-100/15 to-sky-100/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Section */}
            <div className="p-12 lg:p-16">
              {/* Premium Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center mb-8"
              >
                <span className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-6 py-3 rounded-full text-lg font-black shadow-xl border-2 border-blue-400/30 flex items-center space-x-2">
                  <FaRocket className="w-5 h-5" />
                  <span>Ready to Transform?</span>
                </span>
              </motion.div>

              {/* Premium Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
              >
                Start Your{' '}
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text">
                  AI-Powered
                </span>
                <br />
                Hiring Journey Today
              </motion.h2>

              {/* Premium Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-xl text-slate-600 leading-relaxed mb-8 font-medium"
              >
                Join 25,000+ enterprise companies who have revolutionized their recruitment with NURIX AI. Experience 15x faster hiring with 98% match accuracy.
              </motion.p>

              {/* Premium Feature List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="space-y-4 mb-10"
              >
                {[
                  { icon: FaChartLine, text: "Advanced AI Matching Algorithm" },
                  { icon: FaUsers, text: "Global Talent Pool Access" },
                  { icon: FaShieldAlt, text: "Enterprise-Grade Security" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-semibold text-lg">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Premium CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30"
                >
                  <span>Start Free Trial</span>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="ml-3"
                  >
                    <FaArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center px-10 py-4 bg-white/90 backdrop-blur-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  Schedule Demo
                </motion.button>
              </motion.div>

              {/* Premium Trust Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-8 pt-8 border-t border-blue-200"
              >
                <div className="flex items-center space-x-4 text-slate-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-5 h-5 text-blue-500" />
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5 from 15,000+ customers</span>
                </div>
              </motion.div>
            </div>

            {/* Visual Section */}
            <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-12 lg:p-16 flex items-center justify-center relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-600 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <FaRocket className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-10 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
              >
                <FaUsers className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl flex items-center justify-center shadow-2xl"
              >
                <span className="text-white font-black text-2xl">AI</span>
              </motion.div>

              {/* Main Visual */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                <div className="w-80 h-80 bg-white rounded-3xl shadow-2xl border border-blue-200/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <FaChartLine className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">98% Accuracy</h3>
                    <p className="text-blue-600 font-semibold">AI Matching Power</p>
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-blue-200/50"
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-blue-600">25K+</div>
                    <div className="text-sm text-slate-600 font-semibold">Companies</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-blue-200/50"
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-sky-600">15x</div>
                    <div className="text-sm text-slate-600 font-semibold">Faster</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 font-semibold mb-6 text-lg">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: "Microsoft", logo: "🔷" },
              { name: "Google", logo: "🟢" },
              { name: "Amazon", logo: "🟠" },
              { name: "Apple", logo: "🍎" },
              { name: "Meta", logo: "🔵" }
            ].map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-lg border border-blue-200/50"
              >
                <span className="text-2xl">{company.logo}</span>
                <span className="font-bold text-slate-700">{company.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default CTA; 