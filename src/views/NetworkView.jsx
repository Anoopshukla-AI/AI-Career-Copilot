import { useState } from 'react';
import {
  Users, UserPlus, MessageCircle, Linkedin, 
  Mail, ExternalLink, Search, Star, Clock
} from 'lucide-react';

const connections = [
  { name: 'Sarah Johnson', role: 'AI Engineer @ Google', status: 'connected', lastContact: '2 days ago', mutual: 12 },
  { name: 'Mike Patel', role: 'ML Architect @ Anthropic', status: 'connected', lastContact: '1 week ago', mutual: 8 },
  { name: 'Lisa Wang', role: 'Staff Eng @ OpenAI', status: 'pending', lastContact: '2 weeks ago', mutual: 5 },
  { name: 'David Kim', role: 'Engineering Manager @ Meta', status: 'connected', lastContact: '3 days ago', mutual: 15 },
  { name: 'Rachel Torres', role: 'Talent Partner @ Google', status: 'pending', lastContact: '1 month ago', mutual: 3 },
];

const networkingGoals = [
  { icon: UserPlus, label: 'Connect with 5 new people', progress: 60, target: 'This week' },
  { icon: MessageCircle, label: 'Follow up with connections', progress: 40, target: 'This month' },
  { icon: Star, label: 'Get 3 referrals', progress: 33, target: 'Q2 2026' },
];

export default function NetworkView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredConnections = connections.filter(c => {
    if (filter === 'pending') return c.status === 'pending';
    if (filter === 'connected') return c.status === 'connected';
    return c.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="animate-in">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Professional <span className="gradient-text">Network</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">AI-powered networking and connection management</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-4">
          {/* Search and Filter */}
          <div className="glass-card p-4 animate-in animate-in-delay-1">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex-1 min-w-[200px] relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search connections..."
                  className="input-glass pl-10"
                />
              </div>
              <div className="flex gap-2">
                {['all', 'connected', 'pending'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      filter === f
                        ? 'bg-cosmic-500/20 text-cosmic-300 border border-cosmic-500/30'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Connections List */}
          <div className="space-y-3">
            {filteredConnections.map((conn, i) => (
              <div key={i} className="glass-card-hover p-4 animate-in animate-in-delay-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                      {conn.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-200">{conn.name}</h3>
                      <p className="text-xs text-gray-500">{conn.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs ${conn.status === 'connected' ? 'text-green-400' : 'text-amber-400'}`}>
                          {conn.status === 'connected' ? '● Connected' : '● Pending'}
                        </span>
                        <span className="text-xs text-gray-600">· {conn.mutual} mutual</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg glass-card text-gray-400 hover:text-gray-200">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg glass-card text-gray-400 hover:text-gray-200">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg glass-card text-gray-400 hover:text-gray-200">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  Last contact: {conn.lastContact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Network Goals */}
          <div className="glass-card p-4 animate-in animate-in-delay-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Networking Goals</h3>
            <div className="space-y-3">
              {networkingGoals.map((goal, i) => {
                const Icon = goal.icon;
                return (
                  <div key={i} className="p-3 rounded-xl bg-glass-light">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-3.5 h-3.5 text-cosmic-400" />
                      <span className="text-xs text-gray-300">{goal.label}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-deep-card overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cosmic-500 to-purple-500" style={{ width: `${goal.progress}%` }} />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{goal.target}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-4 animate-in animate-in-delay-3">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Actions</h3>
            <div className="space-y-2">
              <button className="btn-primary w-full text-sm">
                <UserPlus className="w-4 h-4 inline mr-2" />
                Find New Contacts
              </button>
              <button className="btn-secondary w-full text-sm">
                <Linkedin className="w-4 h-4 inline mr-2" />
                Import LinkedIn
              </button>
              <button className="btn-secondary w-full text-sm">
                <Users className="w-4 h-4 inline mr-2" />
                Suggested Intros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}