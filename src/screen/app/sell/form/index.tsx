import { View, Text } from "react-native";
import React, { useState } from "react";
import { FormSellScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import SwapInputForm from "@/components/input/SwapInputForm";
import CustomKeypad from "@/components/button/CustomKeyPad";
import MaxBalanceCheck from "@/components/ui/MaxBalanceCheck";
import GasFeesEstimate from "@/components/ui/GasFeesEstimate";
import PrimaryButton from "@/components/button/PrimaryButton";
import ValidQuote from "@/components/ui/ValidQuote";
import BuyInputForm from "@/components/input/BuyInputForm";
import SellInputForm from "@/components/input/SellInputForm";

const SellFormScreen = ({ navigation }: FormSellScreenProps) => {
  const [selectedInput, setSelectedInput] = useState<"sell" | null>(null); // Tracks which input is selected
  const [sellValue, setSellValue] = useState(""); // Value for "You Send"

  const handleKeyPress = (key: string) => {
    // Append or remove values based on key pressed
    if (selectedInput === "sell") {
      if (key === "⌫") {
        setSellValue((prev) => prev.slice(0, -1));
      } else {
        setSellValue((prev) => prev + key);
      }
    }
  };
  return (
    <ScreenView>
      <GlobalHeader title="Sell USDC" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between">
        <View className="p-3">
          <SellInputForm
            disabled={false}
            setSelectedInput={setSelectedInput}
            selectedInput={selectedInput}
            sellValue={sellValue}
          />
          <ValidQuote text="Enter valid amount for quote" />
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
                navigation.navigate("quote-sell-screen");
              }}
            >
              Sell
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default SellFormScreen;
