import { View, Text } from "react-native";
import React, { useState } from "react";
import { SwapScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";


const SettingsScreen = ({ navigation }: SwapScreenProps) => {
    return (
        <ScreenView>
      <GlobalHeader network between />
        <View className="flex-1 justify-between">
          <View className="px-3">
            <View>
                <Text className="text-white text-sm font-medium py-3">
                Notifications Setting
                </Text>
            </View>
          </View>
  
        </View>
      </ScreenView>
    );
};

export default SettingsScreen;
