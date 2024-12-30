import { View, Text } from "react-native";
import React from "react";
import TitleAndSubTitle from "@/components/typography/TitleAndSubTitle";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import PrimaryButton from "@/components/button/PrimaryButton";
import { CreateWalletScreenProps } from "@/utils/types";

const CreateWalletScreen = ({ navigation }: CreateWalletScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader
        title="Create a Wallet"
        ionicons={{ name: "checkmark-sharp" }}
      />
      <View className="px-3 flex-1 justify-between">
        <View>
          <TitleAndSubTitle
            subTitle="You can now fully enjoy using your wallet."
            title="You are all set!"
          />
        </View>
        <View className="py-3">
          <PrimaryButton
            textClassName="text-call-action-text"
            className="bg-call-action"
            onPress={() => navigation.navigate("bottom-tab")}
          >
            Get Started
          </PrimaryButton>
        </View>
      </View>
    </ScreenView>
  );
};

export default CreateWalletScreen;
