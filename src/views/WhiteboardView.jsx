import { useState } from 'react';
import { 
  Presentation, Pen, Eraser, Square, Circle, 
  ArrowRight, RotateCcw, Download, Share2, MessageSquare
} from 'lucide-react';

const tools = [
  { id: 'pen', label: 'Pen', icon: Pen },
  { id: 'eraser', label: 'Eraser', icon: Eraser },
  { id: 'square', label: 'Square', icon: Square },
  { id: 'circle', label: 'Circle', icon: Circle },
  { id: 'arrow', label: 'Arrow', icon: ArrowRight },
];

const systemDesignProblems = [
  'Design a real-time chat system for 100M users',
  'Design a distributed key-value store',
  'Design a URL shortener like TinyURL',
  'Design a video streaming platform',
  'Design an LLM inference serving system',
];

export default function WhiteboardView() {
  const [activeTool, setActiveTool] = useState('pen');
  const [activeProblem, setActiveProblem] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="animate-in">
        <h1 className="text-2xl sm:text-3xl font-bold">
          System Design <span className="gradient-text">Whiteboard</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">Interactive system design practice with AI evaluation</p>
      </div>

      <div className="flex flex-wrap gap-2 animate-in animate-in-delay-1">
        {systemDesignProblems.map((problem, i) => (
          <button
            key={i}
            onClick={() => setActiveProblem(problem)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeProblem === problem
                ? 'bg-gradient-to-r from-cosmic-600 to-purple-500 text-white shadow-lg'
                : 'glass-card text-gray-400 hover:text-gray-200'
            }`}
          >
            {problem.length > 35 ? problem.slice(0, 35) + '...' : problem}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="lg:col-span-3 space-y-4">
          {/* Whiteboard */}
          <div className="glass-card p-4 h-[400px] sm:h-[500px] flex flex-col animate-in animate-in-delay-1">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <h3 className="text-sm font-medium text-gray-300">
                {activeProblem || 'Select a problem to begin'}
              </h3>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg glass-card text-gray-400 hover:text-gray-200">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg glass-card text-gray-400 hover:text-gray-200">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg glass-card text-gray-400 hover:text-gray-200">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Drawing tools */}
            <div className="flex items-center gap-2 mb-4">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTool(tool.id)}
                    className={`p-2.5 rounded-xl transition-all ${
                      activeTool === tool.id
                        ? 'bg-cosmic-500/20 text-cosmic-300 border border-cosmic-500/30'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-glass-light'
                    }`}
                    title={tool.label}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
              <div className="flex-1" />
              <div className="flex items-center gap-2">
                {['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#ffffff'].map((color) => (
                  <button
                    key={color}
                    className="w-5 h-5 rounded-full border border-white/10 hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Canvas area */}
            <div className="flex-1 rounded-xl bg-deep-card/50 border border-dashed border-white/10 flex items-center justify-center">
              {!activeProblem ? (
                <div className="text-center">
                  <Presentation className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">Select a problem above and start designing</p>
                  <p className="text-xs text-gray-600 mt-1">Use the drawing tools to sketch your architecture</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-400">🎨 Canvas ready for {activeProblem}</p>
                  <p className="text-xs text-gray-500 mt-1">Draw your system architecture here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feedback Panel */}
        <div className="space-y-4">
          <div className="glass-card p-4 animate-in animate-in-delay-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cosmic-400" />
              AI Evaluation
            </h3>
            {!showFeedback ? (
              <div className="text-center py-6">
                <p className="text-xs text-gray-500">Submit your design for AI evaluation</p>
                <button onClick={() => setShowFeedback(true)} className="btn-primary mt-3 text-sm w-full">
                  Evaluate Design
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-glass-light">
                  <p className="text-xs text-gray-400 mb-1">Architecture Score</p>
                  <p className="text-lg font-bold text-green-400">82/100</p>
                </div>
                <div className="p-3 rounded-xl bg-glass-light">
                  <p className="text-xs text-gray-400 mb-1">Scalability</p>
                  <p className="text-lg font-bold text-cosmic-400">78/100</p>
                </div>
                <div className="p-3 rounded-xl bg-glass-light">
                  <p className="text-xs text-gray-400 mb-1">Data Flow</p>
                  <p className="text-lg font-bold text-amber-400">70/100</p>
                </div>
                <div className="p-3 rounded-xl bg-glass-light">
                  <p className="text-xs text-gray-400 mb-2">Suggestions</p>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Consider adding a CDN layer</li>
                    <li>• Add database replication strategy</li>
                    <li>• Include monitoring/alerting</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}