import { useState } from 'react';
import {
  FileText, Upload, Download, RefreshCw, 
  CheckCircle2, AlertTriangle, Zap, Search
} from 'lucide-react';

const scoreCategories = [
  { label: 'Keywords Match', score: 85, max: 100 },
  { label: 'Formatting', score: 92, max: 100 },
  { label: 'Quantifiable Results', score: 70, max: 100 },
  { label: 'Relevant Experience', score: 88, max: 100 },
  { label: 'Skills Section', score: 78, max: 100 },
  { label: 'Education & Certifications', score: 90, max: 100 },
];

const optimizationTips = [
  { text: 'Add more quantifiable achievements (e.g., "Improved accuracy by 23%")', type: 'critical', done: false },
  { text: 'Include relevant keywords: "LLM, RAG, PyTorch, Distributed Systems"', type: 'critical', done: false },
  { text: 'Reduce bullet points under 2-line limit', type: 'warning', done: true },
  { text: 'Add a Technical Summary section at the top', type: 'suggestion', done: false },
  { text: 'Include links to GitHub and portfolio', type: 'suggestion', done: true },
];

export default function ResumeView() {
  const [activeTab, setActiveTab] = useState('optimizer');
  const [jobDescription, setJobDescription] = useState('');

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="animate-in">
        <h1 className="text-2xl sm:text-3xl font-bold">
          ATS Resume <span className="gradient-text">Optimizer</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">AI-powered resume optimization and ATS compatibility scoring</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 animate-in animate-in-delay-1">
        {[
          { id: 'optimizer', label: 'Optimizer', icon: Zap },
          { id: 'preview', label: 'Preview', icon: FileText },
          { id: 'history', label: 'History', icon: RefreshCw },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cosmic-600 to-purple-500 text-white shadow-lg'
                  : 'glass-card text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === 'optimizer' && (
        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
          {/* Left side - Input */}
          <div className="lg:col-span-3 space-y-4">
            <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-1">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Target Job Description</h3>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here to optimize your resume for ATS..."
                className="input-glass h-32 resize-none"
              />
              <div className="flex items-center gap-3 mt-3">
                <button className="btn-primary text-sm">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Optimize Resume
                </button>
                <button className="btn-secondary text-sm">
                  <Upload className="w-4 h-4 inline mr-2" />
                  Upload Resume
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-3">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Optimization Checklist</h3>
              <div className="space-y-2">
                {optimizationTips.map((tip, i) => (
                  <div key={i} className={`flex items-start gap-3 p-2.5 rounded-xl ${
                    tip.done ? 'bg-green-500/5' : tip.type === 'critical' ? 'bg-red-500/5' : 'bg-glass-light'
                  }`}>
                    {tip.done ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    ) : tip.type === 'critical' ? (
                      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-amber-400/50 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className={`text-xs sm:text-sm ${tip.done ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                        {tip.text}
                      </p>
                      {!tip.done && (
                        <span className={`text-xs ${tip.type === 'critical' ? 'text-red-400' : 'text-amber-400'}`}>
                          {tip.type === 'critical' ? 'Critical' : 'Suggestion'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Score Panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-2">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold gradient-text">82%</div>
                <p className="text-xs text-gray-500 mt-1">Overall ATS Score</p>
              </div>
              <div className="space-y-2.5">
                {scoreCategories.map((cat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">{cat.label}</span>
                      <span className={cat.score >= 80 ? 'text-green-400' : 'text-amber-400'}>
                        {cat.score}/{cat.max}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-deep-card overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${
                          cat.score >= 80 ? 'from-green-500 to-emerald-400' : 'from-amber-500 to-orange-400'
                        }`}
                        style={{ width: `${(cat.score / cat.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-4 animate-in animate-in-delay-3">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Actions</h3>
              <div className="space-y-2">
                <button className="btn-primary w-full text-sm">
                  <Download className="w-4 h-4 inline mr-2" />
                  Download Optimized
                </button>
                <button className="btn-secondary w-full text-sm">
                  <Search className="w-4 h-4 inline mr-2" />
                  Compare Versions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'preview' && (
        <div className="glass-card p-6 animate-in text-center py-12">
          <FileText className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">Resume preview will appear here after optimization</p>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="glass-card p-6 animate-in text-center py-12">
          <RefreshCw className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">Optimization history will appear here</p>
        </div>
      )}
    </div>
  );
}