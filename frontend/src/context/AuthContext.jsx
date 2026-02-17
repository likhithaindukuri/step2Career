import { createContext, useCallback, useContext, useState } from "react";

const AUTH_KEY = "step2career_user";
const API_BASE_URL = "http://localhost:8081";

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

  const setAndPersistUser = useCallback((authResponse) => {
    const safeUser = {
      id: authResponse.id,
      name: authResponse.name,
      email: authResponse.email,
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(safeUser));
    setUser(safeUser);
  }, []);

  const login = useCallback(async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const message =
        (await response.text()) ||
        "We could not log you in. Please check your details and try again.";
      throw new Error(message);
    }

    const data = await response.json();
    setAndPersistUser(data);
  }, [setAndPersistUser]);

  const signup = useCallback(async (name, email, password) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const message =
        (await response.text()) ||
        "We could not create your account. Please try again.";
      throw new Error(message);
    }

    const data = await response.json();
    setAndPersistUser(data);
  }, [setAndPersistUser]);

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
