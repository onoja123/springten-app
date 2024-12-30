import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AssetValueContainer = () => {
  return (
    <View className="border border-white/15 rounded-lg h-52">
      <View className="p-3 border-b border-b-white/15">
        <Text className="text-white/50 text-sm">Total Asset Value</Text>
        <Text className="text-white text-4xl font-medium">$0.000</Text>
        <Text className={`text-white/50 text-sm`}>0.000%</Text>
      </View>
      <View className="flex-row items-center justify-between p-3 border-b border-b-white/15">
        <View className="flex-row items-center gap-2">
          <Text className="text-base text-white">Address</Text>
          <View className="flex-row items-center gap-1 p-1 bg-white/10 rounded-full">
            <Image
              source={require("@/assets/images/eth.png")}
              className="w-4 h-4"
              resizeMode="cover"
            />
            <Text className="text-xs text-text-link">0x71C7656EC7ab88..</Text>
          </View>
        </View>
      </View>
      <View className="p-3 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Text className="text-base text-white">user09087021</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="chevron-forward" size={24} color={"#FFFFFF80"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AssetValueContainer;
