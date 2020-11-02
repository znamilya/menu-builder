import type { Ingredient, Dish } from "./types";
import fakeIngredients from "./fakeData/ingredients";
import fakeDishes from "./fakeData/dishes";

export const fetchIngredients = (): Promise<Ingredient[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(fakeIngredients);
    }, 1000),
  );
};

export const fetchDishes = (): Promise<Dish[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(fakeDishes);
    }, 1000),
  );
};
