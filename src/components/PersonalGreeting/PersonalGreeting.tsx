import { useState } from "react";
import styles from "./PersonalGreeting.module.css";

export default function PersonalGreeting() {
  const [name, setName] = useState("John Dowson");

  return (
    <div className={styles.container}>
      <h2 className={styles.greeting}>It's nice to meet you, {name}!</h2>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
