import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import { SelectSellTokenScreenProps } from "@/utils/types";
import CustomSearch from "@/components/input/CustomSearch";
import { currencyTags } from "@/data/phase";
import { availableTokens } from "@/data/swap";
import TokenButtonItem from "@/components/button/TokenButtonItem";
import { HEIGHT } from "@/constants/size";

const SelectSellTokenScreen = ({
  route,
  navigation,
}: SelectSellTokenScreenProps) => {
  const [activeTag, setActiveTag] = useState("All");
  return (
    <ScreenView style={{ flex: 0 }}>
      <GlobalHeader title={"Sell"} ionicons={{ name: "close" }} />
      <View className="p-3">
        <CustomSearch />
        <View className="flex-row items-center gap-2 py-3">
          {currencyTags.map((value, index) => (
            <TouchableOpacity
              onPress={() => setActiveTag(value)}
              key={index}
              className={`rounded-full px-3 py-1 ${
                activeTag === value ? "bg-white" : "bg-white/10"
              }`}
            >
              <Text
                className={`${
                  activeTag === value ? "text-black" : "text-white/50"
                } font-medium text-sm`}
              >
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text className="text-white font-medium text-base p-3">
        Available Tokens
      </Text>
      <ScrollView
        contentContainerStyle={{ paddingBottom: HEIGHT * 0.4 }}
        style={{ height: HEIGHT }}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-3 gap-2">
          <TokenButtonItem
            src={require("@/assets/images/uni.png")}
            title={"UNI"}
            content={`Uniswap`}
            onPress={() => navigation.navigate("form-sell-screen")}
          />
          <TokenButtonItem
            src={require("@/assets/images/usdc.png")}
            title={"USDC"}
            content={`USD Coin`}
            onPress={() => navigation.navigate("form-sell-screen")}
          />
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default SelectSellTokenScreen;
