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
        tabBarActiveTintColor: "#8181E6",
        tabBarInactiveTintColor: "#FFFFFF80",
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
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`w-12 h-8 rounded-full items-center justify-center ${
                focused ? "bg-white/10" : ""
              }`}
            >
              <DBIcon fill={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
