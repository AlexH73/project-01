import styles from "./Greeting.module.css";

function Greeting() {
  return (
    <div className={styles.greeting}>
      <span className={styles.wave}>👋</span>
      <p className={styles.text}>Hello, React!</p>
    </div>
  );
}

export default Greeting;
