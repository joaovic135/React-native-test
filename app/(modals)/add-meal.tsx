import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import { AddMealForm } from "@/components/meals/AddMealForm";

export const options = {
  title: "Add Meal",
  headerStyle: { backgroundColor: "#ecedef" },
  headerTintColor: "#1B3C35",
};

export default function AddMealScreen() {
  return (
    <>
      <AddMealForm />
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
    </>
  );
}
