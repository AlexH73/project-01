import styles from "./DogCard.module.css";

interface Props {
  name: string;
}

function DogCard({ name }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.dogIcon}>🐕</div>
      <p className={styles.text}>
        I love my dog <span className={styles.dogName}>{name}</span>!
      </p>
    </div>
  );
}

export default DogCard;
