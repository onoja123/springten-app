import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SwapStackParamList } from "@/utils/types";

type Props = {
  navigation: any;
  setSelectedInput: React.Dispatch<
    React.SetStateAction<"send" | "receive" | null>
  >;
  selectedInput: "send" | "receive" | null;
  sendValue: string;
  receiveValue: string;
  disabled?: boolean;
};
const SwapInputForm = (props: Props) => {
  const {
    navigation,
    setSelectedInput,
    receiveValue,
    selectedInput,
    sendValue,
    disabled = true,
  } = props;
  return (
    <View className="gap-1">
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setSelectedInput("send")}
        disabled={disabled}
        className={`bg-white/10 w-full ${
          selectedInput === "send" ? "border border-text-link" : ""
        } h-28 rounded-t-lg p-3 gap-2`}
      >
        <Text
          className={`${
            selectedInput === "send" ? "text-text-link" : "text-white/50"
          } text-xs`}
        >
          You Send
        </Text>
        <View className="flex-row justify-between items-center">
          <TextInput
            value={sendValue}
            placeholder="0.521"
            className=" text-2xl text-white"
            editable={false} 
            showSoftInputOnFocus={false}
            placeholderTextColor={"#fff"}
          />
          <View className="bg-white/15 p-1 h-10 rounded-full flex-row items-center justify-between gap-2">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("@/assets/images/eth.png")}
                className="w-6 h-6"
              />
              <Text className="text-white text-base">ETH</Text>
            </View>
            {!disabled && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("choose-currency-screen", {
                    title: "You Send",
                  })
                }
              >
                <Ionicons name="chevron-down" color={"#FFFFFF80"} size={16} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-white/50 text-xs">$10.21</Text>
          <Text className="text-white/50 text-xs"> 1 ETH = $3115.40</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.9}
        onPress={() => setSelectedInput("receive")}
        className={`bg-white/10 w-full ${
          selectedInput === "receive" ? "border border-text-link" : ""
        } h-28 rounded-b-lg p-3 gap-2`}
      >
        <Text
          className={`${
            selectedInput === "receive" ? "text-text-link" : "text-white/50"
          } text-xs`}
        >
          You Receive
        </Text>
        <View className="flex-row justify-between items-center">
          <TextInput
            value={receiveValue}
            placeholder="0.01813402"
            className=" text-2xl text-white"
            editable={false}
            showSoftInputOnFocus={false}
            placeholderTextColor={"#fff"}
          />
          <View className="bg-white/15 p-1 h-10 rounded-full flex-row items-center justify-between gap-2">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("@/assets/images/btc.png")}
                className="w-6 h-6"
              />
              <Text className="text-white text-base">BTC</Text>
            </View>
            {!disabled && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("choose-currency-screen", {
                    title: "You Receive",
                  })
                }
              >
                <Ionicons name="chevron-down" color={"#FFFFFF80"} size={16} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-white/50 text-xs">$10.21</Text>
          <Text className="text-white/50 text-xs">1 BTC = 91525.73</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="rounded-full bg-surface-color w-12 h-8 items-center justify-center absolute top-24 left-48">
        <Ionicons name="arrow-down" size={16} color="#FFFFFF80" />
      </TouchableOpacity>
    </View>
  );
};

export default SwapInputForm;
