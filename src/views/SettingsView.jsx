import { useState } from 'react';
import {
  Settings, User, Bell, Shield, CreditCard,
  Palette, Globe, LogOut, ChevronRight, 
  Moon, Sun, Mail, Smartphone, Key
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const settingsSections = [
  {
    id: 'profile',
    label: 'Profile Settings',
    icon: User,
    items: [
      { label: 'Full Name', value: 'Alex Chen', type: 'text' },
      { label: 'Email', value: 'alex.chen@example.com', type: 'email' },
      { label: 'Phone', value: '+1 (555) 123-4567', type: 'phone' },
      { label: 'Location', value: 'San Francisco, CA', type: 'text' },
    ],
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: Bell,
    items: [
      { label: 'Interview Reminders', value: true, type: 'toggle' },
      { label: 'Job Alerts', value: true, type: 'toggle' },
      { label: 'Weekly Reports', value: false, type: 'toggle' },
      { label: 'Product Updates', value: false, type: 'toggle' },
    ],
  },
  {
    id: 'billing',
    label: 'Subscription & Billing',
    icon: CreditCard,
    items: [
      { label: 'Plan', value: 'Pro Yearly', type: 'badge' },
      { label: 'Renewal Date', value: 'Jan 15, 2027', type: 'text' },
      { label: 'Payment Method', value: 'Visa ending in 4242', type: 'text' },
    ],
  },
  {
    id: 'appearance',
    label: 'Appearance',
    icon: Palette,
    items: [
      { label: 'Theme', value: 'Dark Mode', type: 'theme' },
    ],
  },
  {
    id: 'privacy',
    label: 'Privacy & Security',
    icon: Shield,
    items: [
      { label: 'Two-Factor Auth', value: false, type: 'toggle' },
      { label: 'Data Export', value: null, type: 'action' },
      { label: 'Delete Account', value: null, type: 'action-danger' },
    ],
  },
];

export default function SettingsView() {
  const [activeSection, setActiveSection] = useState('profile');
  const { user } = useApp();

  const currentSection = settingsSections.find(s => s.id === activeSection);

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl mx-auto">
      <div className="animate-in">
        <h1 className="text-2xl sm:text-3xl font-bold">
          <span className="gradient-text">Settings</span>
        </h1>
        <p className="text-gray-400 mt-1 text-sm">Manage your account and preferences</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Sidebar Settings Nav */}
        <div className="space-y-2 animate-in animate-in-delay-1">
          {settingsSections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full p-3 rounded-xl text-left flex items-center gap-3 transition-all ${
                  activeSection === section.id
                    ? 'bg-cosmic-500/10 border border-cosmic-500/30 text-cosmic-300'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-glass-light'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{section.label}</span>
                <ChevronRight className={`w-4 h-4 ml-auto ${activeSection === section.id ? 'text-cosmic-400' : 'text-gray-600'}`} />
              </button>
            );
          })}

          <div className="pt-4 mt-4 border-t border-white/10">
            <button className="w-full p-3 rounded-xl text-left flex items-center gap-3 text-red-400 hover:bg-red-500/10 transition-all">
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Sign Out</span>
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="glass-card p-4 sm:p-6 animate-in animate-in-delay-2">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl p-2.5 bg-gradient-to-br from-cosmic-500 to-purple-500`}>
                <currentSection.icon className="w-full h-full text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-200">{currentSection.label}</h2>
                <p className="text-xs text-gray-500">Manage your {currentSection.label.toLowerCase()}</p>
              </div>
            </div>

            <div className="space-y-4">
              {currentSection.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-glass-light">
                  <span className="text-sm text-gray-300">{item.label}</span>
                  {item.type === 'toggle' && (
                    <button className={`w-10 h-6 rounded-full transition-all duration-300 ${
                      item.value ? 'bg-cosmic-500' : 'bg-gray-600'
                    }`}>
                      <div className={`w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                        item.value ? 'ml-5' : 'ml-1'
                      }`} />
                    </button>
                  )}
                  {item.type === 'text' && (
                    <span className="text-sm text-gray-500">{item.value}</span>
                  )}
                  {item.type === 'email' && (
                    <span className="text-sm text-cosmic-400">{item.value}</span>
                  )}
                  {item.type === 'badge' && (
                    <span className="badge-pro text-xs">{item.value}</span>
                  )}
                  {item.type === 'theme' && (
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg bg-cosmic-500/20 text-cosmic-300">
                        <Moon className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-glass-medium text-gray-500">
                        <Sun className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {item.type === 'action' && (
                    <button className="text-sm text-cosmic-400 hover:text-cosmic-300">Export</button>
                  )}
                  {item.type === 'action-danger' && (
                    <button className="text-sm text-red-400 hover:text-red-300">Delete</button>
                  )}
                </div>
              ))}
            </div>

            {currentSection.id === 'profile' && (
              <button className="btn-primary mt-6 text-sm">Save Changes</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}