import type { CardType, UniqueCardType } from "../components/types/CardType";

const createMemoryDeck = (uniqueCards: UniqueCardType[]): CardType[] => {
  const duplicatedCards = uniqueCards.flatMap((card) => [
    {
      ...card,
      id: card.id * 2 - 1,
      isFlipped: false,
      isMatched: false,
      name: `Card ${card.id * 2 - 1}`,
    },
    { ...card, id: card.id * 2, isFlipped: false, isMatched: false, name: `Card ${card.id * 2}` },
  ]);

  duplicatedCards.sort(() => Math.random() - 0.5);

  return duplicatedCards;
};

export default createMemoryDeck;
