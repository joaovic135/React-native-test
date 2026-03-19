import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { View } from "react-native";

import { DashboardHeader } from "@/components/dashboard";

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <DashboardHeader />
      <MaterialTopTabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "#ffffff" },
          tabBarActiveTintColor: "#4CAF50",
          tabBarInactiveTintColor: "#9e9e9e",
          tabBarIndicatorStyle: { backgroundColor: "#4CAF50" },
          tabBarLabelStyle: { fontWeight: "700", textTransform: "uppercase" },
          tabBarShowIcon: false,
        }}
      >
        <MaterialTopTabs.Screen name="index" options={{ title: "Today" }} />
        <MaterialTopTabs.Screen name="history" options={{ title: "History" }} />
        <MaterialTopTabs.Screen name="foods" options={{ title: "Foods" }} />
        <MaterialTopTabs.Screen name="settings" options={{ title: "Settings" }} />
      </MaterialTopTabs>
    </View>
  );
}
