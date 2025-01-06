import { View, Text } from "react-native";
import React, { useState } from "react";
import { SwapScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import SwapInputForm from "@/components/input/SwapInputForm";
import CustomKeypad from "@/components/button/CustomKeyPad";
import MaxBalanceCheck from "@/components/ui/MaxBalanceCheck";
import GasFeesEstimate from "@/components/ui/GasFeesEstimate";
import PrimaryButton from "@/components/button/PrimaryButton";

const SwapCoinScreen = ({ navigation }: SwapScreenProps) => {
  const [selectedInput, setSelectedInput] = useState<"send" | "receive" | null>(
    null
  ); 
  const [sendValue, setSendValue] = useState(""); 
  const [receiveValue, setReceiveValue] = useState(""); 

  const handleKeyPress = (key: string) => {
    if (selectedInput === "send") {
      if (key === "⌫") {
        setSendValue((prev) => prev.slice(0, -1));
      } else {
        setSendValue((prev) => prev + key);
      }
    } else if (selectedInput === "receive") {
      if (key === "⌫") {
        setReceiveValue((prev) => prev.slice(0, -1));
      } else {
        setReceiveValue((prev) => prev + key);
      }
    }
  };
  return (
    <ScreenView>
      <GlobalHeader between title="Swap" ionicons={{ name: "close" }} gas />
      <View className="flex-1 justify-between">
        <View className="p-3">
          <SwapInputForm
            disabled={false}
            setSelectedInput={setSelectedInput}
            selectedInput={selectedInput}
            sendValue={sendValue}
            receiveValue={receiveValue}
            navigation={navigation}
          />
          <GasFeesEstimate />
        </View>
        <View>
          <MaxBalanceCheck />
          <CustomKeypad onPressKey={handleKeyPress} />
          <View className="p-3">
            <PrimaryButton
              icon={{ name: "arrow-forward", size: 16 }}
              className="bg-white flex-row"
              textClassName="text-black"
              onPress={() => navigation.navigate("review-order-screen")}
            >
              Continue
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default SwapCoinScreen;
