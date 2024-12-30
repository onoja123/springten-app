import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon?: {
    name: React.ComponentProps<typeof Ionicons>["name"]; // Icon name, e.g., 'home'
    size?: number; // Icon size, default to 24
    color?: string; // Icon color, default to black
  };
  children: ReactNode;
  className: string;
  textClassName?: string;
  onPress: () => void;
};
const PrimaryButton = (props: Props) => {
  const { className, icon, children, textClassName, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`w-full h-12 rounded-full justify-center items-center gap-1 ${className} `}
    >
      <Text className={`text-base font-medium ${textClassName}`}>
        {children}
      </Text>
      {icon && (
        <Ionicons
          name={icon.name}
          size={icon.size || 24}
          color={icon.color || "black"}
        />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
