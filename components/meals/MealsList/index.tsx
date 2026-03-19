import { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";

import { useMeals } from "@/hooks/useMeals";
import type { Meal } from "@/types/meal";
import { AddMealTrigger } from "../AddMealTrigger";
import { LogFoodButton } from "../LogFoodButton";
import { MealCard } from "../MealCard";
import { styles } from "./styles";

const MEALS_SECTION_TITLE = "MEALS";
const LIST_CONTENT_STYLE = { paddingBottom: 32 };

function ListHeader() {
  const s = styles();
  return <Text className={s.sectionTitle()}>{MEALS_SECTION_TITLE}</Text>;
}

function ListFooter() {
  return (
    <>
      <AddMealTrigger />
      <LogFoodButton />
    </>
  );
}

function ListLoading() {
  const s = styles();
  return (
    <View className={s.root()}>
      <ListHeader />
      <View className={s.loadingContainer()}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text className={s.loadingText()}>Loading meals...</Text>
      </View>
    </View>
  );
}

function ListError({ message }: { message: string }) {
  const s = styles();
  return (
    <View className={s.root()}>
      <ListHeader />
      <Text className={s.errorText()}>{message}</Text>
    </View>
  );
}

export function MealsList() {
  const s = styles();
  const { data: meals, isLoading, isError, error, refetch, isRefetching } =
    useMeals();

  const renderItem = useCallback(({ item }: { item: Meal }) => (
    <MealCard meal={item} />
  ), []);

  const keyExtractor = useCallback((item: Meal) => item.id, []);

  if (isLoading) return <ListLoading />;
  if (isError)
    return (
      <ListError
        message={
          error instanceof Error ? error.message : "Error loading meals"
        }
      />
    );

  return (
    <View className={s.root()}>
      <FlatList
        data={meals ?? []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        contentContainerStyle={LIST_CONTENT_STYLE}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor="#4CAF50"
          />
        }
        ListEmptyComponent={
          <Text className={s.emptyText()}>No meals registered</Text>
        }
      />
    </View>
  );
}
