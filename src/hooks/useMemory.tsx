import { useState } from "react";
import type { CardType, UniqueCardType } from "../components/types/CardType";
import createMemoryDeck from "../utils/createMemoryDeck";

const useMemory = (uniqueCards: UniqueCardType[]) => {
  const [cards, setCards] = useState<CardType[]>(createMemoryDeck(uniqueCards));

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
