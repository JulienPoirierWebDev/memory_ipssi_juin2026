import { useState } from "react";

type CardType = {
  id: number;
  name: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const useMemory = () => {
  // State to hold the cards and their flipped status
  const [cards, setCards] = useState<CardType[]>([
    { id: 1, name: "Card 1", image: "/cards/Apple.png", isFlipped: false, isMatched: false },
    { id: 2, name: "Card 2", image: "/cards/Banana.png", isFlipped: false, isMatched: false },
    { id: 3, name: "Card 3", image: "/cards/Cherry.png", isFlipped: false, isMatched: false },
    { id: 4, name: "Card 4", image: "/cards/Lime.png", isFlipped: false, isMatched: false },
    { id: 5, name: "Card 5", image: "/cards/Apple.png", isFlipped: false, isMatched: false },
    { id: 6, name: "Card 6", image: "/cards/Banana.png", isFlipped: false, isMatched: false },
    { id: 7, name: "Card 7", image: "/cards/Cherry.png", isFlipped: false, isMatched: false },
    { id: 8, name: "Card 8", image: "/cards/Lime.png", isFlipped: false, isMatched: false },
  ]);

  const isGameOver = cards.every((card) => card.isMatched);

  const handleCardClick = (cardId: number) => {
    const numberOfFlippedCards = cards.filter((card) => card.isFlipped).length;

    if (numberOfFlippedCards >= 2) {
      return;
    }

    const actualCardClicked = cards.find((card) => card.id === cardId);

    if (actualCardClicked?.isFlipped || actualCardClicked?.isMatched) {
      return;
    }

    const flippedCards = cards.filter((card) => card.isFlipped);

    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, isFlipped: true };
      }
      return card;
    });

    setCards(updatedCards);

    if (flippedCards.length === 1) {
      const firstFlippedCard = flippedCards[0];
      const secondFlippedCard = actualCardClicked;

      if (firstFlippedCard?.image === secondFlippedCard?.image) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.id === firstFlippedCard.id || card.id === secondFlippedCard?.id) {
              return { ...card, isMatched: true, isFlipped: false };
            }
            return card;
          }),
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => {
              if (card.id === firstFlippedCard.id || card.id === secondFlippedCard?.id) {
                return { ...card, isFlipped: false };
              }
              return card;
            }),
          );
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        isFlipped: false,
        isMatched: false,
      })),
    );
  };

  return { cards, isGameOver, handleCardClick, resetGame };
};

export default useMemory;
