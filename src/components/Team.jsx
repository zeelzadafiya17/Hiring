import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaUsers, FaRocket, FaLightbulb } from 'react-icons/fa';

function Team() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80',
      bio: 'Former VP of Engineering at Google, passionate about AI and talent acquisition.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      expertise: ['AI Strategy', 'Leadership', 'Product Vision']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'AI researcher with 15+ years experience in machine learning and recruitment tech.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      expertise: ['Machine Learning', 'Architecture', 'Innovation']
    },
    {
      name: 'Emily Watson',
      role: 'VP of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      bio: 'Product strategist who previously led recruitment products at Microsoft.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      expertise: ['Product Strategy', 'UX Design', 'Market Research']
    },
    {
      name: 'David Kim',
      role: 'Head of AI Research',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'PhD in Computer Science, specializing in natural language processing and AI.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      expertise: ['NLP', 'Deep Learning', 'Research']
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Customer Success',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Customer success expert with deep knowledge of enterprise recruitment.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      expertise: ['Customer Success', 'Enterprise Sales', 'Consulting']
    },
    {
      name: 'James Wilson',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      bio: 'Full-stack engineer passionate about building scalable AI-powered systems.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      expertise: ['Full Stack', 'Cloud Architecture', 'DevOps']
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
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
              <FaUsers className="w-5 h-5" />
              <span>Meet Our Team</span>
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text">
              Visionaries
            </span>
            <br />
            Behind NURIX AI
          </h2>
          
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Our world-class team combines decades of experience in AI, recruitment, and enterprise technology to revolutionize how companies find talent.
          </p>
        </motion.div>

        {/* Premium Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 overflow-hidden hover:shadow-3xl transition-all duration-700"
            >
              {/* Profile Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Social Links Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4"
                >
                  {Object.entries(member.social).map(([platform, link]) => {
                    const IconComponent = platform === 'linkedin' ? FaLinkedin : platform === 'twitter' ? FaTwitter : FaGithub;
                    return (
                      <motion.a
                        key={platform}
                        href={link}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="w-10 h-10 bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg"
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Name and Role */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="mb-4"
                >
                  <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="text-lg font-bold text-blue-600 mb-4">
                    {member.role}
                  </p>
                </motion.div>

                {/* Bio */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-slate-700 leading-relaxed mb-6 font-medium"
                >
                  {member.bio}
                </motion.p>

                {/* Expertise Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="space-y-3"
                >
                  <h4 className="font-black text-slate-900 text-lg">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm border border-blue-200 shadow-lg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Company Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 p-12 mb-20"
        >
          <h3 className="text-3xl font-black text-center text-slate-900 mb-12">Our Company Culture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: FaRocket, 
                title: "Innovation First", 
                description: "We push the boundaries of what's possible in AI and recruitment technology.",
                color: "from-blue-500 to-sky-600"
              },
              { 
                icon: FaUsers, 
                title: "Collaborative Spirit", 
                description: "Our diverse team works together to solve complex challenges and drive results.",
                color: "from-sky-500 to-blue-600"
              },
              { 
                icon: FaLightbulb, 
                title: "Continuous Learning", 
                description: "We invest in our team's growth and encourage experimentation and learning.",
                color: "from-blue-600 to-sky-500"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-12 shadow-xl border border-blue-200/50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <h3 className="text-4xl font-black text-slate-900 mb-6">
                Ready to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-sky-600 text-transparent bg-clip-text">
                  Join Us?
                </span>
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                We're always looking for exceptional talent to join our mission of revolutionizing recruitment with AI.
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
                  Learn More
                </motion.button>
              </div>
            </motion.div>
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

export default Team; 