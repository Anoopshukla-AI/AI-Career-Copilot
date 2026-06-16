import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { mockUser, navigationItems } from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activeView, setActiveView] = useState('dashboard');
  const [user] = useState(mockUser);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useCallback((viewId) => {
    if (navigationItems.find(n => n.id === viewId)) {
      setActiveView(viewId);
      setSidebarOpen(false);
    }
  }, []);

  const value = useMemo(() => ({
    user,
    activeView,
    setActiveView: navigate,
    navigationItems,
    sidebarOpen,
    setSidebarOpen,
    navigate,
  }), [user, activeView, navigate, sidebarOpen]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}