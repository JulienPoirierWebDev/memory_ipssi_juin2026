import useMemory from "../../hooks/useMemory";
import Gameover from "../gameover/Gameover";
import Card from "./Card";
import styles from "./Game.module.css";

const Game = () => {
  const { cards, isGameOver, handleCardClick, resetGame } = useMemory();

  return (
    <>
      {isGameOver && <Gameover onRestart={resetGame} />}

      <div className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            src={card.image}
            alt={card.name}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
          />
        ))}
      </div>
    </>
  );
};

export default Game;
