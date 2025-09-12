import { useTheme } from "../../hooks/useTheme";
import styles from "./Logo.module.css";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.logo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={styles.icon}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor={theme === "light" ? "#2563eb" : "#60a5fa"}
            />
            <stop
              offset="100%"
              stopColor={theme === "light" ? "#1d4ed8" : "#3b82f6"}
            />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              stopColor={theme === "light" ? "#22c55e" : "#4ade80"}
            />
            <stop
              offset="100%"
              stopColor={theme === "light" ? "#16a34a" : "#22c55e"}
            />
          </linearGradient>
        </defs>

        {/* Внешнее кольцо */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Ядро атома */}
        <circle cx="50" cy="50" r="8" fill="url(#grad1)" />

        {/* Орбиты электронов */}
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="15"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          transform="rotate(30 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="25"
          ry="30"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="1.5"
          strokeDasharray="3,3"
          transform="rotate(60 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="15"
          ry="35"
          fill="none"
          stroke="url(#grad2)"
          strokeWidth="1.5"
          strokeDasharray="2,2"
          transform="rotate(120 50 50)"
        />

        {/* Электроны */}
        <circle cx="85" cy="50" r="4" fill="url(#grad2)" />
        <circle cx="50" cy="80" r="3" fill="url(#grad2)" />
        <circle cx="30" cy="30" r="3" fill="url(#grad2)" />
      </svg>
      <div className={styles.text}>
        <span className={styles.brand}>Учебный React Проект</span>
        <span className={styles.sublabel}>Изучаем React и Vite вместе!</span>
      </div>
    </div>
  );
};

export default Logo;
