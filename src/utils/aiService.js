import axios from 'axios';

export const askAI = async (message) => {
  try {
    const response = await axios.post('/api/chat', { message });
    if (response.data && response.data.reply) {
      return response.data.reply;
    }
    return "I received an unexpected response format from the server.";
  } catch (error) {
    console.error("AI Service Error:", error);
    
    // Check if it's a 404 (happens in local dev if vite plugin isn't active or no backend)
    if (error.response && error.response.status === 404) {
      return "Hello! I am currently running in offline/demo mode (the backend API is not accessible). Tamirat is an amazing full-stack developer specializing in AI/ML! You can contact him at tamiratdereje53@gmail.com for more info.";
    }
    
    return "Sorry, I'm having trouble connecting to my neural network right now. Please try again later or contact Tamirat directly!";
  }
};
