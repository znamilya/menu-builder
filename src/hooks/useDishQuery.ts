import { useQuery, QueryConfig } from "react-query";

import type { Dish } from "../types";
import { fetchDish } from "../api";

const useDishQuery = (dishId?: Dish["id"], params: QueryConfig<Dish> = {}) => {
  return useQuery<Dish>(["dishes", dishId], () => fetchDish(dishId), {
    refetchOnWindowFocus: false,
    cacheTime: Infinity,
    ...params,
  });
};

export default useDishQuery;
