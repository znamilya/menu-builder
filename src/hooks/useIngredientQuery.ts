import { useQuery, QueryConfig } from "react-query";

import type { Ingredient } from "../types";
import { fetchIngredient } from "../api";

const useIngredientQuery = (
  ingredientId?: Ingredient["id"],
  params: QueryConfig<Ingredient> = {},
) => {
  return useQuery<Ingredient>(
    ["ingredients", ingredientId],
    () => fetchIngredient(ingredientId),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      ...params,
    },
  );
};

export default useIngredientQuery;
