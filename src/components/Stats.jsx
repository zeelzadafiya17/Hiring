import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBriefcase, FaChartLine, FaRocket, FaShieldAlt, FaGlobe, FaAward, FaStar } from 'react-icons/fa';

function Stats() {
  // Animated counter hook
  const useAnimatedCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!hasAnimated) return;
      
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [end, duration, hasAnimated]);

    return [count, () => setHasAnimated(true)];
  };

  const [companiesCount, startCompaniesAnimation] = useAnimatedCounter(25000);
  const [talentCount, startTalentAnimation] = useAnimatedCounter(1000000);
  const [accuracyCount, startAccuracyAnimation] = useAnimatedCounter(99.2);
  const [speedCount, startSpeedAnimation] = useAnimatedCounter(15);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
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
            <span className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-8 py-3 rounded-full text-lg font-black shadow-xl border-2 border-blue-400/30">
              Platform Statistics
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Trusted by the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text">
              Best
            </span>
          </h2>
          
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Join thousands of companies worldwide who have transformed their hiring process with VISSER
          </p>
        </motion.div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { 
              icon: FaUsers, 
              count: companiesCount, 
              suffix: '+', 
              label: 'Enterprise Companies', 
              color: 'from-blue-500 to-sky-600',
              start: startCompaniesAnimation 
            },
            { 
              icon: FaBriefcase, 
              count: talentCount, 
              suffix: '+', 
              label: 'Successful Placements', 
              color: 'from-sky-500 to-blue-600',
              start: startTalentAnimation 
            },
            { 
              icon: FaChartLine, 
              count: accuracyCount, 
              suffix: '%', 
              label: 'Match Accuracy', 
              color: 'from-blue-600 to-sky-500',
              start: startAccuracyAnimation 
            },
            { 
              icon: FaRocket, 
              count: speedCount, 
              suffix: 'x', 
              label: 'Faster Hiring', 
              color: 'from-sky-600 to-blue-700',
              start: startSpeedAnimation 
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8, delay: index * 0.1 } }}
              viewport={{ once: true }}
              onViewportEnter={stat.start}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-200/50 hover:shadow-3xl transition-all duration-700"
            >
              <div className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-4`}>
                  {stat.label === 'Successful Placements' ? `${(stat.count / 1000000).toFixed(1)}M` : 
                   stat.label === 'Enterprise Companies' ? `${(stat.count / 1000).toFixed(0)}K` : 
                   stat.count.toFixed(stat.label === 'Match Accuracy' ? 1 : 0)}{stat.suffix}
                </div>
                
                <h3 className="text-xl font-bold text-slate-700 mb-3">
                  {stat.label}
                </h3>
                
                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
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
        </div>

        {/* Premium Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-blue-200/50 mb-20"
        >
          <h3 className="text-3xl font-black text-center text-slate-900 mb-12">Security & Compliance</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: FaShieldAlt, title: "SOC 2 Type II", desc: "Security Certified", color: "from-blue-500 to-sky-600" },
              { icon: FaGlobe, title: "GDPR Ready", desc: "Data Protection", color: "from-sky-500 to-blue-600" },
              { icon: FaAward, title: "ISO 27001", desc: "Information Security", color: "from-blue-600 to-sky-500" },
              { icon: FaRocket, title: "99.9% Uptime", desc: "Reliable Service", color: "from-sky-600 to-blue-700" }
            ].map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${badge.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-black text-slate-900 text-lg mb-2">{badge.title}</h4>
                <p className="text-slate-600 font-medium">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Customer Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-12 shadow-xl border border-blue-200/50"
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                >
                  <FaStar className="w-8 h-8 text-blue-500 mx-1" />
                </motion.div>
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-relaxed">
              "VISSER transformed our hiring process completely. We've reduced time-to-hire by 15x while finding better candidates than ever before."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Customer"
                className="w-16 h-16 rounded-full shadow-lg border-4 border-white"
              />
              <div className="text-left">
                <div className="font-black text-slate-900 text-lg">Sarah Johnson</div>
                <div className="text-blue-600 font-semibold">Head of Talent, TechCorp</div>
              </div>
            </div>
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

export default Stats; 