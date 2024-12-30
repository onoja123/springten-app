import { View, Text } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import TitleAndSubTitle from "@/components/typography/TitleAndSubTitle";
import { SetUpSecurityScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import PrimaryButton from "@/components/button/PrimaryButton";
import LineCheckBox from "@/components/ui/LineCheckBox";

const SetUpSecurityScreen = ({ navigation }: SetUpSecurityScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader title="Set up Security" ionicons={{ name: "arrow-back" }} />
      <View className="px-3 flex-1 justify-between">
        <View>
          <TitleAndSubTitle
            subTitle="Adding biometric security ensures that only you can access your wallet."
            title="Protect you wallet"
          />
          <LineCheckBox isSwitch />
        </View>

        <PrimaryButton
          textClassName="text-call-action-text"
          className="bg-primary-button"
          onPress={() => navigation.navigate("secret-phase-screen")}
        >
          Continue
        </PrimaryButton>
      </View>
    </ScreenView>
  );
};

export default SetUpSecurityScreen;
