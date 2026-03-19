import { create } from "zustand";

import type { Food, Meal } from "@/types/meal";

const INITIAL_MEALS: Meal[] = [
  {
    id: "1",
    foods: [
      { name: "Oatmeal with berries" },
      { name: "2% Milk" },
      { name: "Almonds" },
    ],
    calories: 380,
  },
  {
    id: "2",
    foods: [
      { name: "Grilled Chicken Salad" },
      { name: "Whole Wheat Bread" },
      { name: "Olive Oil Dressing" },
    ],
    calories: 450,
  },
];

export interface DraftMeal {
  foods: Food[];
  calories: number;
}

interface MealStore {
  meals: Meal[];
  draft: DraftMeal | null;
  isAdding: boolean;
  setDraft: (draft: DraftMeal | null) => void;
  openAddMeal: () => void;
  closeAddMeal: () => void;
  updateDraft: (updates: Partial<DraftMeal>) => void;
  addFood: (food: Food) => void;
  removeFood: (index: number) => void;
  updateFood: (index: number, name: string) => void;
  clearDraft: () => void;
  addMeal: (meal: Meal) => void;
  getMeals: () => Meal[];
}

const initialDraft: DraftMeal = {
  foods: [],
  calories: 0,
};

export const useMealStore = create<MealStore>((set, get) => ({
  meals: INITIAL_MEALS,
  draft: null,
  isAdding: false,

  setDraft: (draft) => set({ draft }),

  openAddMeal: () =>
    set({ isAdding: true, draft: { ...initialDraft } }),

  closeAddMeal: () =>
    set({ isAdding: false, draft: null }),

  updateDraft: (updates) =>
    set((state) => ({
      draft: state.draft
        ? { ...state.draft, ...updates }
        : { ...initialDraft, ...updates },
    })),

  addFood: (food) =>
    set((state) => ({
      draft: state.draft
        ? { ...state.draft, foods: [...state.draft.foods, food] }
        : { ...initialDraft, foods: [food] },
    })),

  removeFood: (index) =>
    set((state) => {
      if (!state.draft) return state;
      const foods = state.draft.foods.filter((_, i) => i !== index);
      return { draft: { ...state.draft, foods } };
    }),

  updateFood: (index, name) =>
    set((state) => {
      if (!state.draft) return state;
      const foods = state.draft.foods.map((f, i) =>
        i === index ? { ...f, name } : f
      );
      return { draft: { ...state.draft, foods } };
    }),

  clearDraft: () => set({ draft: null }),

  addMeal: (meal) =>
    set((state) => ({ meals: [...state.meals, meal] })),

  getMeals: () => get().meals,
}));
