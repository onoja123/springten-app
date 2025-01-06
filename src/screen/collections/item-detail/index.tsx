import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { ItemDetailScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import CustomSearch from "@/components/input/CustomSearch";
import NftThumbnail from "@/components/list/NftThumbnail";
import { Image } from "react-native";
import PrimaryButton from "@/components/button/PrimaryButton";

const ItemDetailScreen = ({ navigation }: ItemDetailScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader ionicons={{ name: "arrow-back" }} title="Okubo" />
      <View className="flex-1 justify-between">
        <View>
          <Image
            source={require("@/assets/images/nft-1.png")}
            className="w-full h-96"
          />
          <View className="px-3">
            <Text className="text-white/50 text-sm font-medium py-3">
              Details
            </Text>
            <View className="border border-white/15 rounded-lg w-full">
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">By</Text>
                <Text className="text-white text-sm">
                  Guild of Guardian Heroes
                </Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Current Price</Text>
                <Text className="text-white text-sm">0.0362 ETH</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center">
                <Text className="text-white/50 text-sm">Owned By</Text>
                <Text className="text-white text-sm">You (0x742d35Cc..)</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="p-3">
          <PrimaryButton
            onPress={() => console.log("view link")}
            className="bg-primary-button"
            textClassName="text-call-action-text"
          >
            View on Opensea.io
          </PrimaryButton>
        </View>
      </View>
    </ScreenView>
  );
};

export default ItemDetailScreen;
