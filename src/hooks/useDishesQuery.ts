import { useQuery, QueryConfig } from "react-query";

import type { Dish } from "../types";
import { fetchDishes } from "../api";

const useDishesQuery = (params: QueryConfig<Dish[]> = {}) => {
  return useQuery<Dish[]>("dishes", fetchDishes, {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
    ...params,
  });
};

export default useDishesQuery;
