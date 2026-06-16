import { useState } from 'react';
import { Mic, Video, StopCircle, Play, BarChart3, MessageSquare, Clock, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

const questionTypes = [
  { id: 'behavioral', label: 'Behavioral', color: 'from-blue-500 to-cyan-500' },
  { id: 'technical', label: 'Technical', color: 'from-cosmic-500 to-purple-500' },
  { id: 'system-design', label: 'System Design', color: 'from-green-500 to-emerald-500' },
  { id: 'leadership', label: 'Leadership', color: 'from-amber-500 to-orange-500' },
];

const sampleQuestions = {
  behavioral: [
    'Tell me about a time you resolved a technical disagreement with a colleague.',
    'Describe a project where you had to make a trade-off between speed and quality.',
    'How do you stay current with AI/ML advancements?',
  ],
  technical: [
    'Explain how transformer attention mechanisms work.',
    'How would you optimize inference for a large language model?',
    'Describe the architecture of a RAG system.',
  ],
};

export default function MockInterviewView() {
  const [selectedType, setSelectedType] = useState('behavioral');
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [messages, setMessages] = useState([]);
  const { user } = useApp();

  const startInterview = () => {
    const questions = sampleQuestions[selectedType] || sampleQuestions.behavioral;
    const question = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(question);
    setMessages([{ role: 'ai', text: `Let's begin your ${selectedType} interview. I'll ask you questions and provide real-time feedback.` }]);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      // Simulate stopping recording and getting feedback
      setTimeout(() => {
        setMessages(prev => [...prev, 
          { role: 'user', text: '[Your audio response transcribed]' },
          { role: 'ai', text: 'Great response! Your answer showed strong structure using the STAR method. Consider adding more specific metrics to strengthen your impact.' },
          { role: 'ai', text: 'Score: 85/100 - Clarity: 88% | Structure: 82% | Impact: 84%' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="animate-in">
        <h1 className="text-2xl sm:text-3xl font-bold">
          AI Mock <span className="gradient-text">Interview</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">Real-time voice/video interview simulation with AI feedback</p>
      </div>

      {/* Question Type Selector */}
      <div className="flex flex-wrap gap-2 animate-in animate-in-delay-1">
        {questionTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              selectedType === type.id
                ? `bg-gradient-to-r ${type.color} text-white shadow-lg`
                : 'glass-card text-gray-400 hover:text-gray-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Interview Panel */}
        <div className="lg:col-span-2 space-y-4">
          {/* Video/Interview Area */}
          <div className="glass-card p-4 sm:p-6 min-h-[300px] sm:min-h-[400px] flex flex-col animate-in animate-in-delay-1">
            {!currentQuestion ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cosmic-500 to-purple-500 p-5 mb-4 animate-pulse">
                  <Mic className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ready to Practice?</h3>
                <p className="text-gray-400 text-sm max-w-md mb-6">
                  Simulate a real interview with our AI. Get instant feedback on your responses.
                </p>
                <button onClick={startInterview} className="btn-primary">
                  <Play className="w-4 h-4 inline mr-2" />
                  Start {selectedType === 'system-design' ? 'Whiteboard' : 'Mock'} Interview
                </button>
                <div className="flex items-center gap-4 mt-6 text-xs text-gray-500">
                  <span>🎤 Voice support</span>
                  <span>📹 Video optional</span>
                  <span>⚡ Real-time feedback</span>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                {/* AI Interviewer Indicator */}
                <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-glass-light">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-200">AI Interviewer</p>
                    <div className="flex items-center gap-2">
                      <span className="status-dot-active" />
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>
                </div>

                {/* Question */}
                <div className="glass p-4 rounded-xl mb-4 animate-in">
                  <p className="text-sm text-cosmic-300 mb-1">Current Question:</p>
                  <p className="text-base sm:text-lg font-medium text-white">{currentQuestion}</p>
                </div>

                {/* Chat */}
                <div className="flex-1 space-y-3 mb-4 overflow-y-auto max-h-[200px]">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-xl ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-r from-cosmic-600 to-cosmic-500 text-white' 
                          : 'bg-glass-light text-gray-200'
                      }`}>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={toggleRecording}
                    className={`p-4 rounded-full transition-all duration-300 ${
                      isRecording 
                        ? 'bg-red-500/20 text-red-400 animate-pulse shadow-lg shadow-red-500/20' 
                        : 'glass-card text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {isRecording ? <StopCircle className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                  </button>
                  <button className="p-4 rounded-full glass-card text-gray-400 hover:text-gray-200 transition-all">
                    <Video className="w-6 h-6" />
                  </button>
                  <button className="p-4 rounded-full glass-card text-gray-400 hover:text-gray-200 transition-all">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Performance */}
          <div className="glass-card p-4 animate-in animate-in-delay-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cosmic-400" />
              Session Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Questions Asked</span>
                <span className="text-white font-medium">{messages.filter(m => m.role === 'ai').length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Avg Score</span>
                <span className="text-green-400 font-medium">85%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Duration</span>
                <span className="text-white font-medium">12 min</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="glass-card p-4 animate-in animate-in-delay-3">
            <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cosmic-400" />
              Pro Tips
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                Use the STAR method for behavioral questions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cosmic-400 mt-0.5">•</span>
                Speak clearly and at a moderate pace
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                Quantify your achievements with metrics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}