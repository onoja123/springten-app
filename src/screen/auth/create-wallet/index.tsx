import { View, Text } from "react-native";
import React, { useState } from "react";
import TitleAndSubTitle from "@/components/typography/TitleAndSubTitle";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import PrimaryButton from "@/components/button/PrimaryButton";
import { CreateWalletScreenProps } from "@/utils/types";
import CustomSpinner from "@/components/ui/CustomSpinner";

const CreateWalletScreen = ({ navigation }: CreateWalletScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNextScreen = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("bottom-tab");
    }, 2000);
  };
  return (
    <>
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
              // onPress={() => navigation.navigate("bottom-tab")}
              onPress={handleNextScreen}
            >
              Get Started
            </PrimaryButton>
          </View>
        </View>
      </ScreenView>
      {isLoading && <CustomSpinner />}
    </>
  );
};

export default CreateWalletScreen;
