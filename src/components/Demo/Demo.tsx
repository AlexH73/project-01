import { useEffect, useState } from "react";
import styles from "./Demo.module.css";

export default function Demo() {
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [effect1Log, setEffect1Log] = useState<string[]>([]);
  const [effect2Log, setEffect2Log] = useState<string[]>([]);
  const [effect3Log, setEffect3Log] = useState<string[]>([]);

  // Вариант 1 - без массива зависимостей
  useEffect(() => {
    const log = `Effect 1: Выполнен (без зависимостей)`;
    setEffect1Log((prev) => [...prev.slice(-10), log]);
    console.log("Variant 1 - no array");
  });

  // Вариант 2 - с пустым массивом зависимостей
  useEffect(() => {
    const log = `Effect 2: Выполнен (пустой массив зависимостей)`;
    setEffect2Log((prev) => [...prev, log]);
    console.log("Variant 2 - empty dependencies array!");
  }, []);

  // Вариант 3 - с массивом зависимостей
  useEffect(() => {
    const log = `Effect 3: Выполнен (зависит от age: ${age})`;
    setEffect3Log((prev) => [...prev.slice(-4), log]);
    console.log("Variant 3 - with dependencies array!");
  }, [age]);

  const resetLogs = () => {
    setEffect1Log([]);
    setEffect2Log([]);
    setEffect3Log([]);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>🔄 Демонстрация useEffect</h2>
          <p className={styles.subtitle}>
            Изучение жизненного цикла компонента
          </p>

          <div className={styles.demoArea}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Age:</span>
                <span className={styles.statValue}>{age}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Weight:</span>
                <span className={styles.statValue}>{weight}</span>
              </div>
            </div>

            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={() => setAge((prev) => prev + 1)}
              >
                +1 Age
              </button>
              <button
                className={styles.button}
                onClick={() => setWeight((prev) => prev + 1)}
              >
                +1 Weight
              </button>
              <button
                className={`${styles.button} ${styles.secondary}`}
                onClick={resetLogs}
              >
                Очистить логи
              </button>
            </div>
          </div>

          <div className={styles.explanation}>
            <h3 className={styles.sectionTitle}>Жизненный цикл компонента:</h3>
            <ul className={styles.cycleList}>
              <li>1. Mount - установка (первый рендер на экране)</li>
              <li>2. Update - изменения (любые ререндеры)</li>
              <li>3. Unmount - размонтирование (когда исчезает с экрана)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.logs}>
            <div className={styles.logSection}>
              <h2 className={styles.logTitle}>
                Effect 1:{" "}
                <span className={styles.effectType}>Без зависимостей</span>
              </h2>
              <p className={styles.logDescription}>
                Выполняется при каждом рендере компонента
              </p>
              <div className={styles.logList}>
                {effect1Log.map((log, index) => (
                  <div key={index} className={styles.logItem}>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.logSection}>
            <h2 className={styles.logTitle}>
              Effect 2: <span className={styles.effectType}>Пустой массив</span>
            </h2>
            <p className={styles.logDescription}>
              Выполняется только при первом рендере (mount)
            </p>
            <div className={styles.logList}>
              {effect2Log.map((log, index) => (
                <div key={index} className={styles.logItem}>
                  {log}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.logSection}>
            <h3 className={styles.logTitle}>
              Effect 3:{" "}
              <span className={styles.effectType}>Зависит от [age]</span>
            </h3>
            <p className={styles.logDescription}>
              Выполняется при первом рендере и при изменении age
            </p>
            <div className={styles.logList}>
              {effect3Log.map((log, index) => (
                <div key={index} className={styles.logItem}>
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
