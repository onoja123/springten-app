import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SvgProps } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  subTitle: string;
  Icon: React.FC<SvgProps>;
  onPress: () => void;
  activeLabel?: boolean;
};
const TradeMenuItem = (props: Props) => {
  const { title, subTitle, Icon, onPress, activeLabel } = props;
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      className={`p-3 bg-white/5 rounded-lg flex-row items-center justify-between ${
        activeLabel ? "border border-text-link" : ""
      } w-full`}
    >
      <View className="flex-row items-center gap-3">
        <View className="bg-white/10 h-10 w-10 rounded-full items-center justify-center">
          <Icon />
        </View>
        <View>
          <Text className="text-white text-sm font-medium">{title}</Text>
          <Text className="text-white/50 text-sm">{subTitle}</Text>
        </View>
      </View>
      {activeLabel && (
        <View className="bg-text-link w-5 h-5 rounded-full items-center justify-center">
          <Ionicons name="checkmark" size={11} color={"#000"} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TradeMenuItem;
