import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MaxBalanceCheck = () => {
  return (
    <View className="flex-row items-center justify-between p-3 bg-white/10">
      <Text className="text-white/50 text-sm">
        Balance: <Text className="text-white text-sm">1.042 ETH</Text>
      </Text>
      <TouchableOpacity className="bg-secondary w-12 h-8 items-center justify-center rounded-full">
        <Text className="text-white text-xs font-medium">Max</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MaxBalanceCheck;
