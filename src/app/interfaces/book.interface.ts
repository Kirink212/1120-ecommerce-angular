export interface IBook {
  id: number;
  title: string;
  author: string;
  description: string;
  published_date: Date;
  price: number;
};

type BookType = {
  id: number;
  title: string;
  author: string;
  description: string;
  published_date: Date;
  price: number;
};
type BookFantasyType = BookType & { fantasyType: "high fantasy" };
