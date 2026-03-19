import { router } from "expo-router";
import { Plus } from "lucide-react-native";
import { useCallback } from "react";
import { Pressable, Text, View } from "react-native";

import { useMealStore } from "@/store/mealStore";
import { styles } from "./styles";

export function AddMealTrigger() {
  const s = styles();
  const openAddMeal = useMealStore((state) => state.openAddMeal);

  const handlePress = useCallback(() => {
    openAddMeal();
    router.push("/add-meal");
  }, [openAddMeal]);

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel="Add meal"
    >
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
        <View className={s.icon()}>
          <Plus size={20} color="#ffffff" strokeWidth={2.5} />
        </View>
        <Text className={s.label()}>Add Meal</Text>
      </View>
    </Pressable>
  );
}
