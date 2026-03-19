import { View } from "react-native";

import { MealsList } from "@/components/meals";

export default function TodayScreen() {
  return (
    <View className="flex-1 bg-[#ecedef]">
      <MealsList />
    </View>
  );
}
