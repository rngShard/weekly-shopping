export enum Category {
  sweet,
  vegetarian,
  rice,
  noodles,
  meat,
  fish,
  fastfood,
  external
}

export interface Dinner {
  id: number;
  name: string;
  ingrediences: string[];
  categories: Category[];
}
