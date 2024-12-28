import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/utils/types";
import WalkStack from "./WalkStack";
import { ScreenOptions } from "@/utils/stack_options";

const Stack = createStackNavigator<RootStackParamList>();
const RootRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="walkthrough-stack" component={WalkStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
