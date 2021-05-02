export enum Category {
  sweet,
  meat,
  fish
}

export interface Dinner {
  id: number;
  name: string;
  ingrediences: string[];
  categories: Category[];
}
