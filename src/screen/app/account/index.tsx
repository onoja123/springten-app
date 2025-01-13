import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import { AccountScreenProps } from "@/utils/types";
import EditableInput from "@/components/input/EditableInput";
import EthIcon from "@/assets/icons/eth.svg";
import BnbIcon from "@/assets/icons/bnb.svg";
import MenuTradeItem from "@/components/ui/MenuTradeItem";
import PrimaryButton from "@/components/button/PrimaryButton";
import { CustomToaster } from "@/utils/core";

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader title="Account" ionicons={{ name: "arrow-back" }} />
      <ScrollView
        className="px-3"
        contentContainerClassName="flex-1 justify-between"
      >
        <View>
          <View className="">
            <Text className="text-white/50 font-medium text-sm py-3">
              Display Picture
            </Text>
            <View className="w-48 h-48 rounded-lg bg-call-action p-2 relative">
              <View className="bg-surface-color w-full p-2 left-2 flex-row justify-between rounded absolute bottom-2 items-center">
                <Text className="text-white text-sm font-medium">Emoji</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("choose-dp-screen")}
                  className="bg-white/10 p-1 rounded-sm"
                >
                  <Text className="text-white/50 font-medium text-sm">
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text className="text-white/50 font-medium text-sm py-3">
              Details
            </Text>
            <EditableInput />
          </View>
          <View>
            <Text className="text-white/50 font-medium text-sm py-3">
              Wallet
            </Text>
            <View className="gap-2">
              <MenuTradeItem
                CoinIcon={EthIcon}
                address="0x71C7656EC7ab88.."
                name="Ethereum Mainnet"
              />
              <MenuTradeItem
                CoinIcon={BnbIcon}
                address="0x71C7656EC7ab88.."
                name="BNB Smartchain"
              />
            </View>
          </View>
        </View>
        <View className="py-3">
          <PrimaryButton
            className="bg-primary-button"
            onPress={() => {
              navigation.navigate("home-screen");
              CustomToaster("success", "You have saved your changes", 2500);
            }}
          >
            Save Changes
          </PrimaryButton>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default AccountScreen;
