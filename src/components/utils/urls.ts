const liveUrl = `https://autofin-backend.vercel.app/api`;
const devUrl = `http://localhost:5000/api`;

// Export the URL based on the environment
export const baseUrl = process.env.NEXT_PUBLIC_STAGE === 'production' ? liveUrl : devUrl;