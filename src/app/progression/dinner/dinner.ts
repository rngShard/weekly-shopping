export enum Category {
  sweet,
  vegetarian,
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
