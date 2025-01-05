import { View, Text } from "react-native";
import React, { useState } from "react";
import { SwapScreenProps, TransactionScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import { ScrollView } from "react-native";
import CustomSearch from "@/components/input/CustomSearch";
import TradeMenuItem from "@/components/list/TradeMenuItem";
import { TransactionHistoryListData } from "@/data/phase";

const TransactionScreen = ({ navigation }: TransactionScreenProps) => {
  return (
    <ScreenView style={{ flex: 0 }}>
      <GlobalHeader network between title="Transactions" />
      <View className="px-3 pt-3">
        <CustomSearch />
      </View>
      <ScrollView className="h-full">
        <View className="px-3">
          <Text className="text-white/50 text-sm font-medium py-3">
            November
          </Text>
          <View className="gap-3">
            {TransactionHistoryListData.slice(0, 6).map((value, index) => (
              <TradeMenuItem
                key={index}
                {...value}
                onPress={() => console.log("this index was pressed", index)}
              />
            ))}
          </View>
        </View>
        <View className="px-3">
          <Text className="text-white/50 text-sm font-medium py-3">
            October
          </Text>
          <View className="gap-3">
            {TransactionHistoryListData.slice(6, 12).map((value, index) => (
              <TradeMenuItem
                key={index}
                {...value}
                onPress={() => console.log("this index was pressed", index)}
              />
            ))}
          </View>
        </View>
        {/* <AssetListContainer /> */}
      </ScrollView>
    </ScreenView>
  );
};

export default TransactionScreen;
