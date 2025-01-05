import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import SwapIcon from "@/assets/icons/swap.svg";

type Props = {
  disabled?: boolean;
  setSelectedInput?: React.Dispatch<React.SetStateAction<"send" | null>>;
  selectedInput?: "send" | null;
  sendValue?: string;
};
const SendInputForm = (props: Props) => {
  const { selectedInput, setSelectedInput, disabled, sendValue } = props;
  return (
    <View
      className={`gap-1 rounded-lg ${
        selectedInput === "send" ? "border border-text-link" : ""
      } `}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setSelectedInput?.("send")}
        disabled={disabled}
        className={`bg-white/10 w-full h-24 rounded-t-lg p-3 gap-2`}
      >
        <Text
          className={`${
            selectedInput === "send" ? "text-text-link" : "text-white/50"
          } text-xs`}
        >
          Send
        </Text>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            <Image
              source={require("@/assets/images/usdc.png")}
              className="w-6 h-6 mt-1"
            />
            <TextInput
              value={sendValue}
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
      <View className={`bg-white/10 w-full h-24 rounded-b-lg p-3 gap-2`}>
        <Text className={`text-white/50 text-xs`}>To Address</Text>
        <View className="flex-row justify-between items-center">
          <TextInput
            placeholder="0.00"
            className=" text-2xl text-white"
            editable={false} // Prevent default keyboard input
            showSoftInputOnFocus={false}
            placeholderTextColor={"#fff"}
          />
          {!disabled && (
            <TouchableOpacity className="bg-secondary px-3 py-2 rounded-full">
              <Text className="text-white text-xs font-medium">Paste</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default SendInputForm;
