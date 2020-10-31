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
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sut" | "Sun";
  breakfask: Dish;
  lunch: Dish;
  dinner: Dish;
};

export type WeekMenu = {
  id: number;
  price: number;
  daysMenu: DayMenu[];
};
