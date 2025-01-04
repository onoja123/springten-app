import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import ScreenView from "@/layout/ScreenView";
import { SplashScreenProps } from "@/utils/types";
import Logo from "@/assets/icons/logo.svg";
import { HEIGHT } from "@/constants/size";

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("onboarding-screen");
    }, 2000);
  }, []);
  return (
    <ScreenView>
      <View className="justify-center items-center h-full">
        <Logo style={styles.logo} />
      </View>
    </ScreenView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logo: {
    marginBottom: HEIGHT * 0.25,
    width: 88,
    height: 88,
  },
});
