import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SURFACE_COLOR } from "@/constants/colors";

type Props = {
  ionicons: React.ComponentProps<typeof Ionicons>;
  title: string;
  between?: boolean;
};
const GlobalHeader = (props: Props) => {
  const { ionicons, title, between } = props;
  return (
    <View
      className={`flex-row items-center p-3 ${
        between ? "justify-between" : "gap-2"
      } `}
    >
      <TouchableOpacity className="bg-[#FFFFFF80] w-6 h-6 rounded-full justify-center items-center">
        <Ionicons {...ionicons} color={SURFACE_COLOR} size={15} />
      </TouchableOpacity>
      <Text className="text-base text-white font-medium">{title}</Text>
    </View>
  );
};

export default GlobalHeader;
