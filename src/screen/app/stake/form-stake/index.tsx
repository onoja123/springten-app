import { View, Text } from "react-native";
import React, { useState } from "react";
import { FormSkateScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import SwapInputForm from "@/components/input/SwapInputForm";
import CustomKeypad from "@/components/button/CustomKeyPad";
import MaxBalanceCheck from "@/components/ui/MaxBalanceCheck";
import GasFeesEstimate from "@/components/ui/GasFeesEstimate";
import PrimaryButton from "@/components/button/PrimaryButton";
import ValidQuote from "@/components/ui/ValidQuote";
import BuyInputForm from "@/components/input/BuyInputForm";
import SendInputForm from "@/components/input/SendInputForm";
import StakeInputForm from "@/components/input/StakeInputForm";

const FormStakeScreen = ({ navigation }: FormSkateScreenProps) => {
  const [selectedInput, setSelectedInput] = useState<"stake" | null>(null);
  const [stakeValue, setStakeValue] = useState("");

  const handleKeyPress = (key: string) => {
    if (selectedInput === "stake") {
      if (key === "⌫") {
        setStakeValue((prev) => prev.slice(0, -1));
      } else {
        setStakeValue((prev) => prev + key);
      }
    }
  };
  return (
    <ScreenView>
      <GlobalHeader title="Stake ETH" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between">
        <View className="p-3 gap-3">
          <StakeInputForm
            disabled={false}
            setSelectedInput={setSelectedInput}
            selectedInput={selectedInput}
            stakeValue={stakeValue}
          />
          <View className="border border-white/15 rounded-lg w-full">
            <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
              <Text className="text-white/50 text-sm">Estimated APR</Text>
              <Text className="text-white text-sm">3.12%</Text>
            </View>
            <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
              <Text className="text-white/50 text-sm">Minimum Staking</Text>
              <Text className="text-white text-sm">0.004 ETH</Text>
            </View>
          </View>
        </View>
        <View>
          <MaxBalanceCheck isMax />
          <CustomKeypad onPressKey={handleKeyPress} />
          <View className="p-3">
            <PrimaryButton
              className="bg-white flex-row"
              textClassName="text-black"
              onPress={() => {
                setSelectedInput(null);
                navigation.navigate("choose-term-stake-screen");
              }}
            >
              Continue
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default FormStakeScreen;
