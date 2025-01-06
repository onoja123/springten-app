import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";

type Props = {
  onPress: () => void;
  item?: boolean;
  src: any;
  title: string;
  price: string;
};
const NftThumbnail = (props: Props) => {
  const { onPress, item = false, price, src, title } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      {!item && (
        <View className="relative">
          <Image
            source={src}
            className="max-w-52 h-44 overflow-hidden rounded-lg"
          />
          <View className="bg-secondary p-1 flex-row items-center gap-1 absolute bottom-2 left-0 justify-between w-full rounded-md">
            <Text className="text-white text-sm">{title}</Text>
            <View className="bg-white/10 w-7 h-7 rounded-sm items-center justify-center">
              <Text className="text-white/50">{price}</Text>
            </View>
          </View>
        </View>
      )}
      {item && (
        <View className="relative">
          <Image
            source={src}
            className="max-w-52 h-44 overflow-hidden rounded-lg"
          />
          <View className="p-2">
            <Text className="text-white text-sm font-medium">{title}</Text>
            <Text className="text-white/50 text-sm">{price}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default NftThumbnail;
