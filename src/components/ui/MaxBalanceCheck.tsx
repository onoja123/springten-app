import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  isMax?: boolean;
};
const MaxBalanceCheck = (props: Props) => {
  const { isMax = true } = props;
  return (
    <View
      className={`flex-row items-center ${
        isMax ? "justify-between" : "gap-3"
      } p-3 bg-white/10`}
    >
      {isMax && (
        <Text className="text-white/50 text-sm">
          Balance: <Text className="text-white text-sm">1.042 ETH</Text>
        </Text>
      )}
      {isMax && (
        <TouchableOpacity className="bg-secondary w-12 h-8 items-center justify-center rounded-full">
          <Text className="text-white text-xs font-medium">Max</Text>
        </TouchableOpacity>
      )}
      {!isMax && (
        <>
          <TouchableOpacity className="bg-secondary px-3 py-2 items-center justify-center rounded-full">
            <Text className="text-white text-xs font-medium">$100</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-secondary px-3 py-2 items-center justify-center rounded-full">
            <Text className="text-white text-xs font-medium">$500</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-secondary px-3 py-2 items-center justify-center rounded-full">
            <Text className="text-white text-xs font-medium">$1000</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default MaxBalanceCheck;
