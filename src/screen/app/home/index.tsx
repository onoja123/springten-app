import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { HomeScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import AssetValueContainer from "@/components/ui/AssetValueContainer";
import AssetListContainer from "@/components/list/AssetListContainer";

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <ScreenView style={{ flex: 0 }}>
      <GlobalHeader network between />
      <ScrollView className="h-full">
        <View className="p-3">
          <AssetValueContainer />
        </View>
        <AssetListContainer />
      </ScrollView>
    </ScreenView>
  );
};

export default HomeScreen;
