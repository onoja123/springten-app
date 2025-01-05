import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import SwapIcon from "@/assets/icons/swap.svg";

type Props = {
  disabled?: boolean;
  setSelectedInput?: React.Dispatch<React.SetStateAction<"sell" | null>>;
  selectedInput?: "sell" | null;
  sellValue?: string;
};
const SellInputForm = (props: Props) => {
  const { selectedInput, setSelectedInput, disabled, sellValue } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => setSelectedInput?.("sell")}
      disabled={disabled}
      className={`bg-white/10 w-full h-20 rounded-lg ${
        selectedInput === "sell" ? "border border-text-link" : ""
      } p-3 gap-2`}
    >
      <Text
        className={`${
          selectedInput === "sell" ? "text-text-link" : "text-white/50"
        } text-xs`}
      >
        You Sell
      </Text>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-2">
          <Image
            source={require("@/assets/images/usdc.png")}
            className="w-6 h-6 mt-1"
          />
          <TextInput
            value={sellValue}
            placeholder="0.00"
            className=" text-2xl text-white"
            editable={false} // Prevent default keyboard input
            showSoftInputOnFocus={false}
            placeholderTextColor={"#fff"}
          />
        </View>
        <Text className="text-white/50 text-2xl">USDC</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SellInputForm;
