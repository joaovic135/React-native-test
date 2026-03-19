import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import { Minus, Plus } from "lucide-react-native";

import { cn } from "@/lib/cn";
import { addMeal, type CreateMealInput } from "@/services/mealService";
import { useMealStore } from "@/store/mealStore";
import { MEALS_QUERY_KEY } from "@/hooks/useMeals";
import { styles } from "./styles";

export function AddMealForm() {
  const s = styles();
  const queryClient = useQueryClient();
  const { draft, addFood, removeFood, updateFood, updateDraft, closeAddMeal } =
    useMealStore();

  const [newFoodName, setNewFoodName] = useState("");
  const [errors, setErrors] = useState<{
    foods?: string;
    calories?: string;
  }>({});

  const mutation = useMutation({
    mutationFn: addMeal,
    onSuccess: () => {
      const meals = useMealStore.getState().getMeals();
      queryClient.setQueryData(MEALS_QUERY_KEY, meals);
      closeAddMeal();
      router.back();
    },
  });

  useEffect(() => {
    return () => closeAddMeal();
  }, [closeAddMeal]);

  const foods = draft?.foods ?? [];
  const calories = draft?.calories ? String(draft.calories) : "";

  const handleAddFood = useCallback(() => {
    const name = newFoodName.trim();
    if (!name) return;
    addFood({ name });
    setNewFoodName("");
  }, [newFoodName, addFood]);

  const handleCaloriesChange = useCallback(
    (text: string) => {
      const num = parseInt(text, 10);
      updateDraft({ calories: isNaN(num) ? 0 : num });
    },
    [updateDraft]
  );

  const validate = useCallback((): boolean => {
    const newErrors: { foods?: string; calories?: string } = {};
    const hasValidFood = foods.some((f) => f.name.trim().length > 0);
    if (!hasValidFood)
      newErrors.foods = "Add at least one food to the meal";
    const cal = parseInt(calories, 10);
    if (isNaN(cal) || cal < 0)
      newErrors.calories = "Enter a valid number of calories";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [foods, calories]);

  const handleCancel = useCallback(() => {
    closeAddMeal();
    router.back();
  }, [closeAddMeal]);

  const handleSubmit = useCallback(() => {
    if (!validate() || !draft) return;

    const validFoods = draft.foods
      .map((f) => ({ name: f.name.trim() }))
      .filter((f) => f.name.length > 0);

    if (validFoods.length === 0) {
      setErrors({ foods: "Add at least one food with a name" });
      return;
    }

    const input: CreateMealInput = {
      foods: validFoods,
      calories: draft.calories,
    };
    mutation.mutate(input);
  }, [draft, validate, mutation]);

  if (!draft) return null;

  const isSubmitting = mutation.isPending;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ScrollView
        className={s.root()}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text className={s.title()}>Add Meal</Text>

        <View className={s.form()}>
          <View>
            <Text className={s.inputLabel()}>Foods</Text>
            <Text className={s.inputHint()}>
              Add each food item. The meal total calories go below.
            </Text>

            {foods.map((food, index) => (
              <View key={index} className={s.foodRow()}>
                <TextInput
                  className={s.foodInput()}
                  value={food.name}
                  onChangeText={(text) => updateFood(index, text)}
                  placeholder={`Food ${index + 1}`}
                  placeholderTextColor="#5C847A"
                  editable={!isSubmitting}
                  autoCapitalize="words"
                  maxLength={50}
                />
                <Pressable
                  onPress={() => removeFood(index)}
                  disabled={isSubmitting}
                  className={s.removeButton()}
                  accessibilityLabel="Remove food"
                >
                  <Minus size={18} color="#dc2626" strokeWidth={2.5} />
                </Pressable>
              </View>
            ))}

            <View className={s.foodRow()}>
              <TextInput
                className={s.foodInput()}
                value={newFoodName}
                onChangeText={setNewFoodName}
                placeholder="Add a food..."
                placeholderTextColor="#5C847A"
                onSubmitEditing={handleAddFood}
                editable={!isSubmitting}
                autoCapitalize="words"
                maxLength={50}
              />
              <Pressable
                onPress={handleAddFood}
                disabled={!newFoodName.trim() || isSubmitting}
                className={cn(
                  s.addButton(),
                  (!newFoodName.trim() || isSubmitting) && s.buttonDisabled()
                )}
                accessibilityLabel="Add food"
              >
                <Plus size={18} color="#ffffff" strokeWidth={2.5} />
              </Pressable>
            </View>

            {errors.foods && (
              <Text className={s.error()}>{errors.foods}</Text>
            )}
          </View>

          <View>
            <Text className={s.inputLabel()}>Total calories (meal)</Text>
            <TextInput
              className={s.input()}
              value={calories}
              onChangeText={handleCaloriesChange}
              placeholder="e.g. 380"
              placeholderTextColor="#5C847A"
              keyboardType="numeric"
              editable={!isSubmitting}
              maxLength={5}
            />
            {errors.calories && (
              <Text className={s.error()}>{errors.calories}</Text>
            )}
          </View>
        </View>

        <View className={s.actions()}>
          <Pressable
            onPress={handleCancel}
            disabled={isSubmitting}
            className={s.buttonCancel()}
          >
            <Text className={s.buttonCancelText()}>Cancel</Text>
          </Pressable>

          <Pressable
            onPress={handleSubmit}
            disabled={isSubmitting}
            className={cn(s.buttonSubmit(), isSubmitting && s.buttonDisabled())}
          >
            {isSubmitting ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text className={s.buttonSubmitText()}>Add Meal</Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
