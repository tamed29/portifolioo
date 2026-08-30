import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, Loader2, X, MessageSquare } from 'lucide-react';
import { getResponse } from '../utils/chatEngine';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hello! I'm the AI assistant for Tamirat Dereje. Ask me anything about his skills, experience, projects, or education." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    // Simulate typing delay for a natural feel (400-800ms)
    const delay = Math.floor(Math.random() * 400) + 400;
    
    setTimeout(() => {
      const response = getResponse(userMessage);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsLoading(false);
    }, delay);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-[320px] sm:w-[380px] rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] bg-background font-mono flex flex-col h-[450px]"
          >
            {/* Terminal Header */}
            <div className="bg-surface border-b border-primary/20 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal size={16} className="text-primary" />
                <span className="text-xs text-textBody font-bold">tamedev@ai:~</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-textBody hover:text-primary transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-lg px-3 py-2 ${
                    msg.role === 'user' 
                      ? 'bg-primary/20 text-primary border border-primary/30 rounded-br-none' 
                      : 'bg-surface border border-white/5 text-textHeading rounded-bl-none'
                  }`}>
                    <p className="text-xs leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-surface border border-white/5 rounded-lg rounded-bl-none px-3 py-2 text-textHeading flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-primary" />
                    <span className="text-xs">Processing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-surface border-t border-white/5 relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-1 flex items-center bg-background border border-white/10 rounded-lg overflow-hidden focus-within:border-primary/50 transition-colors">
                  <span className="pl-3 text-primary font-bold text-sm">&gt;</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about my skills..."
                    className="w-full bg-transparent text-textHeading px-2 py-2 outline-none text-xs placeholder:text-textBody/50"
                    disabled={isLoading}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_-5px_rgba(0,217,255,0.5)] transition-all duration-300 ${
          isOpen ? 'bg-surface text-primary border border-primary/50 rotate-90' : 'bg-gradient-to-r from-primary to-secondary text-white hover:scale-110 animate-glow'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default FloatingChat;
