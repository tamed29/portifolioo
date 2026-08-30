import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const chatApiPlugin = () => ({
  name: 'chat-api',
  configureServer(server) {
    server.middlewares.use('/api/chat', async (req, res, next) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const { message } = JSON.parse(body);
            
            // Load env vars, checking system and .env
            const env = loadEnv('', process.cwd(), '');
            const apiKey = env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY;

            res.setHeader('Content-Type', 'application/json');

            if (!apiKey) {
              res.end(JSON.stringify({ 
                reply: "Hello! I am currently running in offline/demo mode because no ANTHROPIC_API_KEY was found in the environment. I am Tamirat's AI assistant, ready to answer questions once the API key is configured!" 
              }));
              return;
            }

            // Simple profile context
            const systemPrompt = `You are the personal portfolio assistant for Tamirat Dereje. Always respond politely, warmly, and professionally. Only answer using the provided profile information. Speak about Tamirat in the third person.
Profile: Full-stack developer and 4th-year Software Engineering student. Passionate about AI/ML. Email: tamiratdereje53@gmail.com.`;

            const response = await fetch('https://api.anthropic.com/v1/messages', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
              },
              body: JSON.stringify({
                model: 'claude-3-haiku-20240307',
                max_tokens: 500,
                system: systemPrompt,
                messages: [
                  { role: 'user', content: message }
                ]
              })
            });

            if (!response.ok) {
              throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            res.end(JSON.stringify({ reply: data.content[0].text }));

          } catch (e) {
            console.error(e);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to communicate with AI provider.' }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), chatApiPlugin()],
})
