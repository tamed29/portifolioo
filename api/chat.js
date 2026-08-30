// SETUP INSTRUCTIONS:
// 1. Create a Vercel project or use another hosting platform that supports serverless functions in the /api directory.
// 2. Add an environment variable named ANTHROPIC_API_KEY (or adjust for another provider).
// 3. Make sure the API key is set in your deployment environment (e.g. Vercel project settings).
// Note: This uses the Anthropic API via standard fetch to remain lightweight, but can easily be adapted.

import { profile } from '../src/data/profile.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY || process.env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey) {
    // Return a mock response if no API key is found, allowing it to "work" during local dev if key isn't provided
    // but ideally, you'd provide the key in .env.local
    return res.status(200).json({ 
      reply: "Hello! I am currently running in offline/demo mode because no ANTHROPIC_API_KEY was found in the environment variables. Tamirat is a skilled full-stack developer with a passion for AI/ML!" 
    });
  }

  const systemPrompt = `You are the personal portfolio assistant for Tamirat Dereje.
Always respond politely, warmly, and professionally.
Only answer using the provided profile information.
Speak about Tamirat in the third person.
If asked something outside the profile info, politely say you don't have that detail and suggest contacting him directly.

Profile Information:
Name: ${profile.name}
Title: ${profile.title}
Bio: ${profile.bio}
Focus: ${profile.currentFocus}
Open To: ${profile.openTo}
Contact: Phone: ${profile.contact.phone}, Telegram: ${profile.contact.telegram}, Email: tamiratdereje53@gmail.com
Education: ${profile.education.degree} at ${profile.education.institution} (${profile.education.status}). ${profile.education.description}.
Skills: ${JSON.stringify(profile.skills)}
`;

  try {
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
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json({ reply: data.content[0].text });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to communicate with AI provider.' });
  }
}
