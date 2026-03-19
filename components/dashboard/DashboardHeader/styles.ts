import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    container: "bg-[#eaf6e8] p-6 pt-12 rounded-b-[40px]",
    header: "flex-row justify-center items-center mb-8 gap-2",
    logoText: "text-4xl font-extrabold text-[#1B3C35]",
    summaryContainer: "flex-row justify-between items-center mb-6",
    progressCircleWrapper: "items-center",
    goalText: "text-[10px] text-[#2D5A50] font-semibold mb-1",
    kcalValue: "text-2xl font-bold text-[#1B3C35]",
    kcalLabel: "text-[10px] text-[#5C847A] font-medium",
    macrosWrapper: "flex-1 ml-6 gap-y-2",
    macroValueBarRow: "flex-row items-center gap-2",
    macroValueStart: "text-[10px] text-[#5C847A] font-medium pl-7",
  },
});
