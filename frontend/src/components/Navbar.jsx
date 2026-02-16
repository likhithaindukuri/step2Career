import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProfileIcon = () => (
  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    setDropdownOpen(false);
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-gray-900">
          <img alt="Step2Career" className="h-8 w-8 object-contain" src="/step2career-logo.png" />
          Step2Career
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/tools" className="text-gray-600 hover:text-indigo-600">
            Tools
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-indigo-600">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-indigo-600">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-indigo-600">
            Contact
          </Link>
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex rounded-full p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => setDropdownOpen((o) => !o)}
                type="button"
                aria-label="Profile menu"
              >
                <ProfileIcon />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full z-50 mt-1 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  <p className="border-b border-gray-100 px-4 py-2 text-sm text-gray-500 truncate" title={user?.email}>
                    {user?.email}
                  </p>
                  <button
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    onClick={handleLogout}
                    type="button"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-lg bg-amber-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-amber-600"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
