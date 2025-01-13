import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SingleCollectionDetailScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import CustomSearch from "@/components/input/CustomSearch";
import NftThumbnail from "@/components/list/NftThumbnail";
import { Image } from "react-native";
import PrimaryButton from "@/components/button/PrimaryButton";

const SingleCollectionDetailScreen = ({
  navigation,
}: SingleCollectionDetailScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader ionicons={{ name: "arrow-back" }} title="#5252" />
      <View className="flex-1 justify-between">
        <View>
          <Image
            source={require("@/assets/images/nft-3.png")}
            className="w-full h-96"
          />
          <View className="px-3">
            <Text className="text-white/50 text-sm font-medium py-3">
              Details
            </Text>
            <View className="border border-white/15 rounded-lg w-full">
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">By</Text>
                <Text className="text-white text-sm">CryptoPunks</Text>
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
            icon={{ name: "arrow-forward", size: 17 }}
            onPress={() => navigation.navigate("account-screen")}
            className="bg-primary-button flex-row"
            textClassName="text-call-action-text"
          >
            Set as Display Picture
          </PrimaryButton>
        </View>
      </View>
    </ScreenView>
  );
};

export default SingleCollectionDetailScreen;
