import { useApp } from '../context/AppContext';
import { 
  LayoutDashboard, TrendingUp, Target, Award, 
  Clock, ArrowUpRight, Star, Zap, Sparkles
} from 'lucide-react';

export default function DashboardView() {
  const { user } = useApp();

  const quickStats = [
    { label: 'Interviews', value: user.stats.interviewsCompleted, icon: MicIcon, color: 'from-blue-500 to-cyan-500' },
    { label: 'Avg Score', value: `${user.stats.avgScore}%`, icon: Target, color: 'from-cosmic-500 to-purple-500' },
    { label: 'Offers', value: user.stats.offersReceived, icon: Award, color: 'from-green-500 to-emerald-500' },
    { label: 'Salary Growth', value: user.stats.salaryGrowth, icon: TrendingUp, color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="animate-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Welcome back, <span className="gradient-text">{user.name.split(' ')[0]}</span>
            </h1>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">
              {user.title} · {user.targetRole} Target
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 glass-card px-4 py-2 rounded-xl">
            <Sparkles className="w-4 h-4 text-cosmic-400" />
            <span className="text-sm font-medium">{user.stats.profileStrength}% Profile Strength</span>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 animate-in animate-in-delay-1">
        {quickStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="glass-card p-4 sm:p-5 hover:scale-[1.02] transition-all duration-300">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 mb-3`}>
                <Icon className="w-full h-full text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Recent Activity */}
        <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-cosmic-400" />
              Recent Activity
            </h2>
            <span className="text-xs text-cosmic-400 cursor-pointer hover:text-cosmic-300">View All</span>
          </div>
          <div className="space-y-3">
            {user.recentActivity.map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-glass-light hover:bg-glass-medium transition-all">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${activity.score && activity.score >= 80 ? 'bg-green-400' : activity.score ? 'bg-amber-400' : 'bg-cosmic-400'}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-200">{activity.label}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>
                {activity.score && (
                  <span className={`text-sm font-bold ${activity.score >= 80 ? 'text-green-400' : 'text-amber-400'}`}>
                    {activity.score}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Career Progress */}
        <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Target className="w-4 h-4 text-cosmic-400" />
              Career Milestones
            </h2>
            <span className="badge-pro text-xs">{user.subscription.toUpperCase()}</span>
          </div>
          <div className="space-y-3">
            {user.careerMilestones?.map((milestone, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-glass-light">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${milestone.completed ? 'bg-green-500/20 text-green-400' : 'bg-gray-600/30 text-gray-500'}`}>
                  {milestone.completed ? (
                    <Star className="w-3.5 h-3.5" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-500" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${milestone.completed ? 'text-gray-200' : 'text-gray-500'}`}>
                    {milestone.milestone}
                  </p>
                  {milestone.date && (
                    <p className="text-xs text-gray-500">{milestone.date}</p>
                  )}
                </div>
                {i === user.careerMilestones.length - 1 && !milestone.completed && (
                  <span className="text-xs text-cosmic-400">Next Goal</span>
                )}
              </div>
            ))}
          </div>
          <button className="btn-primary w-full mt-4 text-sm">
            <Zap className="w-4 h-4 inline mr-2" />
            Start Next Session
          </button>
        </div>
      </div>

      {/* Skill Insights */}
      <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-3">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ArrowUpRight className="w-4 h-4 text-cosmic-400" />
          Skill Insights
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-green-400 mb-3">Strengths</h3>
            <div className="space-y-2">
              {user.skills.strengths.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-green-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-deep-card overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-amber-400 mb-3">Growth Areas</h3>
            <div className="space-y-2">
              {user.skills.gaps.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-amber-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-deep-card overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MicIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}