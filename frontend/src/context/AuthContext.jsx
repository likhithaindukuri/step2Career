import { createContext, useCallback, useContext, useState } from "react";

const AUTH_KEY = "step2career_user";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(AUTH_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = useCallback((email, password) => {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      if (data.email === email && data.password === password) {
        setUser({ name: data.name, email: data.email });
        return true;
      }
    }
    return false;
  }, []);

  const signup = useCallback((name, email, password) => {
    const newUser = { name, email, password };
    localStorage.setItem(AUTH_KEY, JSON.stringify(newUser));
    setUser({ name, email });
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(AUTH_KEY);
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
