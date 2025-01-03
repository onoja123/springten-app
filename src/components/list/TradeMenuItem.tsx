import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SvgProps } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  subTitle: string;
  Icon: React.FC<SvgProps>;
  onPress: () => void;
};
const TradeMenuItem = (props: Props) => {
  const { title, subTitle, Icon, onPress } = props;
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      className={`p-3 bg-white/5 rounded-lg flex-row items-center justify-between w-full`}
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
    </TouchableOpacity>
  );
};

export default TradeMenuItem;
