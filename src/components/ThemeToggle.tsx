"use client"

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 text-muted-foreground hover:text-foreground cursor-pointer hover:bg-secondary/60 transition-colors"
      aria-label="Changer de thème"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 stroke-[2.5]" />
      ) : (
        <Sun className="h-5 w-5 stroke-[2.5]" />
      )}
    </Button>
  );
}
