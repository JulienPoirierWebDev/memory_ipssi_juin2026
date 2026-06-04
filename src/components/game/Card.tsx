import styles   from "./Card.module.css";

type CardProps = {
  onClick: () => void;
  src: string;
  alt: string;
};

const Card = ({ onClick, src, alt }: CardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Card;
