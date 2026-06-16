import { useState } from 'react';
import {
  TrendingUp, DollarSign, Target, Shield, 
  ChevronRight, Zap, BarChart3, ArrowUpRight
} from 'lucide-react';

const negotiationScenarios = [
  { level: 'Entry', range: '$150K - $200K', tips: 'Focus on growth potential and learning opportunities' },
  { level: 'Senior', range: '$200K - $350K', tips: 'Leverage competing offers and equity negotiation' },
  { level: 'Staff+', range: '$350K - $600K+', tips: 'Total comp strategy with signing bonus, RSUs, and performance bonuses' },
  { level: 'Director+', range: '$500K - $1M+', tips: 'Executive comp packages with long-term incentives' },
];

const compensationInsights = [
  { label: 'Base Salary', value: '$210,000', percent: 60, color: 'from-cosmic-500 to-purple-500' },
  { label: 'Equity (RSUs)', value: '$80,000/yr', percent: 23, color: 'from-green-500 to-emerald-500' },
  { label: 'Annual Bonus', value: '$35,000', percent: 10, color: 'from-amber-500 to-orange-500' },
  { label: 'Signing Bonus', value: '$25,000', percent: 7, color: 'from-blue-500 to-cyan-500' },
];

export default function SalaryView() {
  const [selectedScenario, setSelectedScenario] = useState(1);
  const [showScript, setShowScript] = useState(false);

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="animate-in">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Salary Negotiation <span className="gradient-text">Coach</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">AI-powered compensation analysis and negotiation strategy</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4">
          {/* Target Role */}
          <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Target className="w-5 h-5 text-cosmic-400" />
                Target: Staff AI Engineer
              </h2>
              <span className="badge-elite">ELITE</span>
            </div>
            <div className="text-center py-4">
              <p className="text-4xl sm:text-5xl font-bold gradient-text">$350K+</p>
              <p className="text-sm text-gray-400 mt-1">Target Total Compensation</p>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3 rounded-xl bg-glass-light text-center">
                <p className="text-lg font-bold text-white">$210K</p>
                <p className="text-xs text-gray-500">Current Base</p>
              </div>
              <div className="p-3 rounded-xl bg-glass-light text-center">
                <p className="text-lg font-bold text-green-400">+67%</p>
                <p className="text-xs text-gray-500">Growth Potential</p>
              </div>
              <div className="p-3 rounded-xl bg-glass-light text-center">
                <p className="text-lg font-bold text-cosmic-400">92%</p>
                <p className="text-xs text-gray-500">Market Match</p>
              </div>
            </div>
          </div>

          {/* Negotiation Scenarios */}
          <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Compensation Levels</h3>
            <div className="space-y-2">
              {negotiationScenarios.map((scenario, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedScenario(i)}
                  className={`w-full p-3 rounded-xl text-left transition-all ${
                    selectedScenario === i
                      ? 'bg-cosmic-500/10 border border-cosmic-500/30'
                      : 'bg-glass-light hover:bg-glass-medium'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-200">{scenario.level}</p>
                      <p className="text-lg font-bold gradient-text">{scenario.range}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${selectedScenario === i ? 'text-cosmic-400' : 'text-gray-600'}`} />
                  </div>
                  {selectedScenario === i && (
                    <p className="text-xs text-gray-400 mt-2">{scenario.tips}</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Negotiation Script */}
          <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-300">Mock Negotiation Script</h3>
              <button onClick={() => setShowScript(!showScript)} className="text-xs text-cosmic-400 hover:text-cosmic-300">
                {showScript ? 'Hide' : 'Show Script'}
              </button>
            </div>
            {showScript && (
              <div className="space-y-3 text-sm bg-deep-card rounded-xl p-4">
                <p className="text-gray-300 font-medium">Your script:</p>
                <p className="text-gray-400 italic">
                  "Thank you for the offer. I'm excited about the role and the team. Based on my research of similar Staff AI Engineer roles at {selectedScenario === 2 ? 'FAANG companies' : 'top AI companies'}, and considering my experience in building production ML systems at scale, I was hoping we could discuss the total compensation package. Specifically, I'd like to explore..."
                </p>
                <button className="btn-primary text-sm mt-2">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Practice With AI
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Market Insights */}
          <div className="glass-card p-4 animate-in animate-in-delay-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cosmic-400" />
              Compensation Breakdown
            </h3>
            <div className="space-y-3">
              {compensationInsights.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white">{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-deep-card overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{item.percent}% of total</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="glass-card p-4 animate-in animate-in-delay-3">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Pro Negotiation Tips</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <Shield className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Never share your current salary first</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-cosmic-400 mt-0.5 flex-shrink-0" />
                <span>Research total compensation, not just base</span>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Use competing offers as leverage</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-4 animate-in animate-in-delay-3">
            <button className="btn-primary w-full text-sm">
              <ArrowUpRight className="w-4 h-4 inline mr-2" />
              Full Market Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}