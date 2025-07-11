import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket, FaBrain, FaUsers, FaChartLine } from 'react-icons/fa';
import JobModal from './JobModal';

function IntroHero() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleCreate = (title) => {
    console.log('Created job:', title);
    setModalOpen(false);
  };

  // Enhanced floating particles animation
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
  }));

  return (
    <section
      id="intro-hero"
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-white"
    >
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blobs */}
        <motion.div
          animate={{
            x: [0, 140, 0],
            y: [0, -90, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-200/25 to-sky-200/25 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 140, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-gradient-to-r from-sky-200/20 to-blue-200/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -70, 0],
            rotate: [0, 90, 180],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-100/15 to-sky-100/15 rounded-full filter blur-3xl"
        />

        {/* Enhanced floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-300/30 to-sky-300/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.7,
            }}
          />
        ))}
      </div>

      {/* Sophisticated glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-blue-50/30 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-slate-800 flex flex-col items-center space-y-12">
        {/* Premium logo section */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-10"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(59, 130, 246, 0.4)",
                  "0 0 60px rgba(59, 130, 246, 0.6)",
                  "0 0 30px rgba(59, 130, 246, 0.4)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 bg-white/90 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border-2 border-blue-400/30"
            >
              <img 
                src="/visser-logo-final.svg" 
                alt="VISSER" 
                className="w-20 h-20 drop-shadow-lg"
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-sky-300/30"
            >
              <FaRocket className="text-lg text-white" />
            </motion.div>
            {/* Premium award badge */}
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 8, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-3 -left-4 w-10 h-10 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full flex items-center justify-center shadow-xl border-2 border-blue-300/30"
            >
              <span className="text-white font-bold text-sm">★</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced main headline */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black leading-[0.9] max-w-7xl tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
              VISSER
            </span>
            <br />
            <span className="text-slate-800 font-light tracking-wide">
              Next-Generation
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-blue-500 to-sky-600 text-transparent bg-clip-text">
              Talent Intelligence
            </span>
          </h1>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center"
          >
            <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-xl rounded-3xl px-8 py-4 border border-blue-200/50 shadow-2xl">
              <p className="text-blue-600 font-bold text-xl tracking-wide">
                Enterprise AI • ISO 27001 • SOC 2 Type II • GDPR Ready
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-5xl text-2xl sm:text-3xl md:text-4xl text-slate-700 leading-relaxed font-light tracking-wide text-center"
        >
          Transform your talent acquisition with enterprise-grade AI that delivers 
          <span className="text-blue-600 font-semibold"> 15x faster hiring</span>, 
          <span className="text-sky-600 font-semibold"> 98% accuracy</span>, and 
          <span className="text-blue-700 font-semibold"> seamless integration</span>.
        </motion.p>

        {/* Premium feature highlights */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { icon: FaUsers, text: "AI Talent Matching", color: "from-blue-500 to-sky-600" },
            { icon: FaChartLine, text: "Predictive Analytics", color: "from-sky-500 to-blue-600" },
            { icon: FaBrain, text: "Neural Networks", color: "from-blue-600 to-sky-500" },
            { icon: FaRocket, text: "Enterprise Scale", color: "from-sky-600 to-blue-700" },
          ].map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="group flex items-center space-x-4 bg-white/60 backdrop-blur-xl rounded-2xl px-8 py-4 border border-blue-200/40 hover:border-blue-300/60 transition-all duration-500 shadow-xl"
            >
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                <feature.icon className="text-white text-lg" />
              </div>
              <span className="text-slate-800 font-semibold tracking-wide text-lg">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-8"
        >
          <motion.button
            whileHover={{ 
              scale: 1.06, 
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.5)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setModalOpen(true)}
            className="group relative inline-flex items-center space-x-4 px-12 py-6 rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 hover:from-blue-600 hover:via-sky-600 hover:to-blue-700 transition-all duration-700 font-bold text-xl shadow-2xl border-2 border-blue-400/30 text-white"
          >
            <span className="relative z-10">Start Enterprise Trial</span>
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <FaArrowRight className="w-6 h-6" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            className="inline-flex items-center justify-center space-x-4 bg-white/80 backdrop-blur-xl border-2 border-blue-200/50 text-slate-800 hover:bg-white/90 hover:border-blue-300/70 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 shadow-xl"
          >
            <Link to="/jobs" className="flex items-center space-x-4">
              <span>Explore Platform</span>
              <span className="text-2xl">🚀</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Premium stats with enhanced design */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 w-full max-w-6xl"
        >
          {[
            { value: "25K+", label: "Enterprise Clients", icon: "🏢", color: "from-blue-500 to-sky-600" },
            { value: "1M+", label: "Successful Hires", icon: "🎯", color: "from-sky-500 to-blue-600" },
            { value: "99.2%", label: "Match Accuracy", icon: "⚡", color: "from-blue-600 to-sky-500" },
            { value: "15x", label: "Faster Hiring", icon: "🚀", color: "from-sky-600 to-blue-700" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 + index * 0.15 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="text-center group"
            >
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-blue-200/40 hover:border-blue-300/60 transition-all duration-500 group-hover:shadow-2xl">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-3`}>
                  {stat.value}
                </div>
                <div className="text-slate-700 font-semibold text-lg tracking-wide mb-2">
                  {stat.label}
                </div>
                <div className="w-full h-1 bg-blue-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: index * 0.3 }}
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium trust badges */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-wrap justify-center items-center gap-10 mt-16 pt-10 border-t border-blue-200/30"
        >
          {[
            { icon: "⭐", text: "4.9/5 Enterprise Rating", color: "text-blue-600" },
            { icon: "🛡️", text: "SOC 2 Type II Certified", color: "text-sky-600" },
            { icon: "🏆", text: "Gartner Magic Quadrant", color: "text-blue-700" },
            { icon: "🌍", text: "195+ Countries", color: "text-sky-700" },
          ].map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
              className="flex items-center space-x-3 text-slate-700"
            >
              <span className={`text-2xl ${badge.color}`}>{badge.icon}</span>
              <span className="font-semibold tracking-wide">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <JobModal open={modalOpen} onClose={() => setModalOpen(false)} onCreate={handleCreate} />
    </section>
  );
}

export default IntroHero; 