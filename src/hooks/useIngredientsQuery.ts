import { useQuery, QueryConfig } from "react-query";

import type { Ingredient } from "../types";
import { fetchIngredients } from "../api";

const useIngredientsQuery = (params: QueryConfig<Ingredient[]> = {}) => {
  return useQuery<Ingredient[]>("ingredients", fetchIngredients, {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
    ...params,
  });
};

export default useIngredientsQuery;
