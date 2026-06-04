import styles from "./Card.module.css";

type CardProps = {
  onClick: () => void;
  src: string;
  alt: string;
  isFlipped: boolean;
  isMatched?: boolean;
};

const Card = ({ onClick, src, alt, isFlipped, isMatched }: CardProps) => {
  if (!isFlipped && !isMatched) {
    return (
      <div className={styles.card} onClick={onClick}>
        <img src="/cards/back.png" alt="Card back" className={styles.cardImage} />
      </div>
    );
  }

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={src} alt={alt} className={styles.cardImage} />
    </div>
  );
};

export default Card;
