import { View, Text } from "react-native";
import React, { useState } from "react";
import { SwapScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import LineCheckBox from "@/components/ui/LineCheckBox";
import TradeMenuItem from "@/components/list/TradeMenuItem";
import EnglishIcon from "@/assets/icons/english.svg";
import ChineseIcon from "@/assets/icons/chinese.svg";

const SettingsScreen = ({ navigation }: SwapScreenProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
    "English"
  );
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };
  return (
    <ScreenView>
      <GlobalHeader network title="Settings" between />
      <View className="flex-1 justify-between">
        <View className="px-3">
          <View>
            <Text className="text-white text-sm font-medium py-3">
              Notifications Setting
            </Text>
          </View>
          <View>
            <Text className="text-white/50 text-sm font-medium py-3">
              App Notifications
            </Text>
            <View>
              <LineCheckBox title="Push Notifications" isSwitch />
            </View>
          </View>
          <View>
            <Text className="text-white/50 text-sm font-medium py-3">
              Transaction Status Change
            </Text>
            <View className="gap-2">
              <LineCheckBox title="Buy" isSwitch />
              <LineCheckBox title="Sell" isSwitch />
              <LineCheckBox title="Swap" isSwitch />
              <LineCheckBox title="Transfer" isSwitch />
              <LineCheckBox title="Stake" isSwitch />
            </View>
          </View>
          <View>
            <Text className="text-white/50 text-sm font-medium py-3">
              Language
            </Text>
            <View className="gap-2">
              <TradeMenuItem
                subTitle="US"
                title="English"
                Icon={EnglishIcon}
                activeLabel={selectedLanguage === "English"}
                onPress={() => handleLanguageChange("English")}
              />
              <TradeMenuItem
                subTitle="Simplified"
                title="Chinese"
                Icon={ChineseIcon}
                activeLabel={selectedLanguage === "Chinese"}
                onPress={() => handleLanguageChange("Chinese")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default SettingsScreen;
