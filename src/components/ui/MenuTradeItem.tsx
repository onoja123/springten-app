import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SvgProps } from "react-native-svg";
import QrCodeIcon from "@/assets/icons/qr_code.svg";
import ContentCopyIcon from "@/assets/icons/content_copy.svg";
type Props = {
  name: string;
  address: string;
  CoinIcon: React.FC<SvgProps>;
};
const MenuTradeItem = (props: Props) => {
  const { CoinIcon, address, name } = props;
  return (
    <View className="flex-row item-center justify-between p-3 rounded-lg bg-white/10">
      <View className="flex-row items-center gap-2">
        <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
          <CoinIcon />
        </View>
        <View>
          <Text className="text-white font-medium text-sm">{name}</Text>
          <Text className="text-white/50 text-sm">{address}</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        <TouchableOpacity className="w-10 h-10 rounded items-center justify-center bg-white/10">
          <QrCodeIcon />
        </TouchableOpacity>
        <TouchableOpacity className="w-10 h-10 rounded items-center justify-center bg-white/10">
          <ContentCopyIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuTradeItem;
