import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import SwapIcon from "@/assets/icons/swap.svg";

type Props = {
  disabled?: boolean;
  setSelectedInput?: React.Dispatch<React.SetStateAction<"stake" | null>>;
  selectedInput?: "stake" | null;
  stakeValue?: string;
};
const StakeInputForm = (props: Props) => {
  const { selectedInput, setSelectedInput, disabled, stakeValue } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => setSelectedInput?.("stake")}
      disabled={disabled}
      className={`bg-white/10 w-full h-20 rounded-lg ${
        selectedInput === "stake" ? "border border-text-link" : ""
      } p-3 gap-2`}
    >
      <Text
        className={`${
          selectedInput === "stake" ? "text-text-link" : "text-white/50"
        } text-xs`}
      >
        You Stake
      </Text>
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-2">
          <Image
            source={require("@/assets/images/eth.png")}
            className="w-6 h-6 mt-1"
          />
          <TextInput
            value={stakeValue}
            placeholder="0.00"
            className=" text-2xl text-white"
            editable={false} // Prevent default keyboard input
            showSoftInputOnFocus={false}
            placeholderTextColor={"#fff"}
          />
        </View>
        <Text className="text-white/50 text-2xl">ETH</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StakeInputForm;
