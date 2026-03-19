import { tv } from "tailwind-variants";

export const styles = tv({
  slots: {
    root: "gap-y-1",
    barRow: "flex-row items-center gap-2",
    header: "flex-row justify-start items-end gap-2",
    label: "text-xs font-bold text-nutr-primary",
    value: "text-[10px] font-medium text-nutr-text-muted",
    track: "flex-1 h-2 bg-[#d2eed7] rounded-full overflow-hidden",
    fill: "h-full rounded-full bg-[#4dbc71] min-w-[8px]",
  },
});
