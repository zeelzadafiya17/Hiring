import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaHeart, FaRocket, FaShieldAlt, FaGlobe } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'AI Matching', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Enterprise', href: '#' },
      { name: 'API Access', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, href: '#', color: 'hover:text-sky-500' },
    { name: 'Facebook', icon: FaFacebook, href: '#', color: 'hover:text-blue-700' },
    { name: 'GitHub', icon: FaGithub, href: '#', color: 'hover:text-slate-800' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-sky-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl">
                  <img 
                    src="/visser-logo-final.svg" 
                    alt="VISSER" 
                    className="w-8 h-8 drop-shadow-lg"
                  />
                </div>
                <div className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-blue-400 to-sky-500 bg-clip-text text-transparent">VISSER</span>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
                Revolutionizing talent acquisition with enterprise-grade AI technology. Connect with the world's best talent faster and smarter.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: FaShieldAlt, text: "SOC 2", color: "from-blue-500 to-sky-600" },
                  { icon: FaGlobe, text: "GDPR", color: "from-sky-500 to-blue-600" },
                  { icon: FaRocket, text: "99.9%", color: "from-blue-600 to-sky-500" }
                ].map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-lg px-3 py-2"
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${badge.color} rounded-lg flex items-center justify-center`}>
                      <badge.icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-300 text-sm font-semibold">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 + categoryIndex * 0.1 }}
              >
                <h3 className="text-white font-black text-lg mb-6">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium block py-1"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 pt-12 border-t border-slate-700"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-black text-white mb-4">Stay Updated</h3>
              <p className="text-slate-300 text-lg mb-8">
                Get the latest insights on AI recruitment trends and platform updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-xl border border-slate-600 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex items-center space-x-2 text-slate-400"
              >
                <span>© {currentYear} VISSER. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-blue-500" />
                </motion.div>
                <span>for better hiring.</span>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex items-center space-x-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Additional Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-center space-x-6 text-slate-400"
              >
                <a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">
                  Status
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">
                  Security
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300 font-medium">
                  Contact
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
}

export default Footer; 