import { useEffect, useState } from "react";
import styles from "./Nationality.module.css";

type Country = {
  country_id: string;
  probability: number;
};

export default function Nationality() {
  const BASE_URL = "https://api.nationalize.io/?name=";

  const [countries, setCountries] = useState<Country[]>([]);
  const [name, setName] = useState("jack");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchNationality(name: string) {
    if (!name.trim()) return;

    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch(BASE_URL + name);
      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Too many requests. Please try again later.");
        }
        throw new Error("Failed to fetch data");
      }
      const obj = await res.json();
      const { country } = obj;
      setCountries(country || []);

      if (!country || country.length === 0) {
        setMessage("No data found for this name.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchNationality(name);
  }, [name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchNationality(name);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>🌍 Nationality Predictor</h2>
        <p className={styles.subtitle}>
          Discover the probable nationality of a name
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nameInput" className={styles.label}>
              Enter a name:
            </label>
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name..."
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Check Nationality"}
          </button>
        </form>

        {isLoading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Analyzing name...</p>
          </div>
        ) : message ? (
          <div className={styles.message}>
            <p>{message}</p>
          </div>
        ) : countries.length > 0 ? (
          <div className={styles.results}>
            <h3 className={styles.resultsTitle}>
              Probable nationalities for "{name}":
            </h3>
            <ul className={styles.countryList}>
              {countries.map((c) => (
                <li key={c.country_id} className={styles.countryItem}>
                  <span className={styles.flag}>
                    {getFlagEmoji(c.country_id)}
                  </span>
                  <div className={styles.countryInfo}>
                    <span className={styles.countryName}>
                      {getCountryName(c.country_id)}
                    </span>
                    <span className={styles.probability}>
                      {(c.probability * 100).toFixed(1)}% probability
                    </span>
                  </div>
                  <div className={styles.probabilityBar}>
                    <div
                      className={styles.probabilityFill}
                      style={{ width: `${c.probability * 100}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

// Функция для получения эмодзи флага по коду страны
function getFlagEmoji(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

// Функция для получения полного названия страны по коду
function getCountryName(countryCode: string) {
  const countryNames: Record<string, string> = {
    US: "United States",
    GB: "United Kingdom",
    DE: "Germany",
    FR: "France",
    IT: "Italy",
    ES: "Spain",
    RU: "Russia",
    JP: "Japan",
    CN: "China",
    IN: "India",
    BR: "Brazil",
    AU: "Australia",
    CA: "Canada",
    // Добавьте другие страны по необходимости
  };

  return countryNames[countryCode] || countryCode;
}
