import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.counter}>
      <h2 className={styles.value}>{counter}</h2>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +1
        </button>
        <button
          className={styles.button}
          onClick={() => setCounter((prev) => prev - 1)}
        >
          -1
        </button>
        <button className={styles.button} onClick={() => setCounter(0)}>
          Reset
        </button>
        <button
          className={styles.button}
          onClick={() => setCounter((prev) => prev - 2)}
        >
          -2
        </button>
      </div>
    </div>
  );
}
