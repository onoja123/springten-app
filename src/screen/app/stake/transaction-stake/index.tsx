import { View, Text } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { TransactionStakeDetailsScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import TransactionDetailLine from "@/components/ui/TransactionDetailLine";
import StakeIcon from "@/assets/icons/stake.svg";
import PrimaryButton from "@/components/button/PrimaryButton";

const TransactionStakeScreen = ({
  navigation,
}: TransactionStakeDetailsScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader title="Stake" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between mt-2">
        <View className="px-3">
          <TransactionDetailLine
            buy
            Icon={StakeIcon}
            src={require("@/assets/images/eth.png")}
            price="11.00"
            network="ETH"
          />
          <Text className="text-base font-medium text-white py-3">Details</Text>
          <View>
            <View>
              <Text className="text-white/50 text-sm font-medium py-3">
                Transaction
              </Text>
              <View className="border border-white/15 rounded-lg w-full">
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Stake Date</Text>
                  <Text className="text-white text-sm">11/23/2024 23:08</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Status</Text>
                  <Text className="text-alert-success text-sm">Active</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Network</Text>
                  <Text className="text-white text-sm">Ethereum</Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="text-white/50 text-sm font-medium py-3">
                Stake
              </Text>
              <View className="border border-white/15 rounded-lg w-full">
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Term</Text>
                  <Text className="text-white text-sm">30 Days</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Validator</Text>
                  <Text className="text-white text-sm">Rocketpool</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Estimated APR</Text>
                  <Text className="text-white text-sm">3.12%</Text>
                </View>

                <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                  <Text className="text-white/50 text-sm">Value Date</Text>
                  <Text className="text-white text-sm">11/24/2024 23:08</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center">
                  <Text className="text-white/50 text-sm">
                    Interest End Date
                  </Text>
                  <Text className="text-white text-sm">12/24/2024 23:08</Text>
                </View>
                <View className="p-3 flex-row justify-between items-center">
                  <Text className="text-white/50 text-sm">Redemption Date</Text>
                  <Text className="text-white text-sm">11/25/2024 23:08</Text>
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

export default TransactionStakeScreen;
