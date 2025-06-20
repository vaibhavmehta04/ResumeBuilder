import React, { useEffect, useState } from "react";
import { Sun, Moon, Palette } from "lucide-react";

const themes = ["light", "cupcake", "dark"];
const icons = {
  light: <Sun className="w-5 h-5" />,
  cupcake: <Palette className="w-5 h-5" />,
  dark: <Moon className="w-5 h-5" />,
};

const Navbar = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", themes[themeIndex]);
  }, []);

  const handleThemeToggle = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);

    const nextTheme = themes[nextIndex];
    document.querySelector("html").setAttribute("data-theme", nextTheme);
  };

  return (
    <div className="navbar bg-base-100 shadow mb-4 rounded-box px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Resume Builder</a>
      </div>

      <div className="flex-none">
        <button
          onClick={handleThemeToggle}
          className="btn btn-circle btn-outline transition-all duration-500 transform hover:rotate-180 active:scale-95"
        >
          <span className="transition-transform duration-300 scale-110">
            {icons[themes[themeIndex]]}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
