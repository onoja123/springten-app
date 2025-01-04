import { View, Text } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { SelectPaymentScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import TransactionDetailLine from "@/components/ui/TransactionDetailLine";
import SwapIcon from "@/assets/icons/swap.svg";
import PrimaryButton from "@/components/button/PrimaryButton";

const SelectPaymentScreen = ({
  navigation,
}: SelectPaymentScreenProps) => {
  return (
    <ScreenView>
      <GlobalHeader title="Choose Provider" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between">
        <View className="px-3">
          <View>
              <Text className="text-white/50 text-sm font-medium py-3">
                Payment Method
              </Text>
          </View>
        </View>

        <View className="p-3">
          <PrimaryButton
            className="bg-primary-button"
            textClassName="text-black"
            onPress={() =>
                navigation.navigate("transaction-buy-details-screen")
            }
          >
            Close
          </PrimaryButton>
        </View>
      </View>
    </ScreenView>
  );
};

export default SelectPaymentScreen;
