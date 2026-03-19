import { z } from "zod";

export const foodSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type Food = z.infer<typeof foodSchema>;

export const mealSchema = z.object({
  id: z.string(),
  foods: z.array(foodSchema).min(1, "At least one food is required"),
  calories: z.number().min(0, "Calories must be positive"),
});

export type Meal = z.infer<typeof mealSchema>;

export const mealListSchema = z.array(mealSchema);

export type MealList = z.infer<typeof mealListSchema>;
