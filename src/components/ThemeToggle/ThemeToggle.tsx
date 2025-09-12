import { useTheme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className={styles.icon}>{theme === "light" ? "🌙" : "☀️"}</span>
      <span className={styles.text}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
