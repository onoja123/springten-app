import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { ProviderListDataProps } from "@/data/phase";

type Props = {
  isItemHere?: boolean;
  item?: ProviderListDataProps;
  onPress?: () => void;
  disabled?: boolean;
  activeLabel?: boolean;
};
const ProviderItem = (props: Props) => {
  const { isItemHere, item, onPress, disabled, activeLabel } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      className={`p-3 bg-white/5 rounded-lg flex-row items-center justify-between ${
        activeLabel ? "border border-text-link" : ""
      } `}
    >
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
            {isItemHere ? item?.name : "No provider found"}
          </Text>
          {item?.content && (
            <Text className={` text-alert-success text-sm`}>
              {isItemHere ? item?.content : "Choose payment"}
            </Text>
          )}
          {!isItemHere && (
            <Text className={` text-white/50 text-sm`}>
              {isItemHere ? item?.content : "Choose payment"}
            </Text>
          )}
        </View>
      </View>

      <View className="gap-2 flex-row items-center">
        <View className="items-end">
          <Text className="text-white text-sm">
            {isItemHere ? `${item?.price} LINK` : "-"}
          </Text>
          <Text className="text-white/50 text-sm">
            {isItemHere ? item?.cost : "-"}
          </Text>
        </View>
        {activeLabel && (
          <View className="bg-text-link w-5 h-5 rounded-full items-center justify-center">
            <Ionicons name="checkmark" size={11} color={"#000"} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProviderItem;
