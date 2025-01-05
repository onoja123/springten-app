import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import ScreenView from "@/layout/ScreenView";
import {
  SelectSendTokenScreenProps,
  SelectStakeTokenScreenProps,
} from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import CustomSearch from "@/components/input/CustomSearch";
import { currencyTags } from "@/data/phase";
import { HEIGHT } from "@/constants/size";
import TokenButtonItem from "@/components/button/TokenButtonItem";

const SelectStakeTokenScreen = ({
  navigation,
}: SelectStakeTokenScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader title={"Stake"} ionicons={{ name: "close" }} />
      <View className="p-3">
        <CustomSearch />
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
            src={require("@/assets/images/eth.png")}
            title={"ETH"}
            content={`Ethereum`}
            //   key={index}
            onPress={() => navigation.navigate("form-stake-screen")}
          />
          {/* ))} */}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default SelectStakeTokenScreen;
