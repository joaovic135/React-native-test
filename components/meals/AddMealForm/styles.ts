import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: "flex-1 bg-[#ecedef] px-6 pt-6",
    title: "text-sm font-extrabold text-[#1B3C35] mb-6 uppercase tracking-wider",
    form: "gap-4",
    input: "bg-white p-4 rounded-2xl text-[#374151] text-base border border-gray-100",
    inputLabel: "text-sm font-medium text-[#1B3C35] mb-2",
    inputHint: "text-xs text-[#5C847A] mt-1 mb-2",
    error: "text-sm font-medium text-red-500 mt-1",
    foodRow: "flex-row gap-2 mb-2 items-center",
    foodInput: "flex-1 bg-white p-4 rounded-2xl text-[#374151] text-base border border-gray-100",
    addButton: "bg-[#4CAF50] w-10 h-10 rounded-full items-center justify-center",
    removeButton: "w-10 h-10 rounded-full items-center justify-center border-2 border-red-200",
    actions: "flex-row gap-3 mt-8",
    buttonCancel: "flex-1 py-3 rounded-2xl items-center justify-center border-2 border-gray-300",
    buttonCancelText: "text-[#374151] font-semibold",
    buttonSubmit: "flex-1 py-3 rounded-2xl items-center justify-center bg-[#4CAF50]",
    buttonSubmitText: "text-white font-semibold",
    buttonDisabled: "opacity-50",
  },
});
