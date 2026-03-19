import { Leaf } from "lucide-react-native";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CircularProgress } from "../CircularProgress";
import { CurvedGoalText } from "../CurvedGoalText";
import { MacroItem } from "../MacroItem";
import { styles } from "./styles";

export function DashboardHeader() {
  const s = styles();
  const insets = useSafeAreaInsets();

  return (
    <View
      className={s.container()}
      style={{ paddingTop: insets.top + 24 }}
    >
        <View className={s.header()}>
          <Text className={s.logoText()}>NutriTrack</Text>
          <Leaf color="#4dbc71" size={32} fill="#4dbc71" />
        </View>

        <View className={s.summaryContainer()}>
          <View className={s.progressCircleWrapper()}>
            <CurvedGoalText text="75% of daily goal" />
            <CircularProgress progress={20}>
              <Text className={s.kcalValue()}>1500</Text>
              <Text className={s.kcalLabel()}>kcal left</Text>
            </CircularProgress>
          </View>

          <View className={s.macrosWrapper()}>
            <MacroItem label="Protein" current="80g" total="120g" variant="text" />
            <MacroItem label="Carbs" current="200g" total="250g" variant="text" />
            <MacroItem
              label="Carbs"
              current="200g"
              total="250g"
              percentage={80}
              variant="bar"
            />
            <MacroItem
              label="Fat"
              current="50g"
              total="70g"
              percentage={71}
              variant="bar"
            />
            <View className={s.macroValueBarRow()}>
              <Text className={s.macroValueStart()}>50g / 70g</Text>
            </View>
          </View>
        </View>
    </View>
  );
}
