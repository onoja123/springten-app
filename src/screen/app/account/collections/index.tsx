import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { ChooseDpCollectionScreenProps, SwapScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import CustomSearch from "@/components/input/CustomSearch";
import NftThumbnail from "@/components/list/NftThumbnail";

const ChooseDpCollectionScreen = ({
  navigation,
}: ChooseDpCollectionScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader
        title="Choose from Collections"
        ionicons={{ name: "arrow-back" }}
      />
      <View className="px-3 py-3">
        <CustomSearch />
      </View>
      <ScrollView className="flex-1 px-3">
        <Text className="text-sm text-white py-3">Your Collections</Text>
        <View className="flex-row gap-2 items-center flex-wrap">
          <NftThumbnail
            onPress={() =>
              navigation.navigate("choose-collection-item-detail-screen")
            }
            src={require("@/assets/images/nft-1.png")}
            title="Guild of Guardi.."
            price="4"
          />
          <NftThumbnail
            onPress={() =>
              navigation.navigate("choose-collection-item-detail-screen")
            }
            src={require("@/assets/images/nft-2.png")}
            title="Akutars"
            price="2"
          />
          <NftThumbnail
            onPress={() =>
              navigation.navigate("choose-collection-item-detail-screen")
            }
            src={require("@/assets/images/nft-3.png")}
            title="CryptoPunks"
            price="1"
          />
          <NftThumbnail
            onPress={() =>
              navigation.navigate("choose-collection-item-detail-screen")
            }
            src={require("@/assets/images/nft-4.png")}
            title="Bored Ape Yac.."
            price="2"
          />
          <NftThumbnail
            onPress={() =>
              navigation.navigate("choose-collection-item-detail-screen")
            }
            src={require("@/assets/images/nft-5.png")}
            title="Milady Maker.."
            price="1"
          />
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default ChooseDpCollectionScreen;
