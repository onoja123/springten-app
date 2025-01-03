import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  content: string;
  src: any;
  onPress?: () => void;
};
const TokenButtonItem = (props: Props) => {
  const { title, content, src, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between p-3 w-full rounded-lg bg-white/10"
    >
      <View className="flex-row items-center gap-3">
        <Image source={src} className="w-8 h-8" />
        <View>
          <Text className="text-white text-sm font-medium">{title}</Text>
          <Text className="text-white/50 text-sm">{content}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={16} color={"#FFFFFF80"} />
    </TouchableOpacity>
  );
};

export default TokenButtonItem;
