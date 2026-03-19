import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: "bg-white p-4 rounded-2xl mb-4 flex-row justify-between items-end border border-gray-100",
    foods: "flex-1 flex-col gap-1",
    foodItem: "text-sm font-medium text-[#374151]",
    calories: "text-sm font-medium text-[#374151] ml-4",
  },
});
