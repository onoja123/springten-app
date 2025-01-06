import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenView from "@/layout/ScreenView";
import { SelectSellSellPaymentScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import TransactionDetailLine from "@/components/ui/TransactionDetailLine";
import CreditCardIcon from "@/assets/icons/credit_card.svg";
import GooglePlayIcon from "@/assets/icons/google-play.svg";
import PrimaryButton from "@/components/button/PrimaryButton";
import TradeMenuItem from "@/components/list/TradeMenuItem";
import AssetListItem from "@/components/list/AssetListItem";
import ProviderItem from "@/components/ui/ProviderItem";
import { ProviderListData } from "@/data/phase";

const SelectSellPaymentScreen = ({
  navigation,
}: SelectSellSellPaymentScreenProps) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);

  const handleSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };
  const handleProvider = (index: number) => {
    setSelectedProvider(index);
  };

  useEffect(() => {
    if (selectedPayment && selectedProvider) {
      navigation.replace("quote-sell-screen", {
        paymentMethod: selectedPayment,
        providerIndex: selectedProvider,
      });
    }
  }, [selectedPayment, selectedProvider]);

  return (
    <ScreenView>
      <GlobalHeader title="Choose Provider" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between">
        <View className="px-3">
          <View>
            <Text className="text-white/50 text-sm font-medium py-3">
              Withdraw Method
            </Text>
            <View className="gap-3">
              <TradeMenuItem
                subTitle="Less than 10 min"
                title="Credit/ Debit Card"
                Icon={CreditCardIcon}
                activeLabel={selectedPayment === "Credit/Debit Card"}
                onPress={() => handleSelect("Credit/Debit Card")}
              />
              <TradeMenuItem
                subTitle="Less than 10 min"
                title="Google Pay"
                Icon={GooglePlayIcon}
                activeLabel={selectedPayment === "Google Pay"}
                onPress={() => handleSelect("Google Pay")}
              />
            </View>
          </View>
          <View>
            <Text className="text-white/50 text-sm font-medium py-3">
              Provider
            </Text>
            <View className="gap-3">
              {selectedPayment === null ? (
                <ProviderItem disabled />
              ) : (
                ProviderListData.map((value, index) => (
                  <ProviderItem
                    key={index}
                    isItemHere={ProviderListData.length > 0}
                    item={value}
                    onPress={() => handleProvider(index)}
                    activeLabel={selectedProvider === index}
                  />
                ))
              )}
            </View>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default SelectSellPaymentScreen;
