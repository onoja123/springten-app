import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { OnboardingScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import Logo from "@/assets/icons/logo.svg";
import PrimaryButton from "@/components/button/PrimaryButton";
import TitleAndSubTitle from "@/components/typography/TitleAndSubTitle";

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  return (
    <ScreenView>
      <View className="justify-end h-full">
        <View className="items-center justify-center flex-1">
          <Logo style={styles.logo} />
          <TitleAndSubTitle
            subTitle="A boring Ethereum wallet built for DeFi & NFTs"
            title="Welcome to Springten"
            textClass="text-center"
          />
        </View>
        <View className="p-3 gap-6">
          <PrimaryButton
            onPress={() => navigation.navigate("auth-stack")}
            className="bg-call-action"
            textClassName="text-call-action-text"
          >
            Create a new wallet
          </PrimaryButton>
          <PrimaryButton
            onPress={() => console.log("set up button")}
            className="bg-secondary"
            textClassName="text-white"
          >
            I already have a wallet
          </PrimaryButton>
        </View>
      </View>
    </ScreenView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  logo: {
    width: 45,
    height: 45,
  },
});
