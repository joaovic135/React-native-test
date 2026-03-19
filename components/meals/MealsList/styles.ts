import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: "flex-1 px-6 py-6 ",
    sectionTitle: "text-sm font-extrabold text-[#1B3C35] mb-4 uppercase tracking-wider",
    listContent: "pb-8",
    emptyText: "text-sm text-[#5C847A] text-center py-8",
    errorText: "text-sm font-medium text-red-500 text-center py-8",
    loadingContainer: "flex-1 min-h-[200px] items-center justify-center gap-3 py-16",
    loadingText: "text-sm font-semibold text-[#1B3C35]",
  },
});
