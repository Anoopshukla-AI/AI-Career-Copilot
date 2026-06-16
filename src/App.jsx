import { useRef } from 'react';
import { useApp } from './context/AppContext';
import { 
  LayoutDashboard, Mic, Presentation, Briefcase, FileText,
  Bot, TrendingUp, Users, Search, Settings as SettingsIcon,
  Menu, X, Sparkles, ChevronLeft, ChevronRight
} from 'lucide-react';
import DashboardView from './views/DashboardView';
import MockInterviewView from './views/MockInterviewView';
import WhiteboardView from './views/WhiteboardView';
import PortfolioView from './views/PortfolioView';
import ResumeView from './views/ResumeView';
import AICoachView from './views/AICoachView';
import SalaryView from './views/SalaryView';
import NetworkView from './views/NetworkView';
import JobMatchView from './views/JobMatchView';
import SettingsView from './views/SettingsView';

const iconMap = {
  LayoutDashboard, Mic, Presentation, Briefcase, FileText,
  Bot, TrendingUp, Users, Search, Settings: SettingsIcon,
  Menu, X, Sparkles, ChevronLeft, ChevronRight,
};

const navItems = [
  { id: 'dashboard', label: 'Home', icon: 'LayoutDashboard' },
  { id: 'interview', label: 'Interview', icon: 'Mic' },
  { id: 'whiteboard', label: 'Whiteboard', icon: 'Presentation' },
  { id: 'portfolio', label: 'Portfolio', icon: 'Briefcase' },
  { id: 'resume', label: 'Resume', icon: 'FileText' },
  { id: 'coach', label: 'Coach', icon: 'Bot' },
  { id: 'salary', label: 'Salary', icon: 'TrendingUp' },
  { id: 'network', label: 'Network', icon: 'Users' },
  { id: 'jobs', label: 'Jobs', icon: 'Search' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
];

export default function AppShell() {
  const { activeView, navigate, sidebarOpen, setSidebarOpen, user } = useApp();
  const navScrollRef = useRef(null);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <DashboardView />;
      case 'interview': return <MockInterviewView />;
      case 'whiteboard': return <WhiteboardView />;
      case 'portfolio': return <PortfolioView />;
      case 'resume': return <ResumeView />;
      case 'coach': return <AICoachView />;
      case 'salary': return <SalaryView />;
      case 'network': return <NetworkView />;
      case 'jobs': return <JobMatchView />;
      case 'settings': return <SettingsView />;
      default: return <DashboardView />;
    }
  };

  const scrollNav = (direction) => {
    if (navScrollRef.current) {
      navScrollRef.current.scrollBy({ left: direction * 120, behavior: 'smooth' });
    }
  };

  const NavItem = ({ item, compact }) => {
    const Icon = iconMap[item.icon];
    if (compact) {
      return (
        <button
          onClick={() => navigate(item.id)}
          className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all duration-200 min-w-[64px] flex-shrink-0 ${
            activeView === item.id
              ? 'text-cosmic-300'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <Icon className={`w-5 h-5 ${activeView === item.id ? 'drop-shadow-[0_0_4px_rgba(99,102,241,0.5)]' : ''}`} />
          <span className={`text-[10px] font-medium ${activeView === item.id ? 'text-cosmic-300' : ''}`}>
            {item.label}
          </span>
          {activeView === item.id && (
            <div className="w-1 h-1 rounded-full bg-cosmic-400" />
          )}
        </button>
      );
    }

    return (
      <button
        onClick={() => navigate(item.id)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
          activeView === item.id
            ? 'bg-gradient-to-r from-cosmic-500/20 to-purple-500/10 text-cosmic-300 border border-cosmic-500/20'
            : 'text-gray-400 hover:text-gray-200 hover:bg-glass-light'
        }`}
      >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span>{item.label}</span>
        {item.id === 'dashboard' && (
          <span className="ml-auto w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-500/30" />
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-deep flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 glass-sidebar fixed h-full z-30">
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white">CareerCopilot</h1>
              <p className="text-[10px] text-cosmic-300 -mt-0.5">AI Career OS</p>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-200 truncate">{user.name}</p>
              <div className="flex items-center gap-1">
                <span className="badge-pro text-[10px] px-1.5 py-0">{user.subscription.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-72 glass-sidebar z-50 transform transition-transform duration-300 lg:hidden ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white">CareerCopilot</h1>
              <p className="text-[10px] text-cosmic-300 -mt-0.5">AI Career OS</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg hover:bg-glass-light">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <nav className="p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-200 truncate">{user.name}</p>
              <span className="badge-pro text-[10px] px-1.5 py-0">{user.subscription.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 pb-16 lg:pb-0">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-20 bg-deep/95 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg hover:bg-glass-light">
              <Menu className="w-5 h-5 text-gray-300" />
            </button>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cosmic-400" />
              <span className="text-sm font-semibold text-white">CareerCopilot</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cosmic-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="min-h-[calc(100vh-4rem)]">
          {renderView()}
        </main>
      </div>

      {/* Mobile Bottom Navigation - Single Scrollable Row */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 glass-nav z-30">
        <div className="relative flex items-center">
          <button 
            onClick={() => scrollNav(-1)}
            className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div 
            ref={navScrollRef}
            className="flex-1 overflow-x-auto scrollbar-hide flex items-center py-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {navItems.map((item) => (
              <NavItem key={item.id} item={item} compact />
            ))}
          </div>
          <button 
            onClick={() => scrollNav(1)}
            className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </nav>
    </div>
  );
}