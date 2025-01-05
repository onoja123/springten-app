import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import SwapIcon from "@/assets/icons/swap.svg";

type Props = {
  disabled?: boolean;
  setSelectedInput?: React.Dispatch<React.SetStateAction<"buy" | null>>;
  selectedInput?: "buy" | null;
  buyValue?: string;
};
const BuyInputForm = (props: Props) => {
  const { selectedInput, setSelectedInput, disabled, buyValue } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => setSelectedInput?.("buy")}
      disabled={disabled}
      className={`bg-white/10 w-full ${
        selectedInput === "buy" ? "border border-text-link" : ""
      } h-32 rounded-lg p-3 gap-2`}
    >
      <Text
        className={`${
          selectedInput === "buy" ? "text-text-link" : "text-white/50"
        } text-xs`}
      >
        Buy
      </Text>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-1">
          <Text className="text-2xl text-white/50 pt-1">$</Text>
          <TextInput
            value={buyValue}
            placeholder="0.521"
            className=" text-2xl text-white"
            editable={false} // Prevent default keyboard input
            showSoftInputOnFocus={false}
            placeholderTextColor={"#fff"}
          />
        </View>
        {!disabled && (
          <TouchableOpacity className="bg-white/15 px-4 py-1 h-10 rounded-full flex-row items-center justify-between">
            <View className="flex-row items-center gap-2 rotate-90">
              <SwapIcon />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-row items-center gap-2">
        <Image
          source={require("@/assets/images/link.png")}
          className="w-6 h-6"
        />
        <Text className="text-white/50 text-xs">0.000 LINK</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BuyInputForm;
