/**********************************************************
 * Entity Types
 **********************************************************/
export type Ingredient = {
  id: number;
  title: string;
  price: number;
};

export type Dish = {
  id: number;
  title: string;
  price: number;
  ingredients: Ingredient[];
};

export type DayMenu = {
  id: number;
  day: 'Mon' | 'Tue';
  breakfask: Dish;
  lunch: Dish;
  dinner: Dish;
};

export type WeekMenu = {
  id: number;
  price: number;
  daysMenu: DayMenu[];
};
