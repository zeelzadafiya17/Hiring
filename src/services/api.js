// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://56d1f1570c67.ngrok-free.app';

// API Response handler
const handleResponse = async (response) => {
  if (!response.ok) {
    let errorMessage = `HTTP error! status: ${response.status}`;
    
    // Try to get error details from response
    try {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } else {
        // If not JSON, get the text content for debugging
        const errorText = await response.text();
        console.error('API returned non-JSON response:', errorText.substring(0, 200));
        errorMessage = `API returned ${response.status}: ${response.statusText}`;
      }
    } catch (e) {
      console.error('Error parsing error response:', e);
    }
    
    throw new Error(errorMessage);
  }
  
  // Check if response is JSON
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    const responseText = await response.text();
    console.error('API returned non-JSON response:', responseText.substring(0, 200));
    throw new Error('API returned HTML instead of JSON. Please check if the API endpoint is correct and running.');
  }
  
  return response.json();
};

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'ngrok-skip-browser-warning': 'true',
      ...(options.method && options.method !== 'GET' ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    return await handleResponse(response);
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    throw error;
  }
};

// Job API functions
export const jobApi = {
  // Get all open jobs
  getJobs: async () => {
    return apiRequest('/fetch-open-jobs');
  },

  // Get job details by ID (includes candidates)
  getJobById: async (jobId) => {
    return apiRequest(`/fetch-job/${jobId}`);
  },

  // Create a new job opening
  createJob: async (jobData) => {
    // Transform the job data to match the expected API format
    const apiJobData = {
      title: jobData.title,
      criteriaPrompt: jobData.criteriaPrompt || jobData.jdText || jobData.description || '',
      companyName: jobData.companyName,
      companyDomain: jobData.companyDomain
    };
    
    return apiRequest('/create-opening', {
      method: 'POST',
      body: JSON.stringify(apiJobData),
    });
  },

  // Update job (not provided in API spec, keeping for future use)
  updateJob: async (jobId, jobData) => {
    throw new Error('Update job endpoint not available in current API');
  },

  // Delete job (not provided in API spec, keeping for future use)
  deleteJob: async (jobId) => {
    throw new Error('Delete job endpoint not available in current API');
  },
};

// Candidates API functions
export const candidatesApi = {
  // Get candidates for a specific job (included in job details)
  getCandidatesForJob: async (jobId) => {
    const jobData = await jobApi.getJobById(jobId);
    return {
      candidates: jobData.candidates || []
    };
  },

  // Get candidate details (not provided in API spec)
  getCandidateById: async (candidateId) => {
    throw new Error('Get candidate by ID endpoint not available in current API');
  },

  // Send reference email (not provided in API spec)
  sendReferenceEmail: async (candidateId, jobId) => {
    return apiRequest(`/send-email/${candidateId}/${jobId}`, {
      method: 'POST',
    });
  },

  // Update candidate status (not provided in API spec)
  updateCandidateStatus: async (candidateId, status) => {
    throw new Error('Update candidate status endpoint not available in current API');
  },
};

// Analytics API functions
export const analyticsApi = {
  // Get job analytics (not provided in API spec)
  getJobAnalytics: async (jobId) => {
    throw new Error('Job analytics endpoint not available in current API');
  },

  // Get candidate analytics (not provided in API spec)
  getCandidateAnalytics: async (candidateId) => {
    throw new Error('Candidate analytics endpoint not available in current API');
  },
};

// Company API functions
export const companyApi = {
  // Get company details (not provided in API spec)
  getCompanyById: async (companyId) => {
    throw new Error('Company details endpoint not available in current API');
  },

  // Get company by domain (not provided in API spec)
  getCompanyByDomain: async (domain) => {
    throw new Error('Company by domain endpoint not available in current API');
  },
};

// Export default API object
export default {
  jobs: jobApi,
  candidates: candidatesApi,
  analytics: analyticsApi,
  company: companyApi,
}; 