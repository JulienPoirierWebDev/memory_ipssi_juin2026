export type CardType = {
  id: number;
  name: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
};

export type UniqueCardType = Omit<CardType, "isFlipped" | "isMatched" | "name">;
