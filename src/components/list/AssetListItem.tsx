import { View, Text, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { Fontisto } from "@expo/vector-icons";
import { StoredCoinListProps } from "@/data/phase";
import { useIsFocused } from "@react-navigation/native";

type Props = {
  isItemHere?: boolean;
  item?: StoredCoinListProps;
  delay?: number;
};
const AssetListItem = (props: Props) => {
  const { isItemHere, item, delay = 0 } = props;
  const translateX = useRef(new Animated.Value(-200)).current;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      translateX.setValue(-200);
      Animated.timing(translateX, {
        toValue: 0, // Slide to the original position
        duration: 1500,
        delay, // Apply delay for the item
        useNativeDriver: true,
      }).start();
    }
  }, [translateX, delay, isFocused]);
  return (
    <Animated.View
      style={{
        transform: [{ translateX }], // Apply the slide-in effect
        opacity: translateX.interpolate({
          inputRange: [-200, 0],
          outputRange: [0, 1], // Fade in as it slides in
        }),
      }}
      className="p-3 flex-row items-center justify-between"
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
    </Animated.View>
  );
};

export default AssetListItem;
