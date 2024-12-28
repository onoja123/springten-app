import { View, Text } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { SURFACE_COLOR } from "@/constants/colors";
import { SplashScreenProps } from "@/utils/types";

const SplashScreen = ({}: SplashScreenProps) => {
  return (
    <ScreenView backgroundColor={SURFACE_COLOR}>
      <View className="justify-center items-center h-full">
        <Text className="text-3xl text-white">Splash Screen</Text>
      </View>
    </ScreenView>
  );
};

export default SplashScreen;
