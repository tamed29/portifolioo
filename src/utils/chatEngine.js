import { profile } from '../data/profile';

export const getResponse = (userMessage) => {
  const msg = userMessage.toLowerCase();
  
  // Greetings
  if (msg.match(/\b(hi|hello|hey|greetings)\b/)) {
    return `Hello! I'm Tamirat's personal AI assistant. I can help you learn more about his skills, projects, background, and experience. What would you like to know?`;
  }
  
  // Projects - Individual Matches
  if (msg.match(/\b(bus|abbay)\b/)) {
    const p = profile.projects.find(p => p.title.toLowerCase().includes('abbay'));
    if (p) return `Tamirat built the "${p.title}", which is a ${p.description.toLowerCase()} It's currently in ${p.status.toLowerCase()}. It was built using ${p.tech.join(', ')}. You can check it out here: ${p.liveUrl}`;
  }
  
  if (msg.match(/\b(wubet|humanitarian)\b/)) {
    const p = profile.projects.find(p => p.title.toLowerCase().includes('wubet'));
    if (p) return `Tamirat developed the "${p.title}", a ${p.description.toLowerCase()} It's currently ${p.status.toLowerCase()}. Tech stack: ${p.tech.join(', ')}. Live demo: ${p.liveUrl}`;
  }
  
  if (msg.match(/\b(hotel|aethelgard)\b/)) {
    const p = profile.projects.find(p => p.title.toLowerCase().includes('aethelgard'));
    if (p) return `The "${p.title}" is one of Tamirat's projects. It's a ${p.description.toLowerCase()} It's ${p.status.toLowerCase()} and built with ${p.tech.join(', ')}. Live link: ${p.liveUrl}`;
  }
  
  if (msg.match(/\b(campus|amusecure)\b/)) {
    const p = profile.projects.find(p => p.title.toLowerCase().includes('amusecure'));
    if (p) return `Tamirat built "${p.title}", which ${p.description.toLowerCase()} It is ${p.status.toLowerCase()} using ${p.tech.join(', ')}. Check it out: ${p.liveUrl}`;
  }
  
  if (msg.match(/\b(qr menu|qr|menu)\b/)) {
    const p = profile.projects.find(p => p.title.toLowerCase().includes('qr menu'));
    if (p) return `Tamirat created the "${p.title}". It's a ${p.description.toLowerCase()} Status: ${p.status.toLowerCase()}. Tech: ${p.tech.join(', ')}. Live: ${p.liveUrl}`;
  }

  // Projects - General
  if (msg.match(/\b(project|projects|built|work|portfolio)\b/)) {
    return `Tamirat has built several impressive projects:\n\n` + 
           profile.projects.map(p => `• ${p.title}: ${p.description}`).join('\n') + 
           `\n\nAsk me about a specific project to learn more!`;
  }

  // Skills
  if (msg.match(/\b(skill|skills|tech|stack|language|languages|framework|frameworks|know)\b/)) {
    return `Tamirat is highly skilled across the full stack. Here is a quick breakdown:\n\n` +
           `• Languages: ${profile.skills.Languages.join(', ')}\n` +
           `• Frontend: ${profile.skills.Frontend.join(', ')}\n` +
           `• Backend: ${profile.skills.Backend.join(', ')}\n` +
           `• Databases: ${profile.skills.Databases.join(', ')}\n` +
           `• AI/ML: ${profile.skills["AI/ML"].join(', ')}\n` +
           `• Tools: ${profile.skills["Tools/Cloud"].join(', ')}`;
  }
  
  // AI/ML
  if (msg.match(/\b(ai|machine learning|ml)\b/)) {
    return `Tamirat has a growing specialization in Artificial Intelligence and Machine Learning. He leverages ${profile.skills["AI/ML"].join(', ')} to build intelligent applications, and is constantly expanding his knowledge in this field to integrate it with his strong full-stack foundation.`;
  }

  // Experience / Background
  if (msg.match(/\b(experience|experiance|background|who are you|about|bio|year|years)\b/)) {
    return `Tamirat is a ${profile.title}. He has over 3 years of hands-on experience designing and deploying production web applications, and has worked as an independent Full-Stack Software Developer since 2024.`;
  }

  // Education
  if (msg.match(/\b(education|university|study|degree|school)\b/)) {
    return `Tamirat is a ${profile.education.status} pursuing his ${profile.education.degree} at ${profile.education.institution}. He focuses on both core software engineering and emerging AI/ML technologies.`;
  }

  // CV / Resume
  if (msg.match(/\b(cv|resume|download cv|document)\b/)) {
    return `You can download Tamirat's full CV using the "DOWNLOAD MY CV" button in the Hero section above! It covers all his extensive skills, education, and project experiences.`;
  }

  // Contact
  if (msg.match(/\b(contact|email|reach|linkedin|github|phone|telegram)\b/)) {
    return `You can reach Tamirat via:\n\n` +
           `• Telegram: ${profile.contact.telegram}\n` +
           `• Phone: ${profile.contact.phone}\n` +
           `• LinkedIn: ${profile.contact.linkedin}\n` +
           `• GitHub: ${profile.contact.github}\n\n` + 
           `Feel free to reach out anytime!`;
  }

  // Availability / Hiring / Freelancing / Work
  if (msg.match(/\b(available|hire|freelance|freelancing|job|opportunity|work|real work)\b/)) {
    return `Yes! Tamirat is open to any real work, including freelancing, AI/ML projects, and software engineering roles. He is fully capable of owning a project end-to-end. You can reach out to him via the Contact section to discuss your project!`;
  }

  // Fallback
  return `I'm not quite sure about that. As Tamirat's assistant, I can best answer questions regarding his skills, years of experience, projects, education, CV, and contact information. Could you rephrase your question?`;
};
