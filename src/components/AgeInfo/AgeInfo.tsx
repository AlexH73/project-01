import styles from "./AgeInfo.module.css";

interface Props {
  age: number;
  name: string;
}

function AgeInfo({ age, name }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>👤</div>
      <p className={styles.text}>
        My name is <span className={styles.highlight}>{name}</span> and I'm{" "}
        <span className={styles.highlight}>{age}</span> years old
      </p>
    </div>
  );
}

export default AgeInfo;
