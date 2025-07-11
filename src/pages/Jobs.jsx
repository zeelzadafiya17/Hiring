import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaPlus, FaSpinner, FaGlobe } from 'react-icons/fa';
import { jobApi } from '../services/api';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await jobApi.getJobs();
        // The API returns an array directly
        setJobs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError(err.message || 'Failed to fetch jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const getStatusConfig = (status) => {
    switch(status?.toLowerCase()) {
      case 'complete':
      case 'completed':
      case 'success':
      case 'done':
        return {
          label: 'Ready to View',
          color: 'from-blue-500 to-sky-600',
          bg: 'bg-green-50 border-green-200',
          text: 'text-green-800',
          canView: true
        };
      case 'failed':
      case 'error':
        return {
          label: 'Failed',
          color: 'from-red-500 to-red-600',
          bg: 'bg-red-50 border-red-200',
          text: 'text-red-800',
          canView: false
        };
      default:
        return {
          label: 'Processing',
          color: 'from-sky-500 to-blue-600',
          bg: 'bg-sky-50 border-sky-200',
          text: 'text-sky-800',
          canView: false
        };
    }
  };

  const canViewDetails = (jdStatus) => {
    const normalizedStatus = jdStatus?.toLowerCase();
    return ['complete', 'completed', 'success', 'done'].includes(normalizedStatus);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <FaSpinner className="w-8 h-8 text-white animate-spin" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Loading Opportunities</h2>
          <p className="text-slate-600 text-lg">Finding the best positions for you...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-white flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-sky-50 border-2 border-blue-200 rounded-3xl p-10 text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-white text-2xl">⚠️</span>
          </div>
          <h3 className="text-3xl font-black text-blue-900 mb-4">Unable to Load Jobs</h3>
          <p className="text-blue-700 text-lg mb-8">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-2xl hover:shadow-lg hover:scale-105 transform transition-all duration-300 font-bold text-lg"
          >
            Try Again
          </button>
        </motion.div>
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
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center mb-8"
          >
            <span className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-8 py-3 rounded-full text-lg font-black shadow-xl border-2 border-blue-400/30 flex items-center space-x-2">
              <FaBriefcase className="w-5 h-5" />
              <span>Available Positions</span>
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Find Your{' '}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-transparent bg-clip-text">
              Dream Job
            </span>
          </h1>
          
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
            Discover exciting opportunities with top companies powered by AI-driven matching
          </p>

          {/* Create Position Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/create-job"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30 hover:scale-105"
            >
              <FaPlus className="w-5 h-5 mr-3" />
              Create New Position
            </Link>
          </motion.div>
        </motion.div>

        {/* Premium Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => {
            const statusConfig = getStatusConfig(job.candidateFetchStatus);
            const canView = canViewDetails(job.jdStatus);
            
            return (
              <motion.div
                key={job.jobId}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 overflow-hidden hover:shadow-3xl transition-all duration-700"
              >
                <div className="p-8">
                  {/* Job Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-500">
                        {job.title}
                      </h3>
                      <span className="bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm border border-blue-200 shadow-lg flex-shrink-0 ml-4">
                        Opening
                      </span>
                    </div>
                    
                    {/* Company Information */}
                    {job.companyName && (
                      <div className="flex items-center space-x-3 mb-3">
                        <FaBuilding className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-800 font-bold text-lg">{job.companyName}</span>
                          {job.companyDomain && (
                            <div className="flex items-center space-x-1 text-slate-600">
                              <FaGlobe className="w-4 h-4" />
                              <span className="text-sm font-medium">{job.companyDomain}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Job ID Display */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FaBriefcase className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-600 font-medium bg-gradient-to-r from-blue-50 to-sky-50 px-3 py-1 rounded-lg border border-blue-200">
                          ID: {job.jobId}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Job Status */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-sm font-bold text-slate-600 mb-1">JD Status</div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold ${
                          job.jdStatus === 'complete' || job.jdStatus === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {job.jdStatus === 'complete' || job.jdStatus === 'completed' ? '✅ Complete' : '⏳ Pending'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-slate-600 mb-1">Candidates</div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold ${
                          job.candidateFetchStatus === 'complete' || job.candidateFetchStatus === 'completed' ? 'bg-green-100 text-green-800' : 
                          job.candidateFetchStatus === 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {job.candidateFetchStatus === 'complete' || job.candidateFetchStatus === 'completed' ? '✅ Ready' : 
                           job.candidateFetchStatus === 'failed' ? '❌ Failed' : '⏳ Processing'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl border ${statusConfig.bg} ${statusConfig.text}`}>
                      {job.candidateFetchStatus?.toLowerCase() === 'processing' || job.candidateFetchStatus?.toLowerCase() === 'pending' ? (
                        <FaSpinner className="w-4 h-4 animate-spin" />
                      ) : job.candidateFetchStatus?.toLowerCase() === 'failed' ? (
                        <span className="text-lg">❌</span>
                      ) : canView ? (
                        <span className="text-lg">✅</span>
                      ) : (
                        <span className="text-lg">⏳</span>
                      )}
                      <span className="font-bold text-sm">
                        {job.candidateFetchStatus?.toLowerCase() === 'failed' ? 'Candidate Fetch Failed' :
                         canView ? 'Ready to View' : 
                         job.candidateFetchStatus?.toLowerCase() === 'processing' || job.candidateFetchStatus?.toLowerCase() === 'pending' ? 'Processing Candidates' : 
                         'Processing'}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex space-x-4">
                    {canView ? (
                      <Link
                        to={`/job/${job.jobId}`}
                        className="flex-1 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl py-3 px-6 font-bold text-center shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30 hover:scale-105"
                      >
                        View Details
                      </Link>
                    ) : job.candidateFetchStatus?.toLowerCase() === 'failed' ? (
                      <div className="flex-1 bg-gradient-to-r from-red-100 to-red-200 text-red-800 rounded-2xl py-3 px-6 font-bold text-center border-2 border-red-300 cursor-not-allowed">
                        Fetch Failed
                      </div>
                    ) : (
                      <div className="flex-1 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 rounded-2xl py-3 px-6 font-bold text-center border-2 border-sky-200 cursor-not-allowed">
                        {job.candidateFetchStatus?.toLowerCase() === 'processing' || job.candidateFetchStatus?.toLowerCase() === 'pending' ? 'Processing...' : 'Not Ready'}
                      </div>
                    )}
                  </div>

                  {/* Ready Badge for completed jobs */}
                  {canView && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="mt-4 text-center"
                    >
                      <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm border border-blue-200 shadow-lg">
                        <span>🎯</span>
                        <span>Candidates are ready for review!</span>
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {jobs.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <FaBriefcase className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">No Jobs Available</h3>
            <p className="text-slate-600 text-lg mb-8">Be the first to create a job position!</p>
            <Link
              to="/create-job"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-400/30 hover:scale-105"
            >
              <FaPlus className="w-5 h-5 mr-3" />
              Create First Job
            </Link>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default Jobs; 