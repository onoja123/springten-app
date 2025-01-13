import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { CollectionItemDetailScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import CustomSearch from "@/components/input/CustomSearch";
import NftThumbnail from "@/components/list/NftThumbnail";

const CollectionItemDetailScreen = ({
  navigation,
}: CollectionItemDetailScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader ionicons={{ name: "arrow-back" }} title="CryptoPunks" />
      <ScrollView className="flex-1 px-3">
        <Text className="text-sm text-white/50 py-3">Items in collections</Text>
        <View className="flex-row gap-2 items-center flex-wrap">
          <NftThumbnail
            onPress={() =>
              navigation.navigate("collection-single-detail-screen")
            }
            item
            src={require("@/assets/images/nft-3.png")}
            title="#5252"
            price="0.362 ETH"
          />
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default CollectionItemDetailScreen;
