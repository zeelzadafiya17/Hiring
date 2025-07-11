import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBuilding, FaFileAlt, FaGlobe, FaCheck, FaSpinner } from 'react-icons/fa';
import { jobApi } from '../services/api';
import { useNavigate } from 'react-router-dom';

function CreateJob() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    domain: '',
    description: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.company || !formData.domain || !formData.description) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const jobData = {
        title: formData.title,
        companyName: formData.company,
        companyDomain: formData.domain,
        criteriaPrompt: formData.description
      };

      const response = await jobApi.createJob(jobData);
      
      console.log('Job created successfully:', response);
      
      // Reset form
      setFormData({
        title: '',
        company: '',
        domain: '',
        description: ''
      });
      setStep(1);
      
      // Redirect to jobs page without popup
      navigate('/jobs');
    } catch (err) {
      console.error('Error creating job:', err);
      setError(err.message || 'Failed to create job position. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, title: 'Job Details', icon: FaUser },
    { id: 2, title: 'Company Info', icon: FaBuilding },
    { id: 3, title: 'Description', icon: FaFileAlt },
  ];

  const isStepComplete = (stepNumber) => {
    switch (stepNumber) {
      case 1: return !!formData.title;
      case 2: return !!formData.company && !!formData.domain;
      case 3: return !!formData.description;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-sky-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-sky-200/15 to-blue-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 rounded-3xl mb-8 shadow-2xl border-2 border-blue-400/30">
            <FaFileAlt className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Create New{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text">
              Position
            </span>
          </h1>
          
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Fill in the details below to create a new job position and start finding the perfect candidates.
          </p>
        </motion.div>

        {/* Premium Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-200/50">
            {steps.map((stepItem, index) => (
              <div key={stepItem.id} className="flex items-center">
                <div className={`flex items-center space-x-4 ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shadow-xl transition-all duration-500 ${
                      step === stepItem.id 
                        ? 'bg-gradient-to-r from-blue-500 to-sky-600 border-2 border-blue-400/30' 
                        : isStepComplete(stepItem.id)
                        ? 'bg-gradient-to-r from-blue-400 to-sky-500 border-2 border-blue-300/30'
                        : 'bg-gradient-to-r from-blue-100 to-sky-100 border-2 border-blue-200/30'
                    }`}>
                      {isStepComplete(stepItem.id) ? (
                        <FaCheck className="w-6 h-6 text-white" />
                      ) : (
                        <stepItem.icon className={`w-6 h-6 ${
                          step === stepItem.id ? 'text-white' : 'text-blue-600'
                        }`} />
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <div className={`font-bold text-sm ${
                        step === stepItem.id ? 'text-blue-600' : 'text-slate-600'
                      }`}>
                        Step {stepItem.id}
                      </div>
                      <div className={`font-black text-lg ${
                        step === stepItem.id ? 'text-slate-900' : 'text-slate-700'
                      }`}>
                        {stepItem.title}
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-8">
                    <div className={`h-2 rounded-full transition-all duration-500 ${
                      isStepComplete(stepItem.id) 
                        ? 'bg-gradient-to-r from-blue-500 to-sky-600' 
                        : 'bg-blue-100'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Premium Form Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 overflow-hidden"
        >
          {/* Step 1: Job Details */}
          {step === 1 && (
            <div className="p-12">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl mb-8 border border-blue-200">
                <FaUser className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-8">Job Information</h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-black text-slate-900 mb-4">
                    Job Title <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="e.g., Senior Frontend Developer"
                      className="w-full px-6 py-4 bg-gradient-to-r from-blue-50/50 to-sky-50/50 border-2 border-blue-200 rounded-2xl font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-lg"
                    />
                    {formData.title && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaCheck className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Company Information */}
          {step === 2 && (
            <div className="bg-gradient-to-r from-blue-50/50 to-sky-50/50 p-12 border border-blue-200/50">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl mb-8 border border-blue-200">
                <FaBuilding className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-8">Company Details</h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-black text-slate-900 mb-4">
                    Company Name <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="e.g., TechCorp Inc."
                      className="w-full px-6 py-4 bg-white border-2 border-blue-200 rounded-2xl font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all duration-300 text-lg"
                    />
                    {formData.company && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaCheck className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-black text-slate-900 mb-4">
                    Company Domain <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <FaGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                    <input
                      type="text"
                      value={formData.domain}
                      onChange={(e) => handleInputChange('domain', e.target.value)}
                      placeholder="e.g., techcorp.com"
                      className="w-full pl-14 pr-6 py-4 bg-white border-2 border-blue-200 rounded-2xl font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all duration-300 text-lg"
                    />
                    {formData.domain && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaCheck className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Job Description */}
          {step === 3 && (
            <div className="p-12">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl mb-8 border border-blue-200">
                <FaFileAlt className="w-6 h-6 text-blue-600" />
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-8">Position Details</h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-black text-slate-900 mb-4">
                    Job Description & Criteria <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe the role, required skills, experience level, and key responsibilities... Be specific about technologies, years of experience, and what makes an ideal candidate."
                      rows="8"
                      className="w-full px-6 py-4 bg-gradient-to-r from-blue-50/50 to-sky-50/50 border-2 border-blue-200 rounded-2xl font-medium text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-lg resize-none"
                    />
                    {formData.description && (
                      <div className="absolute right-4 top-4">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <FaCheck className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-slate-500 font-medium">
                    Be specific about required skills, experience level, and responsibilities. This helps our AI find the best candidates.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mx-12 mb-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Error</h3>
                  <p className="text-blue-800">{error}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Premium Action Buttons */}
          <div className="bg-gradient-to-r from-blue-50/50 to-sky-50/50 p-12 border-t border-blue-200/50">
            <div className="flex space-x-6">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-8 py-4 bg-white/90 backdrop-blur-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  Previous
                </button>
              )}
              
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!isStepComplete(step)}
                  className="flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none border-2 border-blue-400/30"
                >
                  Next Step
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading || !isStepComplete(3)}
                  className="flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none border-2 border-blue-400/30 flex items-center justify-center space-x-3"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="w-5 h-5 animate-spin" />
                      <span>Creating...</span>
                    </>
                  ) : (
                    <span>Create Position</span>
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default CreateJob; 