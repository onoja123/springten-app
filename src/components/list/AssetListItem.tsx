import { View, Text, Image } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { StoredCoinListProps } from "@/data/phase";

type Props = {
  isItemHere?: boolean;
  item?: StoredCoinListProps;
};
const AssetListItem = (props: Props) => {
  const { isItemHere, item } = props;
  return (
    <View className="p-3 flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        {isItemHere && (
          <Image source={item?.src} className="w-9 h-9" resizeMode="cover" />
        )}
        {!isItemHere && (
          <View className="bg-white/10 rounded-full w-9 h-9 justify-center items-center">
            <Fontisto name="hashtag" size={16} color={"#FFFFFF80"} />
          </View>
        )}
        <View>
          <Text className="text-white text-sm">
            {isItemHere ? item?.network : "-"}
          </Text>
          <Text className="text-white/50 text-sm">
            {isItemHere ? item?.coin : "-"}
          </Text>
        </View>
      </View>

      <View className="items-end">
        <Text className="text-white text-sm">
          {isItemHere ? item?.price : "-"}
        </Text>
        <Text className="text-white/50 text-sm">
          {isItemHere ? item?.cost : "-"}
        </Text>
      </View>
    </View>
  );
};

export default AssetListItem;
