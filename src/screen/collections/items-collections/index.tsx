import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { ItemCollectionScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import CustomSearch from "@/components/input/CustomSearch";
import NftThumbnail from "@/components/list/NftThumbnail";

const ItemsCollectionScreen = ({ navigation }: ItemCollectionScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader
        ionicons={{ name: "arrow-back" }}
        title="Guild of Guardian Heroes"
      />
      <ScrollView className="flex-1 px-3">
        <Text className="text-sm text-white/50 py-3">Items in collections</Text>
        <View className="flex-row gap-2 items-center flex-wrap">
          <NftThumbnail
            onPress={() => navigation.navigate("item-collection-screen")}
            item
            src={require("@/assets/images/nft-1.png")}
            title="Okubo"
            price="0.362 ETH"
          />
          <NftThumbnail
            onPress={() => navigation.navigate("item-collection-screen")}
            item
            src={require("@/assets/images/item-1.png")}
            title="Toktun"
            price="0.362 ETH"
          />
          <NftThumbnail
            onPress={() => navigation.navigate("item-collection-screen")}
            item
            src={require("@/assets/images/item-2.png")}
            title="Huurk"
            price="0.362 ETH"
          />
          <NftThumbnail
            onPress={() => navigation.navigate("item-collection-screen")}
            item
            src={require("@/assets/images/item-3.png")}
            title="Ferulia"
            price="0.362 ETH"
          />
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default ItemsCollectionScreen;
