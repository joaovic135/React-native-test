import { useQuery } from "@tanstack/react-query";

import { getMeals } from "@/services/mealService";

export const MEALS_QUERY_KEY = ["meals"] as const;

export function useMeals() {
  return useQuery({
    queryKey: MEALS_QUERY_KEY,
    queryFn: getMeals,
  });
}
