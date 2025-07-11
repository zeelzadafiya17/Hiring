import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { FaFileAlt, FaUsers, FaBuilding, FaMapMarkerAlt, FaGlobe, FaSpinner, FaArrowLeft, FaEnvelope } from 'react-icons/fa';
import { jobApi, candidatesApi } from '../services/api';

function JobDetails() {
  const { jobId } = useParams();
  const [activeTab, setActiveTab] = useState('jd');
  const [jobDetails, setJobDetails] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailsError, setDetailsError] = useState(null);
  const [candidatesLoading, setCandidatesLoading] = useState(false);
  const [candidatesError, setCandidatesError] = useState(null);
  const [emailStatus, setEmailStatus] = useState({});
  const [sendingEmail, setSendingEmail] = useState({});

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        setDetailsError(null);
        
        const data = await jobApi.getJobById(jobId);
        setJobDetails(data);
        
        // If candidates are included in the job details response, set them directly
        if (data.candidates && Array.isArray(data.candidates)) {
          setCandidates(data.candidates);
        }
      } catch (err) {
        console.error('Error fetching job details:', err);
        setDetailsError(err.message || 'Failed to load job details');
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJobDetails();
    }
  }, [jobId]);

  useEffect(() => {
    const fetchCandidates = async () => {
      if (activeTab === 'candidates' && jobDetails?.candidateFetchStatus?.toLowerCase() === 'complete') {
        // Only fetch candidates if they're not already loaded
        if (!candidates || candidates.length === 0) {
          try {
            setCandidatesLoading(true);
            setCandidatesError(null);
            
            const data = await candidatesApi.getCandidatesForJob(jobId);
            setCandidates(data.candidates || data);
          } catch (err) {
            console.error('Error fetching candidates:', err);
            setCandidatesError(err.message || 'Failed to load candidates');
          } finally {
            setCandidatesLoading(false);
          }
        }
      }
    };

    fetchCandidates();
  }, [activeTab, jobDetails, jobId, candidates]);

  // Function to parse and render structured job description
  const renderStructuredJobDescription = (jdText) => {
    if (!jdText) return null;

    // Parse XML-like structure
    const parseXMLSection = (text, tag) => {
      const regex = new RegExp(`<${tag}>(.*?)</${tag}>`, 's');
      const match = text.match(regex);
      return match ? match[1].trim() : null;
    };

    const workEnvironment = parseXMLSection(jdText, 'work-environment');
    const jobLocation = parseXMLSection(jdText, 'job-location');
    const company = parseXMLSection(jdText, 'company');
    const jobSummary = parseXMLSection(jdText, 'job-summary');
    const responsibilities = parseXMLSection(jdText, 'responsibilities');
    const qualifications = parseXMLSection(jdText, 'qualifications');
    const benefits = parseXMLSection(jdText, 'benefits');

    const sections = [
      {
        title: 'Work Environment & Location',
        content: `${workEnvironment ? `**Work Environment:** ${workEnvironment}` : ''}${jobLocation ? `\n**Location:** ${jobLocation}` : ''}`,
        icon: '🏢',
        color: 'from-blue-500 to-sky-600'
      },
      {
        title: 'About the Company',
        content: company,
        icon: '🏛️',
        color: 'from-sky-500 to-blue-600'
      },
      {
        title: 'Job Summary',
        content: jobSummary,
        icon: '📋',
        color: 'from-blue-600 to-sky-500'
      },
      {
        title: 'Key Responsibilities',
        content: responsibilities,
        icon: '🎯',
        color: 'from-sky-600 to-blue-500'
      },
      {
        title: 'Qualifications & Requirements',
        content: qualifications,
        icon: '🎓',
        color: 'from-blue-500 to-sky-600'
      },
      {
        title: 'Benefits & Perks',
        content: benefits,
        icon: '🌟',
        color: 'from-sky-500 to-blue-600'
      }
    ].filter(section => section.content);

    return sections.map((section, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-gradient-to-r from-blue-50 to-sky-50 p-8 rounded-3xl border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center shadow-lg`}>
            <span className="text-white text-xl">{section.icon}</span>
          </div>
          <h4 className="text-2xl font-bold text-gray-900">{section.title}</h4>
        </div>
        
        <div className="space-y-4">
          {section.content.split('\n').map((paragraph, pIndex) => {
            if (paragraph.trim() === '') return null;
            
            // Handle bullet points starting with -
            if (paragraph.trim().startsWith('-')) {
              return (
                <div key={pIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700 font-medium leading-relaxed">{paragraph.replace(/^-\s*/, '')}</p>
                </div>
              );
            }
            
            // Handle bold text (e.g., **Work Environment:** )
            if (paragraph.includes('**')) {
              const parts = paragraph.split('**');
              return (
                <p key={pIndex} className="text-slate-700 font-medium leading-relaxed">
                  {parts.map((part, partIndex) => 
                    partIndex % 2 === 1 ? (
                      <span key={partIndex} className="font-bold text-blue-700">{part}</span>
                    ) : (
                      <span key={partIndex}>{part}</span>
                    )
                  )}
                </p>
              );
            }
            
            // Regular paragraph
            return (
              <p key={pIndex} className="text-slate-700 font-medium leading-relaxed text-lg">
                {paragraph}
              </p>
            );
          })}
        </div>
      </motion.div>
    ));
  };

  const sendReferenceEmail = async (candidateId) => {
    setSendingEmail(prev => ({ ...prev, [candidateId]: true }));
    
    try {
      // Send email using candidate ID to the API endpoint
      const response = await candidatesApi.sendReferenceEmail(candidateId, jobId);
      
      // Update email status locally using candidate ID
      setEmailStatus(prev => ({ ...prev, [candidateId]: 'sent' }));
      
      // Update candidates array to reflect the new status
      setCandidates(prevCandidates => 
        prevCandidates.map(candidate => 
          candidate.candidateId === candidateId 
            ? { ...candidate, referenced_employee_email_status: 'sent' }
            : candidate
        )
      );
      
      // Show success message
      console.log('Reference email sent successfully:', response);
      
    } catch (error) {
      console.error('Failed to send reference email:', error);
      
      // Show specific error message based on the error
      let errorMessage = 'Failed to send reference email. Please try again.';
      if (error.message.includes('404')) {
        errorMessage = 'Email endpoint not found. Please check the API configuration.';
      } else if (error.message.includes('500')) {
        errorMessage = 'Server error occurred. Please try again later.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      alert(errorMessage);
    } finally {
      setSendingEmail(prev => ({ ...prev, [candidateId]: false }));
    }
  };

  const getEmailButtonConfig = (status) => {
    const normalizedStatus = status?.toLowerCase();
    
    switch (normalizedStatus) {
      case 'sent':
        return {
          color: 'from-blue-500 to-sky-600',
          bg: 'bg-blue-50 border-blue-200',
          text: 'text-blue-800',
          label: 'Email Sent',
          disabled: true
        };
      case 'approved':
        return {
          color: 'from-green-500 to-emerald-600',
          bg: 'bg-green-50 border-green-200',
          text: 'text-green-800',
          label: 'Approved',
          disabled: true
        };
      case 'rejected':
        return {
          color: 'from-red-500 to-red-600',
          bg: 'bg-red-50 border-red-200',
          text: 'text-red-800',
          label: 'Rejected',
          disabled: true
        };
      case 'not_sent':
      default:
        return {
          color: 'from-blue-500 to-sky-600',
          bg: 'bg-blue-50 border-blue-200',
          text: 'text-blue-800',
          label: 'Send Reference Email',
          disabled: false
        };
    }
  };

  const tabs = [
    { id: 'jd', label: 'Job Description', icon: FaFileAlt, color: 'from-blue-500 to-sky-600' },
    { id: 'candidates', label: 'Candidates', icon: FaUsers, color: 'from-sky-500 to-blue-600' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-sky-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-sky-200/15 to-blue-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full flex items-center justify-center shadow-2xl">
              <FaSpinner className="w-8 h-8 text-white animate-spin" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full animate-ping opacity-20"></div>
            </div>
            <h2 className="mt-8 text-3xl font-black text-slate-900">Loading Job Details...</h2>
            <p className="text-xl text-slate-600">Preparing everything for you</p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (detailsError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-sky-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-sky-200/15 to-blue-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-200 rounded-3xl p-8 text-center shadow-xl"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3">Unable to Load Job Details</h2>
            <p className="text-blue-700 mb-6">{detailsError}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-2xl hover:shadow-lg hover:scale-105 transform transition-all duration-300 font-semibold"
              >
                Retry
              </button>
              <Link
                to="/jobs"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-2xl hover:shadow-lg hover:scale-105 transform transition-all duration-300 font-semibold space-x-2"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Back to Jobs</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-sky-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-sky-200/15 to-blue-200/15 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/jobs"
            className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-500 space-x-3"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Jobs</span>
          </Link>
        </motion.div>

        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 p-12 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                {jobDetails?.title || 'Job Title'}
              </h1>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaBuilding className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-2xl font-bold text-slate-700">{jobDetails?.companyName || 'Company Name'}</span>
                </div>
                
                {jobDetails?.companyDomain && (
                  <div className="flex items-center space-x-3">
                    <FaGlobe className="w-6 h-6 text-sky-600 flex-shrink-0" />
                    <span className="text-slate-600 font-medium bg-gradient-to-r from-sky-50 to-blue-50 px-4 py-2 rounded-xl border border-sky-200 text-lg">
                      🌐 {jobDetails.companyDomain}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200 text-center">
                <div className="text-sm font-bold text-blue-600 mb-2">Job ID</div>
                <div className="text-lg font-black text-slate-900 font-mono">{jobDetails?.jobId || jobId}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 overflow-hidden mb-8"
        >
          <div className="flex">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 flex items-center justify-center space-x-3 px-8 py-6 font-bold text-lg transition-all duration-500 relative ${
                  activeTab === tab.id
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-sky-50 border-b-4 border-blue-500'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                }`}
              >
                <tab.icon className="w-6 h-6" />
                <span>{tab.label}</span>
                
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-sky-50 rounded-t-3xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 overflow-hidden"
        >
          {activeTab === 'jd' && (
            <div className="p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-4">Job Description</h2>
                <p className="text-slate-600 font-medium text-lg">
                  Complete details about the position, responsibilities, and requirements.
                </p>
              </div>
              
              <div className="space-y-8">
                {jobDetails?.jdText ? (
                  renderStructuredJobDescription(jobDetails.jdText)
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <FaFileAlt className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">No Job Description Available</h3>
                    <p className="text-slate-600 text-lg">
                      The job description for this position is not available at the moment.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'candidates' && (
            <div className="p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 mb-4">Candidate Matches</h2>
                <p className="text-slate-600 font-medium text-lg">
                  AI-powered candidate recommendations based on job requirements.
                </p>
              </div>

              {jobDetails?.candidateFetchStatus?.toLowerCase() !== 'complete' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <FaUsers className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Candidates Not Ready</h3>
                  <p className="text-slate-600 text-lg">
                    Our AI is still processing candidate matches for this position. Please check back later.
                  </p>
                </div>
              ) : candidatesLoading ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <FaSpinner className="w-8 h-8 text-white animate-spin" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">Loading Candidates...</h3>
                  <p className="text-slate-600">Finding the best matches for you</p>
                </div>
              ) : candidatesError ? (
                <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-200 rounded-3xl p-10 text-center shadow-2xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="text-white text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-3xl font-black text-blue-900 mb-4">Unable to Load Candidates</h3>
                  <p className="text-blue-700 text-lg mb-8">{candidatesError}</p>
                  <button
                    onClick={() => {
                      setCandidatesError(null);
                      setCandidatesLoading(false);
                      // Re-trigger candidates fetch
                      setActiveTab('jd');
                      setTimeout(() => setActiveTab('candidates'), 100);
                    }}
                    className="px-10 py-4 bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-2xl hover:shadow-lg hover:scale-105 transform transition-all duration-300 font-bold text-lg"
                  >
                    Try Again
                  </button>
                </div>
              ) : candidates.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <FaUsers className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">No Candidates Found</h3>
                  <p className="text-slate-600 text-lg">
                    No candidates match the criteria for this position yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {candidates.map((candidate, index) => (
                    <motion.div
                      key={candidate.candidateId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-50/50 to-sky-50/50 rounded-3xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-500"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <h3 className="text-2xl font-black text-slate-900">{candidate.name}</h3>
                            <div className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                              {candidate.YOE} YOE
                            </div>
                          </div>
                          
                          <div className="space-y-3 mb-6">
                            <p className="text-slate-700 leading-relaxed font-medium">{candidate.summary}</p>
                            <p className="text-slate-500 font-medium">{candidate.location}</p>
                            
                            {candidate.referenced_employee_name && (
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
                                <div className="flex items-center space-x-3 mb-2">
                                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">👤</span>
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-green-800">Reference Employee</div>
                                    <div className="text-green-700 font-bold">{candidate.referenced_employee_name}</div>
                                  </div>
                                </div>
                                <div className="space-y-1 text-sm">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-green-600 font-medium">Employee ID:</span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md font-mono text-xs">
                                      {candidate.referenced_employee_id}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-green-600 font-medium">Email Status:</span>
                                    <span className={`px-2 py-1 rounded-md font-bold text-xs ${
                                      candidate.referenced_employee_email_status === 'sent' ? 'bg-blue-100 text-blue-800' :
                                      candidate.referenced_employee_email_status === 'approved' ? 'bg-green-100 text-green-800' :
                                      candidate.referenced_employee_email_status === 'rejected' ? 'bg-red-100 text-red-800' :
                                      'bg-gray-100 text-gray-800'
                                    }`}>
                                      {candidate.referenced_employee_email_status.replace('_', ' ').toUpperCase()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {candidate.linkedin_url && (
                              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-bold text-blue-800 mb-1">LinkedIn Profile</div>
                                    <a 
                                      href={candidate.linkedin_url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 font-medium underline text-sm break-all"
                                    >
                                      {candidate.linkedin_url}
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <a 
                                      href={candidate.linkedin_url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                      View Profile
                                    </a>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {candidate.skills && candidate.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {candidate.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 px-3 py-1 rounded-lg font-bold text-sm border border-blue-200 shadow-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col space-y-4 lg:w-48">
                          <div className="text-center">
                            <div className="text-sm font-bold text-blue-600 mb-1">Candidate ID</div>
                            <div className="text-slate-700 font-medium text-sm font-mono">{candidate.candidateId}</div>
                          </div>
                          
                          {candidate.referenced_employee_id && (
                            <div className="text-center">
                              <div className="text-sm font-bold text-green-600 mb-1">Reference Employee</div>
                              <div className="text-green-700 font-medium text-sm font-mono">{candidate.referenced_employee_id}</div>
                            </div>
                          )}
                          
                          {(() => {
                            const status = emailStatus[candidate.candidateId] || candidate.referenced_employee_email_status;
                            const config = getEmailButtonConfig(status);
                            const isLoading = sendingEmail[candidate.candidateId];
                            
                            return (
                              <motion.button
                                whileHover={!config.disabled && !isLoading ? { scale: 1.05 } : {}}
                                whileTap={!config.disabled && !isLoading ? { scale: 0.95 } : {}}
                                onClick={() => !config.disabled && !isLoading && sendReferenceEmail(candidate.candidateId)}
                                disabled={config.disabled || isLoading}
                                className={`w-full px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-500 flex items-center justify-center space-x-2 ${
                                  config.disabled 
                                    ? `${config.bg} ${config.text} border-2 border-blue-200 cursor-not-allowed`
                                    : isLoading
                                    ? 'bg-blue-100 text-blue-600 border-2 border-blue-200 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-500 to-sky-600 text-white hover:shadow-lg border-2 border-blue-400/30 shadow-lg'
                                }`}
                              >
                                {isLoading ? (
                                  <>
                                    <FaSpinner className="w-4 h-4 animate-spin" />
                                    <span>Sending</span>
                                  </>
                                ) : (
                                  <>
                                    <FaEnvelope className="w-4 h-4" />
                                    <span>{config.label}</span>
                                  </>
                                )}
                              </motion.button>
                            );
                          })()}
                          
                          <div className="text-center text-xs text-slate-500">
                            Email will be sent to the reference employee
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
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

export default JobDetails; 