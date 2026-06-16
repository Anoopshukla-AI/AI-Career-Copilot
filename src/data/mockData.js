// Mock user data for CareerCopilot AI
const mockUser = {
  id: 'user-1',
  name: 'Alex Chen',
  email: 'alex.chen@example.com',
  avatar: null, // Will use initials
  title: 'Senior AI Engineer',
  experience: '8 years',
  targetRole: 'Staff AI Engineer',
  targetCompanies: ['Google', 'OpenAI', 'Anthropic', 'Microsoft'],
  currentSalary: '$210,000',
  targetSalary: '$350,000+',
  subscription: 'pro', // 'free' | 'pro' | 'elite'
  memberSince: 'Jan 2026',
  stats: {
    interviewsCompleted: 24,
    avgScore: 87,
    offersReceived: 3,
    salaryGrowth: '+$45,000',
    profileStrength: 78,
    applicationsSent: 12,
    interviewsScheduled: 5,
  },
  recentActivity: [
    { type: 'interview', label: 'Mock Interview - System Design', score: 92, date: '2h ago' },
    { type: 'resume', label: 'ATS Resume Score Updated', score: 85, date: '1d ago' },
    { type: 'portfolio', label: 'Portfolio Audit Complete', score: 76, date: '3d ago' },
    { type: 'skill', label: 'New Skill Gap Analysis Ready', score: null, date: '5d ago' },
  ],
  skills: {
    strengths: [
      { name: 'System Design', level: 92 },
      { name: 'Python/ML', level: 88 },
      { name: 'LLM Architecture', level: 85 },
      { name: 'Distributed Systems', level: 82 },
    ],
    gaps: [
      { name: 'Kubernetes', level: 55 },
      { name: 'MLOps', level: 60 },
      { name: 'Leadership', level: 65 },
    ],
  },
  careerMilestones: [
    { milestone: 'Profile Optimized', completed: true, date: 'Jan 15, 2026' },
    { milestone: 'First Mock Interview', completed: true, date: 'Jan 20, 2026' },
    { milestone: 'Resume ATS Score > 80', completed: true, date: 'Feb 5, 2026' },
    { milestone: '10 Interviews Completed', completed: true, date: 'Mar 10, 2026' },
    { milestone: 'Portfolio Audit Passed', completed: false, date: null },
    { milestone: 'Offer Secured', completed: false, date: null },
  ],
};

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'interview', label: 'Mock Interview', icon: 'Mic' },
  { id: 'whiteboard', label: 'Whiteboard', icon: 'Presentation' },
  { id: 'portfolio', label: 'Portfolio', icon: 'Briefcase' },
  { id: 'resume', label: 'Resume', icon: 'FileText' },
  { id: 'coach', label: 'AI Coach', icon: 'Bot' },
  { id: 'salary', label: 'Salary Coach', icon: 'TrendingUp' },
  { id: 'network', label: 'Network', icon: 'Users' },
  { id: 'jobs', label: 'Job Match', icon: 'Search' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
];

const careerMilestones = [
  { milestone: 'Profile Optimized', completed: true, date: 'Jan 15, 2026' },
  { milestone: 'First Mock Interview', completed: true, date: 'Jan 20, 2026' },
  { milestone: 'Resume ATS Score > 80', completed: true, date: 'Feb 5, 2026' },
  { milestone: '10 Interviews Completed', completed: true, date: 'Mar 10, 2026' },
  { milestone: 'Portfolio Audit Passed', completed: false, date: null },
  { milestone: 'Offer Secured', completed: false, date: null },
];

export { mockUser, navigationItems, careerMilestones };