import { useState } from "react";
import styles from "./SpaceMissionForm.module.css";

const SpaceMissionForm = () => {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("Mars");
  const planets = ["Mars", "Venus", "Jupiter", "Saturn", "Neptune", "Mercury"];

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePlanetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlanet(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>🚀 Space Mission Registration</h2>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Astronaut Name:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="planet" className={styles.label}>
              Destination Planet:
            </label>
            <select
              id="planet"
              value={planet}
              onChange={handlePlanetChange}
              className={styles.select}
            >
              {planets.map((planetOption) => (
                <option key={planetOption} value={planetOption}>
                  {planetOption}
                </option>
              ))}
            </select>
          </div>
        </form>

        <div className={styles.result}>
          {name ? (
            <p className={styles.missionText}>
              🧑‍🚀 Astronaut <span className={styles.highlight}>{name}</span> is
              headed to <span className={styles.highlight}>{planet}</span>!
            </p>
          ) : (
            <p className={styles.prompt}>
              Please enter your name to begin your mission.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpaceMissionForm;
