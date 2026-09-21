import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/useTheme";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDarkMode((current) => !current)}
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
    >
      {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
    </button>
  );
};

export default ThemeToggle;