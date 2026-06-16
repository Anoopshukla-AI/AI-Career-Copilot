import { useState } from 'react';
import {
  Search, MapPin, Building2, Star, 
  ExternalLink, Bookmark, Filter, Clock
} from 'lucide-react';

const jobListings = [
  {
    title: 'Staff AI Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    salary: '$350K - $500K',
    match: 94,
    type: 'Staff+',
    skills: ['LLM', 'Distributed Systems', 'Python', 'ML'],
    posted: '2 days ago',
    bookmarked: false,
  },
  {
    title: 'Senior ML Engineer',
    company: 'OpenAI',
    location: 'San Francisco, CA',
    salary: '$300K - $450K',
    match: 88,
    type: 'Senior',
    skills: ['PyTorch', 'ML Systems', 'RAG', 'Kubernetes'],
    posted: '1 week ago',
    bookmarked: true,
  },
  {
    title: 'AI Solutions Architect',
    company: 'Anthropic',
    location: 'Remote',
    salary: '$280K - $420K',
    match: 85,
    type: 'Senior',
    skills: ['AI/ML', 'System Design', 'Customer-facing'],
    posted: '3 days ago',
    bookmarked: false,
  },
  {
    title: 'Principal AI Engineer',
    company: 'Microsoft',
    location: 'Redmond, WA',
    salary: '$400K - $600K',
    match: 79,
    type: 'Staff+',
    skills: ['Azure', 'LLM', 'MLOps', 'Architecture'],
    posted: '5 days ago',
    bookmarked: false,
  },
];

export default function JobMatchView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredJobs = jobListings.filter(j => {
    if (filterType === 'bookmarked') return j.bookmarked;
    return j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           j.company.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="animate-in">
        <h1 className="text-2xl sm:text-3xl font-bold">
          AI Job <span className="gradient-text">Match</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">Smart job matching based on your skills and career goals</p>
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
                  placeholder="Search jobs, companies..."
                  className="input-glass pl-10"
                />
              </div>
              <div className="flex gap-2">
                {['all', 'staff+', 'senior', 'bookmarked'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilterType(f)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      filterType === f
                        ? 'bg-cosmic-500/20 text-cosmic-300 border border-cosmic-500/30'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {f === 'staff+' ? 'Staff+' : f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-3">
            {filteredJobs.map((job, i) => (
              <div key={i} className="glass-card-hover p-4 animate-in animate-in-delay-1">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {job.company[0]}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-200">{job.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                        <Building2 className="w-3 h-3 inline" />
                        {job.company}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 inline" /> {job.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-bold ${job.match >= 85 ? 'text-green-400' : 'text-amber-400'}`}>
                      {job.match}% Match
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{job.salary}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {job.skills.map((skill, j) => (
                    <span key={j} className="px-2 py-0.5 text-xs rounded-md bg-glass-light text-gray-400">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {job.posted}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className={`p-1.5 rounded-lg transition-all ${job.bookmarked ? 'text-cosmic-400 bg-cosmic-500/10' : 'text-gray-500 hover:text-gray-300'}`}>
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="btn-primary text-xs py-1.5 px-3">
                      <ExternalLink className="w-3 h-3 inline mr-1" />
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-4">
          {/* Match Stats */}
          <div className="glass-card p-4 animate-in animate-in-delay-2">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Your Match Profile</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-glass-light text-center">
                <p className="text-2xl font-bold gradient-text">12</p>
                <p className="text-xs text-gray-500">Matching Jobs</p>
              </div>
              <div className="p-3 rounded-xl bg-glass-light text-center">
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-xs text-gray-500">Applications Sent</p>
              </div>
              <div className="p-3 rounded-xl bg-glass-light text-center">
                <p className="text-2xl font-bold text-green-400">3</p>
                <p className="text-xs text-gray-500">Interviews Scheduled</p>
              </div>
            </div>
          </div>

          {/* Target Companies */}
          <div className="glass-card p-4 animate-in animate-in-delay-3">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">Target Companies</h3>
            <div className="space-y-2">
              {['Google', 'OpenAI', 'Anthropic', 'Microsoft'].map((company, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-glass-light">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    {company[0]}
                  </div>
                  <span className="text-xs text-gray-300">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}