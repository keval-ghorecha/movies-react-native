import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Popular from "../src/screens/popular";
import Toprated from "../src/screens/Toprated";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TabNavigationHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Popular") {
            iconName = focused ? "flame" : "flame-outline";
          } else if (route.name === "Toprated") {
            iconName = focused ? "star" : "star-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "#272b2b" },
        tabBarActiveTintColor: "aliceblue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{
          headerStyle: { backgroundColor: "#272b2b" },
          headerTintColor: "aliceblue",
        }}
      />
      <Tab.Screen
        name="Toprated"
        component={Toprated}
        options={{
          headerStyle: { backgroundColor: "#272b2b" },
          headerTintColor: "aliceblue",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationHome;
