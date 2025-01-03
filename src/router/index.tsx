import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/utils/types";
import WalkStack from "./WalkStack";
import { ScreenOptions } from "@/utils/stack_options";
import AuthStack from "./AuthStack";
import BottomTab from "./BottomTab";
import { TransactionTypeStack } from "./AppStack";

const Stack = createStackNavigator<RootStackParamList>();
const RootRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen name="walkthrough-stack" component={WalkStack} />
        <Stack.Screen name="auth-stack" component={AuthStack} />
        <Stack.Screen name="bottom-tab" component={BottomTab} />
        <Stack.Screen
          name="transaction-type-stack"
          component={TransactionTypeStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
