import type { Ingredient, Dish } from "./types";
import fakeIngredients from "./fakeData/ingredients";
import fakeDishes from "./fakeData/dishes";

/**
 * Fetch all ingredient
 */
export const fetchIngredients = (): Promise<Ingredient[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(fakeIngredients);
    }, 1000),
  );
};

/**
 * Fetch an ingredient by id
 *
 * @param IngredientId
 */
export const fetchIngredient = (
  ingredientId?: Ingredient["id"],
): Promise<Ingredient> => {
  if (!ingredientId) {
    return Promise.reject();
  }

  const fakeIngredient = fakeIngredients.find(({ id }) => id === ingredientId);

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(fakeIngredient);
    }, 1000),
  );
};

/**
 * Fetch all dishes
 */
export const fetchDishes = (): Promise<Dish[]> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(fakeDishes);
    }, 1000),
  );
};

/**
 * Fetch a dish by id
 *
 * @param IngredientId
 */
export const fetchDish = (dishId?: Dish["id"]): Promise<Dish> => {
  if (!dishId) {
    return Promise.reject();
  }

  const fakeDish = fakeDishes.find(({ id }) => id === dishId);

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(fakeDish);
    }, 1000),
  );
};
