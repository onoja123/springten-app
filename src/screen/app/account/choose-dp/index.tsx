import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { ChooseDisplayPictureScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import { Ionicons } from "@expo/vector-icons";

const ChooseDisplayPictureScreen = ({
  navigation,
}: ChooseDisplayPictureScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader
        title="Choose Display Picture"
        ionicons={{ name: "arrow-back" }}
      />
      <View className="px-3">
        <Text className="py-3 text-white/50 text-sm font-medium">
          Choose From
        </Text>
        <View className="gap-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("choose-collection-screen")}
            className="flex-row item-center justify-between p-3 rounded-lg bg-white/10"
          >
            <Text className="text-white/50 text-sm">Collections</Text>
            <View className="flex-row item-center gap-1">
              <Text className="text-white text-sm">NFT</Text>
              <Ionicons name="chevron-forward" size={16} color={"#FFFFFF80"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row item-center justify-between p-3 rounded-lg bg-white/10">
            <Text className="text-white/50 text-sm">Emojis</Text>
            <View className="flex-row item-center gap-1">
              <Ionicons name="chevron-forward" size={16} color={"#FFFFFF80"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row item-center justify-between p-3 rounded-lg bg-white/10">
            <Text className="text-white/50 text-sm">
              Remove Display Picture
            </Text>
            <View className="flex-row item-center gap-1">
              <Ionicons name="chevron-forward" size={16} color={"#FFFFFF80"} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenView>
  );
};

export default ChooseDisplayPictureScreen;
