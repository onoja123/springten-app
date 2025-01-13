import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import ContentCopyIcon from "@/assets/icons/content_copy.svg";
import SmileIcon from "@/assets/icons/smile.svg";
import { BottomTabParamList } from "@/utils/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useIsFocused } from "@react-navigation/native";

type Props = {
  navigation: BottomTabNavigationProp<
    BottomTabParamList,
    "home-screen",
    undefined
  >;
};
const AssetValueContainer = (props: Props) => {
  const { navigation } = props;
  const scale = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      scale.setValue(0);
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [scale, isFocused]);

  return (
    <Animated.View
      style={{ transform: [{ scale }] }}
      className="border border-white/15 rounded-lg h-52"
    >
      <View className="p-3 border-b border-b-white/15">
        <Text className="text-white/50 text-sm">Total Asset Value</Text>
        <Text className="text-white text-4xl font-medium">$2,654.3</Text>
        <Text className={`text-alert-success text-sm`}>+98.02% (24h)</Text>
      </View>
      <View className="flex-row items-center justify-between p-3 border-b border-b-white/15">
        <View className="flex-row items-center gap-2">
          <Text className="text-base text-white">Address</Text>
          <View className="flex-row items-center gap-1 p-1 bg-white/10 rounded-full">
            <Image
              source={require("@/assets/images/eth.png")}
              className="w-4 h-4"
              resizeMode="cover"
            />
            <Text className="text-xs text-text-link">0x71C7656EC7ab88..</Text>
          </View>
        </View>
        <ContentCopyIcon />
      </View>
      <View className="p-3 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <SmileIcon />
          <Text className="text-base text-white">Jordan Avery Taylor</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("account-stack")}>
          <Ionicons name="chevron-forward" size={24} color={"#FFFFFF80"} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default AssetValueContainer;
