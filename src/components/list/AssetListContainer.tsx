import { View, Text } from "react-native";
import React from "react";
import AssetListItem from "./AssetListItem";

const AssetListContainer = () => {
  return (
    <View>
      <View className="p-3">
        <Text className="text-white text-base font-medium">Token Balance</Text>
      </View>
      <View>
        <View className="p-3">
          <Text className="text-white/50 text-sm font-medium">1 stored</Text>
        </View>
        <AssetListItem isItemHere />
      </View>
      <View>
        <View className="p-3">
          <Text className="text-white/50 text-sm font-medium">0 staked</Text>
        </View>
        <AssetListItem />
      </View>
    </View>
  );
};

export default AssetListContainer;
