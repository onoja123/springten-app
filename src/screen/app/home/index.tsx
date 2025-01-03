import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { HomeScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import AssetValueContainer from "@/components/ui/AssetValueContainer";
import AssetListContainer from "@/components/list/AssetListContainer";
import { TradeMenuListData } from "@/data/phase";
import TradeMenuItem from "@/components/list/TradeMenuItem";

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <ScreenView style={{ flex: 0 }}>
      <GlobalHeader network between />
      <ScrollView className="h-full">
        <View className="p-3">
          <AssetValueContainer />
        </View>
        <AssetListContainer />
        {/* {TradeMenuListData.map((value, index) => (
          <TradeMenuItem
            key={index}
            subTitle={value.subTitle}
            title={value.title}
            Icon={value.Icon}
            // onPress={() => {
            //   bottomSheetRef.current?.close(); // Close the bottom sheet
            //   navigation.navigate("swap-stack"); // Replace with the actual target screen name
            // }}
          />
        ))} */}
      </ScrollView>
    </ScreenView>
  );
};

export default HomeScreen;
