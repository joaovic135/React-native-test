import { Text, View } from "react-native";

import { styles } from "./styles";

type MacroItemProps = {
  label?: string;
  current: string;
  total: string;
  percentage?: number;
  variant?: "text" | "bar";
};

export function MacroItem({
  label,
  current,
  total,
  percentage = 0,
  variant = "text",
}: MacroItemProps) {
  const s = styles();
  const valueText = `${current} / ${total}`;

  if (variant === "bar") {
    return (
      <View className={s.barRow()}>
        <Text className={s.label()}>{label}</Text>
        <View className={s.track()}>
          <View
            className={s.fill()}
            style={{ width: `${percentage}%` }}
          />
        </View>
      </View>
    );
  }

  return (
    <View className={s.root()}>
      <View className={s.header()}>
        <Text className={s.label()}>{label}</Text>
        <Text className={s.value()}>{valueText}</Text>
      </View>
    </View>
  );
}
