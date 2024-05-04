export interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  published_date: Date;
  price: number;
  totalInStock: number;
  totalAddedToCart: number;
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
