import { View, Text } from "react-native";
import React from "react";
import { ScreenOptions } from "@/utils/stack_options";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamList } from "@/utils/types";
import SetUpSecurityScreen from "@/screen/auth/set-up-security";
import SecretRecoveryPhaseScreen from "@/screen/auth/secret-recovery-phase";
import CreateWalletScreen from "@/screen/auth/create-wallet";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen
        name="set-up-security-screen"
        component={SetUpSecurityScreen}
      />
      <Stack.Screen
        name="secret-phase-screen"
        component={SecretRecoveryPhaseScreen}
      />
      <Stack.Screen
        name="create-wallet-screen"
        component={CreateWalletScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
