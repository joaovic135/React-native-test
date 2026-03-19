import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: "bg-white p-4 rounded-2xl mb-4 items-center justify-center border border-gray-100",
    icon: "bg-[#4dbc71] w-10 h-10 rounded-full items-center justify-center mb-2",
    label: "text-xs text-[#5C847A] font-semibold",
  },
});
