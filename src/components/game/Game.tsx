import useMemory from "../../hooks/useMemory";
import Gameover from "../gameover/Gameover";
import type { UniqueCardType } from "../types/CardType";
import Card from "./Card";
import styles from "./Game.module.css";

const Game = () => {
  /*
   { id: 1, name: "Card 1", image: "/cards/Apple.png", isFlipped: false, isMatched: false },
    { id: 2, name: "Card 2", image: "/cards/Banana.png", isFlipped: false, isMatched: false },
    { id: 3, name: "Card 3", image: "/cards/Cherry.png", isFlipped: false, isMatched: false },
    { id: 4, name: "Card 4", image: "/cards/Lime.png", isFlipped: false, isMatched: false },
    { id: 5, name: "Card 5", image: "/cards/Apple.png", isFlipped: false, isMatched: false },
    { id: 6, name: "Card 6", image: "/cards/Banana.png", isFlipped: false, isMatched: false },
    { id: 7, name: "Card 7", image: "/cards/Cherry.png", isFlipped: false, isMatched: false },
    { id: 8, name: "Card 8", image: "/cards/Lime.png", isFlipped: false, isMatched: false },
  ]);
*/
  const uniqueCards: UniqueCardType[] = [
    { image: "/cards/Apple.png", id: 1 },
    { image: "/cards/Banana.png", id: 2 },
    { image: "/cards/Cherry.png", id: 3 },
    { image: "/cards/Lime.png", id: 4 },
  ];
  const { cards, isGameOver, handleCardClick, resetGame } = useMemory(uniqueCards);

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
