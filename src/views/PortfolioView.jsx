import { useState } from 'react';
import { 
  Briefcase, Github, Globe, Code2, ExternalLink, 
  Star, CheckCircle2, AlertCircle, ArrowUpRight 
} from 'lucide-react';

const portfolioItems = [
  {
    title: 'AI-Powered Recommendation Engine',
    type: 'GitHub',
    url: '#',
    score: 94,
    impact: 'High',
    tech: ['Python', 'PyTorch', 'FastAPI', 'Redis'],
    description: 'Built a real-time ML recommendation system serving 500K+ users',
    improvements: ['Add unit tests', 'Improve documentation'],
    status: 'strong',
  },
  {
    title: 'Distributed ML Training Pipeline',
    type: 'GitHub',
    url: '#',
    score: 88,
    impact: 'High',
    tech: ['Kubernetes', 'Kubeflow', 'TensorFlow'],
    description: 'Designed distributed training pipeline reducing training time by 60%',
    improvements: ['Add benchmark results'],
    status: 'strong',
  },
  {
    title: 'Personal Blog - ML Engineering',
    type: 'Blog',
    url: '#',
    score: 72,
    impact: 'Medium',
    tech: ['Next.js', 'MDX', 'Vercel'],
    description: 'Technical blog with 15 articles on ML system design',
    improvements: ['Increase posting frequency', 'Add more diagrams'],
    status: 'needs-work',
  },
];

export default function PortfolioView() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="animate-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Portfolio <span className="gradient-text">Audit</span>
            </h1>
            <p className="text-gray-400 mt-1 text-sm">AI-powered portfolio analysis and improvement suggestions</p>
          </div>
          <div className="glass-card px-4 py-2 rounded-xl text-center">
            <p className="text-xs text-gray-400">Overall Score</p>
            <p className="text-xl font-bold gradient-text">84%</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Portfolio Items */}
        <div className="lg:col-span-2 space-y-4">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedItem(selectedItem === i ? null : i)}
              className={`glass-card-hover p-4 sm:p-5 cursor-pointer animate-in animate-in-delay-${i + 1}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl p-2.5 ${
                    item.type === 'GitHub' ? 'bg-gray-700' : 'bg-cosmic-600/20'
                  }`}>
                    {item.type === 'GitHub' ? (
                      <Github className="w-full h-full text-white" />
                    ) : (
                      <Globe className="w-full h-full text-cosmic-300" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-200">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.type} · {item.impact} Impact</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                  item.score >= 85 ? 'text-green-400 bg-green-500/10' : 'text-amber-400 bg-amber-500/10'
                }`}>
                  {item.score}%
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 mt-3">{item.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.tech.map((t, j) => (
                  <span key={j} className="px-2 py-0.5 text-xs rounded-md bg-glass-light text-gray-400">
                    {t}
                  </span>
                ))}
              </div>

              {selectedItem === i && (
                <div className="mt-4 pt-4 border-t border-white/10 space-y-3 animate-in">
                  <div className="flex items-center gap-2 text-xs">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-amber-400 font-medium">Improvements Needed:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.improvements.map((imp, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                        {imp}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-secondary text-xs py-2">
                    <ExternalLink className="w-3 h-3 inline mr-1" />
                    Open Repository
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Audit Panel */}
        <div className="space-y-4">
          <div className="glass-card p-4 animate-in animate-in-delay-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Audit Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">GitHub Repos</span>
                <span className="text-white">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Stars Total</span>
                <span className="text-white">347</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Contributions</span>
                <span className="text-white">1,892</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Blog Posts</span>
                <span className="text-white">15</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 animate-in animate-in-delay-3">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="btn-primary w-full text-sm">
                <CheckCircle2 className="w-4 h-4 inline mr-2" />
                Full Portfolio Audit
              </button>
              <button className="btn-secondary w-full text-sm">
                <ArrowUpRight className="w-4 h-4 inline mr-2" />
                Import GitHub
              </button>
              <button className="btn-secondary w-full text-sm">
                <Code2 className="w-4 h-4 inline mr-2" />
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}