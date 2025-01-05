import { View, Text, Animated } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../button/PrimaryButton";

type Props = {
  onPress: () => void;
  slideAnim: Animated.Value;
  title: string;
  subTitle: string;
};
const BottomModalMessage = (props: Props) => {
  const { onPress, slideAnim, subTitle, title } = props;
  return (
    <Animated.View
      style={{ transform: [{ translateY: slideAnim }] }}
      className="w-full h-full bg-white/20 justify-end items-center absolute top-0"
    >
      <View className="border-t border-t-alert-success bg-surface-color h-48 w-full">
        <View className="p-3 gap-3">
          <View className="w-6 h-6 rounded-full items-center bg-alert-success justify-center">
            <Ionicons name="checkmark" size={16} />
          </View>
          <View>
            <Text className="text-white font-medium text-base">{title}</Text>
            <Text className="text-white/50 text-sm">{subTitle}</Text>
          </View>
        </View>
        <View className="p-3">
          <PrimaryButton
            className="bg-secondary"
            textClassName="text-white"
            onPress={onPress}
          >
            Dismiss
          </PrimaryButton>
        </View>
      </View>
    </Animated.View>
  );
};

export default BottomModalMessage;
