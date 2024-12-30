import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WalkthroughStackParamList } from "@/utils/types";
import SplashScreen from "@/screen/walkthrough/splash";
import { ScreenOptions } from "@/utils/stack_options";
import OnboardingScreen from "@/screen/walkthrough/onboarding";

const Stack = createStackNavigator<WalkthroughStackParamList>();
const WalkStack = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen name="splash-screen" component={SplashScreen} />
      <Stack.Screen name="onboarding-screen" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default WalkStack;
