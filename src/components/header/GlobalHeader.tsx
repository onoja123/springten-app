import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SURFACE_COLOR } from "@/constants/colors";
import Logo from "@/assets/icons/logo.svg";
import QrCodeIcon from "@/assets/icons/qr_code.svg";
import GasIcon from "@/assets/icons/gas.svg";
import { useNavigation } from "@react-navigation/native";

type Props = {
  ionicons?: React.ComponentProps<typeof Ionicons>;
  title?: string;
  between?: boolean;
  network?: boolean; // Add network icon if true
  gas?: boolean; // Add network icon if true
};
const GlobalHeader = (props: Props) => {
  const { ionicons, title, between, network, gas } = props;
  const navigation = useNavigation<any>();
  return (
    <View
      className={`flex-row items-center p-3 ${
        between ? "justify-between" : "gap-2"
      } `}
    >
      {!network && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-[#FFFFFF80] w-6 h-6 rounded-full justify-center items-center"
        >
          <Ionicons {...ionicons} color={SURFACE_COLOR} size={15} />
        </TouchableOpacity>
      )}

      {network && <Logo style={styles.logo} />}
      {title && (
        <Text className="text-base text-white font-medium">{title}</Text>
      )}
      {network && !title && (
        <View className="h-8 bg-white/10 rounded-full p-1 gap-2 flex-row items-center">
          <Image
            source={require("@/assets/images/eth.png")}
            className="w-6 h-6"
            resizeMode="cover"
          />
          <Text className="text-sm text-white">Ethereum Main Network</Text>
          <TouchableOpacity className="bg-[#FFFFFF80] w-6 h-6 rounded-full justify-center items-center">
            <Ionicons name="caret-down" size={15} color={SURFACE_COLOR} />
          </TouchableOpacity>
        </View>
      )}
      {network && (
        <TouchableOpacity>
          <QrCodeIcon />
        </TouchableOpacity>
      )}
      {gas && (
        <TouchableOpacity>
          <GasIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GlobalHeader;

const styles = StyleSheet.create({
  logo: {
    width: 24,
    height: 24,
  },
});
