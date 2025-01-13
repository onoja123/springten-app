import { View, Text } from "react-native";
import React from "react";
import AssetListItem from "./AssetListItem";
import { StoredCoinList } from "@/data/phase";

const AssetListContainer = () => {
  return (
    <View>
      <View className="p-3">
        <Text className="text-white text-base font-medium">Token Balance</Text>
      </View>
      <View>
        <View className="p-3">
          <Text className="text-white/50 text-sm font-medium">
            {StoredCoinList.length} Stored
          </Text>
        </View>
        {StoredCoinList.map((value, index) => (
          <AssetListItem
            isItemHere={StoredCoinList.length > 0}
            key={index}
            item={value}
            delay={index * 200}
          />
        ))}
      </View>
      <View>
        <View className="p-3">
          <Text className="text-white/50 text-sm font-medium">0 Staked</Text>
        </View>
        <AssetListItem />
      </View>
    </View>
  );
};

export default AssetListContainer;
