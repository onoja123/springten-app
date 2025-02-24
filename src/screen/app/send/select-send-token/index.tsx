import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import ScreenView from "@/layout/ScreenView";
import { SelectSendTokenScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import CustomSearch from "@/components/input/CustomSearch";
import { currencyTags } from "@/data/phase";
import { HEIGHT } from "@/constants/size";
import TokenButtonItem from "@/components/button/TokenButtonItem";

const SelectSendTokenScreen = ({ navigation }: SelectSendTokenScreenProps) => {
  const [activeTag, setActiveTag] = useState("All");

  return (
    <ScreenView>
      <GlobalHeader title={"Send"} ionicons={{ name: "close" }} />
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
          {/* {availableTokens.map((value, index) => ( */}
          <TokenButtonItem
            src={require("@/assets/images/uni.png")}
            title={"UNI"}
            content={`Uniswap`}
            //   key={index}
            onPress={() => navigation.navigate("form-send-screen")}
          />
          <TokenButtonItem
            src={require("@/assets/images/usdc.png")}
            title={"USDC"}
            content={`USD Coin`}
            //   key={index}
            onPress={() => navigation.navigate("form-send-screen")}
          />
          {/* ))} */}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default SelectSendTokenScreen;
