export enum Category {
  sweet,
  vegetables,
  bread,
  potatoes,
  rice,
  noodles,
  meat,
  fish,
  fastfood,
  misc
}

export interface Dinner {
  id: number;
  name: string;
  ingrediences: string[];
  categories: Category[];
}
