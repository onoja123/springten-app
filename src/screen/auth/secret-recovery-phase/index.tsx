import { View, Text } from "react-native";
import React from "react";
import { SecretRecoveryPhaseScreenProps } from "@/utils/types";
import TitleAndSubTitle from "@/components/typography/TitleAndSubTitle";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import PrimaryButton from "@/components/button/PrimaryButton";
import { PhaseList } from "@/data/phase";

const SecretRecoveryPhaseScreen = ({
  navigation,
}: SecretRecoveryPhaseScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader
        title="Secret Recovery Phrase"
        ionicons={{ name: "arrow-back" }}
      />
      <View className="px-3 flex-1 justify-between">
        <View>
          <TitleAndSubTitle
            subTitle="This is the only way to recover your account. Please store it safely."
            title="Protect you wallet"
          />
        </View>
        <View className="border border-white/15 rounded-lg h-fit">
          {PhaseList.map((value, index) => (
            <View
              key={index}
              className={`flex-row items-center justify-between p-3 py-4 ${
                index === PhaseList.length - 1
                  ? ""
                  : "border-b border-b-white/15"
              }`}
            >
              <Text className="text-white/50 text-sm">{value.id}</Text>
              <Text className="text-white text-sm">{value.name}</Text>
            </View>
          ))}
        </View>
        <View className="py-3">
          <PrimaryButton
            textClassName="text-call-action-text"
            className="bg-primary-button"
            onPress={() => navigation.navigate("create-wallet-screen")}
          >
            Ok, I saved it somewhere safe
          </PrimaryButton>
        </View>
      </View>
    </ScreenView>
  );
};

export default SecretRecoveryPhaseScreen;
