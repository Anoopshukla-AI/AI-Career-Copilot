import { useState } from 'react';
import {
  Bot, Send, Sparkles, Lightbulb, BookOpen,
  ArrowRight, MessageSquare, ThumbsUp
} from 'lucide-react';

const quickCoaches = [
  { icon: Lightbulb, label: 'Negotiation Tips', color: 'from-amber-500 to-orange-500' },
  { icon: BookOpen, label: 'Interview Prep', color: 'from-cosmic-500 to-purple-500' },
  { icon: MessageSquare, label: 'Behavioral Help', color: 'from-blue-500 to-cyan-500' },
  { icon: ArrowRight, label: 'Career Strategy', color: 'from-green-500 to-emerald-500' },
];

const sampleConversation = [
  { role: 'ai', text: "Hi Alex! I'm your Career Coach. How can I help you advance your career today?" },
];

export default function AICoachView() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState(sampleConversation);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (!message.trim()) return;
    setChat(prev => [...prev, { role: 'user', text: message }]);
    setMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      setChat(prev => [...prev, { 
        role: 'ai', 
        text: getCoachResponse(message) 
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const getCoachResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('negotiat') || lower.includes('salary')) {
      return "Great question about salary negotiation! Here's my advice:\n\n1. Research the total compensation band for your level using platforms like Levels.fyi\n2. Always let the employer state the first number\n3. Focus on total comp (base + equity + bonus), not just base salary\n4. Practice your BATNA (Best Alternative to Negotiated Agreement)\n\nWould you like to run through a mock negotiation scenario?";
    }
    if (lower.includes('interview') || lower.includes('prepare')) {
      return "I can help you prepare! Let's focus on:\n\n• System Design: Practice whiteboard sessions with our AI evaluator\n• Behavioral: Use the STAR method - I have 50+ questions to practice\n• Technical: Brush up on ML fundamentals, transformers, and RAG architectures\n\nWould you like a customized interview prep plan?";
    }
    if (lower.includes('career') || lower.includes('promot')) {
      return "Let's map out your career trajectory! Based on your profile:\n\n• Your system design skills are strong (92%) - great for Staff+ roles\n• Focus areas: Kubernetes (55%) and MLOps (60%)\n• Target companies: Google, OpenAI, Anthropic are looking for AI Engineers\n\nWant me to create a 90-day career acceleration plan?";
    }
    return "That's a great topic! Let me share some insights:\n\n1. The AI job market is growing rapidly - companies are looking for engineers who can bridge research and production\n2. Your 8 years of experience plus senior title positions you well for Staff-level roles\n3. Key differentiator: Deep expertise in LLM architecture and distributed systems\n\nWhat specific aspect would you like to dive deeper into?";
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="animate-in">
        <h1 className="text-2xl sm:text-3xl font-bold">
          AI Career <span className="gradient-text">Coach</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">Your personal AI career advisor - 24/7 coaching and guidance</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Chat Area */}
        <div className="lg:col-span-3 space-y-4">
          <div className="glass-card flex flex-col h-[500px] animate-in animate-in-delay-1">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-200">Career Copilot</p>
                <div className="flex items-center gap-2">
                  <span className="status-dot-active" />
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-cosmic-600 to-cosmic-500 text-white rounded-tr-sm'
                      : 'bg-glass-light text-gray-200 rounded-tl-sm'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center mr-2 flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-glass-light rounded-2xl rounded-tl-sm p-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask your career coach anything..."
                  className="input-glass flex-1"
                />
                <button onClick={sendMessage} className="p-3 rounded-xl bg-gradient-to-r from-cosmic-600 to-cosmic-500 hover:from-cosmic-500 hover:to-cosmic-400 text-white transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="space-y-4">
          <div className="glass-card p-4 animate-in animate-in-delay-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cosmic-400" />
              Quick Coaching
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickCoaches.map((coach, i) => {
                const Icon = coach.icon;
                return (
                  <button
                    key={i}
                    onClick={() => setMessage(`Help me with ${coach.label.toLowerCase()}`)}
                    className="p-3 rounded-xl bg-glass-light hover:bg-glass-heavy text-center transition-all group"
                  >
                    <div className={`w-8 h-8 mx-auto rounded-lg bg-gradient-to-br ${coach.color} p-1.5 mb-1.5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-gray-200">{coach.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="glass-card p-4 animate-in animate-in-delay-3">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Session Stats</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Sessions</span>
                <span className="text-white">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Rating</span>
                <span className="text-white flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3 text-cosmic-400" /> 4.8
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Topics Covered</span>
                <span className="text-white">47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}