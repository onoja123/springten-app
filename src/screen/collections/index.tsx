import { View, Text } from "react-native";
import React, { useState } from "react";
import { SwapScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";


const CollectScreen = ({ navigation }: SwapScreenProps) => {
    return (
        <ScreenView>
      <GlobalHeader network between />
        <View className="flex-1 justify-between">
  
        </View>
      </ScreenView>
    );
};

export default CollectScreen;
