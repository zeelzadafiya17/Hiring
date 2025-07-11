# API Configuration Setup

This application now uses real API calls instead of mock data. Here's how to configure the API endpoints:

## Environment Variables

Create a `.env` file in the root directory of your project with the following configuration:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:3001/api
```

## API Endpoints

The application expects the following API endpoints to be available:

### Jobs API
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get job details by ID
- `POST /api/jobs` - Create a new job
- `PUT /api/jobs/:id` - Update job details
- `DELETE /api/jobs/:id` - Delete a job

### Candidates API
- `GET /api/jobs/:id/candidates` - Get candidates for a specific job
- `GET /api/candidates/:id` - Get candidate details by ID
- `POST /api/candidates/:id/reference-email` - Send reference email to candidate
- `PUT /api/candidates/:id/status` - Update candidate status

### Company API
- `GET /api/companies/:id` - Get company details
- `GET /api/companies/domain/:domain` - Get company by domain

### Analytics API
- `GET /api/jobs/:id/analytics` - Get job analytics
- `GET /api/candidates/:id/analytics` - Get candidate analytics

## Data Structure Examples

### Job Object
```json
{
  "id": 1,
  "jobId": "job-123",
  "title": "Senior Frontend Developer",
  "companyName": "TechCorp Inc.",
  "companyDomain": "techcorp.com",
  "location": "San Francisco, CA",
  "type": "Full-time",
  "jdText": "Job description text...",
  "candidateFetchStatus": "complete",
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

### Candidate Object
```json
{
  "id": 1,
  "name": "Sarah Johnson",
  "email": "sarah.johnson@email.com",
  "experience": "6 years",
  "skills": ["React", "TypeScript", "Node.js", "GraphQL"],
  "currentRole": "Senior Frontend Developer at StartupXYZ",
  "location": "San Francisco, CA",
  "summary": "Experienced frontend developer...",
  "matchScore": 92,
  "referencedEmployeeEmailStatus": "sent"
}
```

## Error Handling

The API service includes comprehensive error handling:

- Network errors are caught and displayed to users
- HTTP errors are parsed and meaningful messages are shown
- Loading states are properly managed
- Retry functionality is available for failed requests

## Development vs Production

For development, use:
```env
REACT_APP_API_URL=http://localhost:3001/api
```

For production, use your actual API URL:
```env
REACT_APP_API_URL=https://api.yourdomain.com/api
```

## Backend Requirements

Your backend API should:

1. Accept JSON requests with `Content-Type: application/json`
2. Return JSON responses
3. Handle CORS properly for your frontend domain
4. Include proper error messages in error responses
5. Return appropriate HTTP status codes (200, 201, 400, 404, 500, etc.)

## Testing the API

You can test the API integration by:

1. Starting your backend server
2. Setting the correct `REACT_APP_API_URL` in your `.env` file
3. Running the React application
4. Checking the browser's network tab to see API calls
5. Monitoring the console for any error messages

## Fallback Behavior

If the API is unavailable:
- Loading states will be shown
- Error messages will be displayed
- Users can retry failed requests
- No mock data is used as fallback (this encourages proper API setup) 