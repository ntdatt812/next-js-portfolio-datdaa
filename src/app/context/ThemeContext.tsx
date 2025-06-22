"use client";
import { createContext, useContext, useEffect, useState } from "react";

type TTheme = "light" | "dark";
interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
  setTheme: (theme: TTheme) => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>("light");
  const [mounted, setMounted] = useState<boolean>(false);

  //update the theme
  const setThemePortfolio = (newTheme: TTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  //toggle the theme
  const toggleTheme = () => {
    setThemePortfolio(theme === "light" ? "dark" : "light");
  };

  //initialize theme
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as TTheme) || null;
    const systemTheme = window.matchMedia("prefers-color-scheme: dark").matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  //prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//use custom hook to use the ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
