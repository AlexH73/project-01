import { useState, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import styles from "./GenderPredictor.module.css";

interface GenderData {
  name: string;
  gender: "male" | "female";
  country: string;
  probability: number;
  remaining_credits: number;
}

export default function GenderPredictor() {
  const [name, setName] = useState("");
  const [genderData, setGenderData] = useState<GenderData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [remainingCredits, setRemainingCredits] = useState<number | null>(null);
  const [autoDetect, setAutoDetect] = useState(false);
  const { theme } = useTheme();

  const API_URL = "https://api.genderapi.io/api/";

  const capitalizeName = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // useEffect для автоматического определения при изменении имени
  useEffect(() => {
    if (!autoDetect || !name.trim() || name.length < 2) return;

    const timer = setTimeout(() => {
      fetchGender();
    }, 800); // Задержка 800мс для уменьшения количества запросов

    return () => clearTimeout(timer);
  }, [name, autoDetect]);

  // useEffect для сброса ошибок при изменении темы
  useEffect(() => {
    setError(""); 
  }, [theme]);

  const fetchGender = async () => {
    setIsLoading(true);
    setError("");
    setGenderData(null);

    try {
      const response = await fetch(
        `${API_URL}?name=${encodeURIComponent(name)}`
      );

      if (!response.ok) {
        if (remainingCredits === 0 || null) {
          throw new Error("Слишком много запросов. Попробуйте позже.");
        }
        throw new Error("Ошибка при получении данных");
      }

      const data = await response.json();

      if (data.gender === null) {
        setError("Не удалось определить пол для этого имени");
        return;
      }

      setGenderData(data);
      setRemainingCredits(data.remaining_credits);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (!name.trim()) {
      setError("Пожалуйста, введите имя");
      return;
    }

    if (name.length < 2) {
      setError("Имя должно содержать минимум 2 символа");
      return;
    }

    fetchGender();
  };

  const getGenderTranslation = (gender: string) => {
    return gender === "male" ? "мужской" : "женский";
  };

  const getCountryName = (countryCode: string) => {
    const countryNames: Record<string, string> = {
      US: "США",
      RU: "Россия",
      DE: "Германия",
      FR: "Франция",
      GB: "Великобритания",
      CN: "Китай",
      JP: "Япония",
      BR: "Бразилия",
      IN: "Индия",
      IT: "Италия",
      ES: "Испания",
      // другие страны по необходимости
    };

    return countryNames[countryCode] || countryCode;
  };

  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.darkTheme : ""
      }`}
    >
      <div className={styles.card}>
        <h2 className={styles.title}>👤 Определитель пола по имени</h2>
        <p className={styles.subtitle}>Узнайте вероятный пол по имени</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nameInput" className={styles.label}>
              Введите имя:
            </label>
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="Введите имя..."
              className={styles.input}
              disabled={isLoading}
            />
            {error && <p className={styles.errorText}>{error}</p>}
          </div>

          <div className={styles.autoDetect}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={autoDetect}
                onChange={(e) => setAutoDetect(e.target.checked)}
                className={styles.checkbox}
              />
              Автоматическое определение при вводе
            </label>
          </div>

          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? "Определение..." : "Определить пол"}
          </button>
        </form>

        {isLoading && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Определение пола...</p>
          </div>
        )}

        {genderData && (
          <div className={styles.results}>
            <h3 className={styles.resultsTitle}>
              Результаты для "{capitalizeName(genderData.name)}":
            </h3>
            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Имя:</span>
                <span className={styles.resultValue}>
                  {capitalizeName(genderData.name)}
                </span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Пол:</span>
                <span className={styles.resultValue}>
                  {getGenderTranslation(genderData.gender)}
                </span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Страна:</span>
                <span className={styles.resultValue}>
                  {getCountryName(genderData.country)}
                </span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Вероятность:</span>
                <span className={styles.resultValue}>
                  {genderData.probability}%
                </span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Осталось запросов:</span>
                <span className={styles.resultValue}>
                  {genderData.remaining_credits}
                </span>
              </div>
            </div>
          </div>
        )}

        {remainingCredits !== null && (
          <div className={styles.credits}>
            <p>Остаток кредитов: {remainingCredits}</p>
          </div>
        )}
      </div>
    </div>
  );
}
