import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screen/app/home";
import { BottomTabParamList } from "@/utils/types";
import { ScreenOptions } from "@/utils/stack_options";
import { SURFACE_DEEP } from "@/constants/colors";
import DBIcon from "@/assets/icons/db.svg";
const Tab = createBottomTabNavigator<BottomTabParamList>();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...ScreenOptions,
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarStyle: {
          backgroundColor: SURFACE_DEEP,
          borderTopWidth: 0,
          height: 68,
        },
      }}
    >
      <Tab.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <DBIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
