import { View, Text } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import {
  TransactionBuyDetailsScreenProps,
  TransactionSendDetailsScreenProps,
} from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import TransactionDetailLine from "@/components/ui/TransactionDetailLine";
import SendIcon from "@/assets/icons/send.svg";
import PrimaryButton from "@/components/button/PrimaryButton";

const TransactionSendScreen = ({
  navigation,
}: TransactionSendDetailsScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader title="Send" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between mt-2">
        <View className="px-3">
          <TransactionDetailLine
            buy
            Icon={SendIcon}
            src={require("@/assets/images/usdc.png")}
            price="36.02"
            network="USDC"
          />
          <Text className="text-base font-medium text-white py-3">Details</Text>
          <View>
            <View>
              <Text className="text-white/50 text-sm font-medium py-3">
                Transaction
              </Text>
              <View className="border border-white/15 rounded-lg w-full">
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Date</Text>
                  <Text className="text-white text-sm">Apr 1, 2024/ 20:50</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Status</Text>
                  <Text className="text-alert-success text-sm">Success</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Network</Text>
                  <Text className="text-white text-sm">Ethereum</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center">
                  <Text className="text-white/50 text-sm">Network Fees</Text>
                  <Text className="text-white text-sm">0.00060 ETH/ $2.00</Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="text-white/50 text-sm font-medium py-3">
                Send
              </Text>
              <View className="border border-white/15 rounded-lg w-full">
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Address</Text>
                  <Text className="text-white text-sm">0x71C7656EC7a88..</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Total</Text>
                  <Text className="text-white text-sm">$38.02</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center">
                  <Text className="text-white/50 text-sm">Transaction ID</Text>
                  <Text className="text-text-link text-sm">
                    4uZ3TVEZcjEeZ7..
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="p-3">
          <PrimaryButton
            className="bg-primary-button"
            textClassName="text-black"
            onPress={() =>
              navigation.navigate("bottom-tab", {
                screen: "home-screen",
              })
            }
          >
            Close
          </PrimaryButton>
        </View>
      </View>
    </ScreenView>
  );
};

export default TransactionSendScreen;
