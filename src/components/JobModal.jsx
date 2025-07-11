import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

function JobModal({ isOpen, onClose, job }) {
  if (!isOpen || !job) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-200/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white p-8 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
          
          <h2 className="text-3xl font-black mb-2">{job.title}</h2>
          <p className="text-blue-100 font-medium">{job.company}</p>
          <p className="text-blue-200 text-sm">{job.location}</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Job Type & Salary */}
          <div className="flex flex-wrap gap-4">
            <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm border border-blue-200 shadow-lg">
              {job.type}
            </span>
            {job.salary && (
              <span className="bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 px-4 py-2 rounded-xl font-bold text-sm border border-sky-200 shadow-lg">
                {job.salary}
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Job Description</h3>
            <p className="text-slate-700 leading-relaxed font-medium">
              {job.description || "We are looking for a talented individual to join our team and help us build the future of recruitment technology."}
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Requirements</h3>
            <ul className="text-slate-700 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-medium">Bachelor's degree in relevant field</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-medium">3+ years of relevant experience</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-medium">Strong communication skills</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-medium">Ability to work in a fast-paced environment</span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Benefits</h3>
            <ul className="text-slate-700 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-medium">Competitive salary and equity</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-medium">Comprehensive health coverage</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-medium">Flexible work arrangements</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="font-medium">Professional development opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-8 rounded-b-3xl border-t border-blue-200/50">
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30"
            >
              Apply Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={onClose}
              className="flex-1 sm:flex-none bg-white/90 backdrop-blur-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl py-4 px-8 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default JobModal; 