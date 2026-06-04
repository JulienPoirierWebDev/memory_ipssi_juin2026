import Card from "./Card";
import styles from "./Game.module.css";

const Game = () => {
  const cards = [
    { id: 1, name: "Card 1", image: "/cards/Apple.png" },
    { id: 2, name: "Card 2", image: "/cards/Banana.png" },
    { id: 3, name: "Card 3", image: "/cards/Cherry.png" },
    { id: 4, name: "Card 4", image: "/cards/Lime.png" },
    { id: 5, name: "Card 5", image: "/cards/Apple.png" },
    { id: 6, name: "Card 6", image: "/cards/Banana.png" },
    { id: 7, name: "Card 7", image: "/cards/Cherry.png" },
    { id: 8, name: "Card 8", image: "/cards/Lime.png" },
  ];

  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Card
          key={card.id}
          onClick={() => {
            console.log(`Card ${card.id} clicked`);
          }}
          src={card.image}
          alt={card.name}
        />
      ))}
    </div>
  );
};

export default Game;
