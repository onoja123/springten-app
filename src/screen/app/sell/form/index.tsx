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

const SellFormScreen = ({ navigation }: FormSellScreenProps) => {
  const [selectedInput, setSelectedInput] = useState<"buy" | null>(null); // Tracks which input is selected
  const [buyValue, setBuyValue] = useState(""); // Value for "You Send"

  const handleKeyPress = (key: string) => {
    // Append or remove values based on key pressed
    if (selectedInput === "buy") {
      if (key === "⌫") {
        setBuyValue((prev) => prev.slice(0, -1));
      } else {
        setBuyValue((prev) => prev + key);
      }
    }
  };
  return (
    <ScreenView>
      <GlobalHeader title="Sell USDC" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between">
        <View className="p-3">
          <BuyInputForm
            disabled={false}
            setSelectedInput={setSelectedInput}
            selectedInput={selectedInput}
            buyValue={buyValue}
          />
          <ValidQuote text="Enter valid amount for quote" />
        </View>
        <View>
          <MaxBalanceCheck isMax={false} />
          <CustomKeypad onPressKey={handleKeyPress} />
          <View className="p-3">
            <PrimaryButton
              className="bg-white flex-row"
              textClassName="text-black"
              onPress={() => {
                setSelectedInput(null);
                navigation.navigate("quote-screen");
              }}
            >
              Buy
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default SellFormScreen;
