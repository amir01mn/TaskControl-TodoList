import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const ThemeToggle = () => {
  const { theme, updateTheme } = useAuth();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    updateTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};

export default ThemeToggle; 