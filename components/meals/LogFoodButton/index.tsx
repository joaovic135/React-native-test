import { useCallback } from "react";
import { Alert, Pressable, Text } from "react-native";

import { styles } from "./styles";

interface LogFoodButtonProps {
  onPress?: () => void;
}

export function LogFoodButton({ onPress }: LogFoodButtonProps) {
  const s = styles();

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
      return;
    }
    Alert.alert("In development", "This feature will be available soon.");
  }, [onPress]);

  return (
    <Pressable
      onPress={handlePress}
      className={s.root()}
      accessibilityRole="button"
      accessibilityLabel="Log food"
    >
      <Text className={s.label()}>LOG FOOD</Text>
    </Pressable>
  );
}
