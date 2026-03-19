import type { Meal } from "@/types/meal";
import { mealListSchema } from "@/types/meal";
import { useMealStore } from "@/store/mealStore";

const DELAY_MS = 2000;
const ADD_DELAY_MS = 500;

const FAIL_CHANCE = 0;

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, DELAY_MS));

  if (Math.random() < FAIL_CHANCE) {
    throw new Error("Failed to load meals. Please try again.");
  }

  const meals = useMealStore.getState().getMeals();
  const parsed = mealListSchema.safeParse(meals);
  if (!parsed.success) {
    throw new Error("Invalid meal data", { cause: parsed.error });
  }

  return parsed.data;
}

export type CreateMealInput = Omit<Meal, "id">;

export async function addMeal(input: CreateMealInput): Promise<Meal> {
  await new Promise((resolve) => setTimeout(resolve, ADD_DELAY_MS));

  const newMeal: Meal = {
    ...input,
    id: String(Date.now()),
  };

  useMealStore.getState().addMeal(newMeal);
  return newMeal;
}
