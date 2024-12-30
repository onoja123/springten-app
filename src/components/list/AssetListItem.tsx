import { View, Text, Image } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";

type Props = {
  isItemHere?: boolean;
};
const AssetListItem = (props: Props) => {
  const { isItemHere } = props;
  return (
    <View className="p-3 flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        {isItemHere && (
          <Image
            source={require("@/assets/images/eth.png")}
            className="w-9 h-9"
            resizeMode="cover"
          />
        )}
        {!isItemHere && (
          <View className="bg-white/10 rounded-full w-9 h-9 justify-center items-center">
            <Fontisto name="hashtag" size={16} color={"#FFFFFF80"} />
          </View>
        )}
        <View>
          <Text className="text-white text-sm">{isItemHere ? "ETH" : "-"}</Text>
          <Text className="text-white/50 text-sm">
            {isItemHere ? "Ethereum" : "-"}
          </Text>
        </View>
      </View>

      <View className="items-end">
        <Text className="text-white text-sm">{isItemHere ? "1.042" : "-"}</Text>
        <Text className="text-white/50 text-sm">
          {isItemHere ? "$3259.38" : "-"}
        </Text>
      </View>
    </View>
  );
};

export default AssetListItem;
