import styles from "./Goodbye.module.css";

interface Props {
  name: string;
}

function Goodbye({ name }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.wave}>👋</div>
      <p className={styles.text}>
        It was nice to see you, <span className={styles.name}>{name}</span>!
      </p>
    </div>
  );
}

export default Goodbye;
