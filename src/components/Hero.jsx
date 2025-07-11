import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaUsers, FaChartLine, FaShieldAlt, FaStar } from 'react-icons/fa';

function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-sky-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-sky-200/20 to-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/15 to-sky-100/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-12">
          {/* Premium Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <span className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-8 py-3 rounded-full text-lg font-black shadow-xl border-2 border-blue-400/30">
              Welcome to the Future of Hiring
            </span>
          </motion.div>

          {/* Premium Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          >
            <span className="text-slate-900">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text">
              Hiring Process
            </span>
            <br />
            <span className="text-slate-900">with AI</span>
          </motion.h1>

          {/* Premium Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto text-2xl text-slate-600 leading-relaxed font-medium"
          >
            Experience the power of intelligent recruitment with NURIX AI. Our advanced platform connects you with top talent faster, smarter, and more efficiently than ever before.
          </motion.p>

          {/* Premium Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: FaRocket, text: "15x Faster", color: "from-blue-500 to-sky-600" },
              { icon: FaChartLine, text: "98% Accuracy", color: "from-sky-500 to-blue-600" },
              { icon: FaUsers, text: "25K+ Companies", color: "from-blue-600 to-sky-500" },
              { icon: FaShieldAlt, text: "Enterprise Secure", color: "from-sky-600 to-blue-700" },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group flex items-center space-x-3 bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3 border border-blue-200/40 hover:border-blue-300/60 transition-all duration-500 shadow-lg"
              >
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <feature.icon className="text-white text-sm" />
                </div>
                <span className="text-slate-800 font-semibold tracking-wide">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30"
            >
              Get Started Today
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              className="inline-flex items-center px-12 py-5 bg-white/90 backdrop-blur-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <Link to="/jobs" className="flex items-center space-x-3">
                <span>View Opportunities</span>
                <span className="text-2xl">🚀</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Premium Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-16"
          >
            <p className="text-slate-500 font-semibold mb-8 text-lg">Trusted by Leading Companies Worldwide</p>
            
            <div className="flex flex-wrap justify-center items-center gap-12">
              {[
                { rating: "4.9/5", label: "Customer Rating", icon: "⭐" },
                { rating: "99.9%", label: "Uptime", icon: "🛡️" },
                { rating: "24/7", label: "Support", icon: "💬" },
                { rating: "SOC 2", label: "Certified", icon: "🔒" },
              ].map((trust, index) => (
                <motion.div
                  key={trust.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 + index * 0.1 }}
                  className="text-center bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-2xl mb-2">{trust.icon}</div>
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text mb-1">
                    {trust.rating}
                  </div>
                  <div className="text-slate-600 font-semibold text-sm">
                    {trust.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8"
            >
              {[
                { icon: "🏆", text: "Industry Leader 2024" },
                { icon: "🌟", text: "Best AI Platform" },
                { icon: "🎯", text: "Top Employer Choice" },
                { icon: "🚀", text: "Innovation Award" },
              ].map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                  className="flex items-center space-x-3 text-slate-600"
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="font-semibold">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
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

export default Hero; 