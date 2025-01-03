import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SvgProps } from "react-native-svg";

type Props = {
  Icon: React.FC<SvgProps>;
  swap?: boolean;
  isIcon?: boolean;
};
const TransactionDetailLine = (props: Props) => {
  const { Icon, isIcon = true, swap } = props;
  return (
    <View className="border border-white/15 rounded-lg p-3 flex-row items-center gap-3">
      {isIcon && (
        <View className="bg-white/10 rounded-full px-3 py-1">
          <Icon />
        </View>
      )}
      {swap && (
        <>
          <View className="flex-row items-center gap-3">
            <Image
              source={require("@/assets/images/eth.png")}
              className="w-6 h-6"
            />
            <Text className="text-white text-2xl font-medium">ETH</Text>
          </View>
          <Ionicons name="arrow-forward" size={16} color={"#FFFFFF80"} />
          <View className="flex-row items-center gap-3">
            <Image
              source={require("@/assets/images/btc.png")}
              className="w-6 h-6"
            />
            <Text className="text-white text-2xl font-medium">BTC</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default TransactionDetailLine;
