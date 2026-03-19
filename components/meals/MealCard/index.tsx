import { memo } from "react";
import { Text, View } from "react-native";

import type { Meal } from "@/types/meal";
import { styles } from "./styles";

interface MealCardProps {
  meal: Meal;
}

function MealCardComponent({ meal }: MealCardProps) {
  const s = styles();

  return (
    <View
      className={s.root()}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <View className={s.foods()}>
        {meal.foods.map((food, index) => (
          <Text key={index} className={s.foodItem()} numberOfLines={1}>
            {food.name}
          </Text>
        ))}
      </View>
      <Text className={s.calories()}>{meal.calories} kcal</Text>
    </View>
  );
}

export const MealCard = memo(MealCardComponent);
