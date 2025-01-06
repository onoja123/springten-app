import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  FormScreenProps,
  FormSendScreenProps,
  SwapScreenProps,
} from "@/utils/types";
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

const FormSendScreen = ({ navigation }: FormSendScreenProps) => {
  const [selectedInput, setSelectedInput] = useState<"send" | null>(null);
  const [sendValue, setSendValue] = useState(""); 

  const handleKeyPress = (key: string) => {
    if (selectedInput === "send") {
      if (key === "⌫") {
        setSendValue((prev) => prev.slice(0, -1));
      } else {
        setSendValue((prev) => prev + key);
      }
    }
  };
  return (
    <ScreenView>
      <GlobalHeader title="Send USDC" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between">
        <View className="p-3">
          <SendInputForm
            disabled={false}
            setSelectedInput={setSelectedInput}
            selectedInput={selectedInput}
            sendValue={sendValue}
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
                navigation.navigate("quote-send-screen");
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

export default FormSendScreen;
