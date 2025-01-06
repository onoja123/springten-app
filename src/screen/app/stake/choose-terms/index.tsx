import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenView from "@/layout/ScreenView";
import { ChooseTermsSkateScreenProps } from "@/utils/types";
import GlobalHeader from "@/components/header/GlobalHeader";
import TransactionDetailLine from "@/components/ui/TransactionDetailLine";
import CreditCardIcon from "@/assets/icons/credit_card.svg";
import GooglePlayIcon from "@/assets/icons/google-play.svg";
import PrimaryButton from "@/components/button/PrimaryButton";
import TradeMenuItem from "@/components/list/TradeMenuItem";
import AssetListItem from "@/components/list/AssetListItem";
import ProviderItem from "@/components/ui/ProviderItem";
import { ProviderListData, ValidatorListData } from "@/data/phase";

const ChooseTermsStakeScreen = ({
  navigation,
}: ChooseTermsSkateScreenProps) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const handleSelect = (paymentMethod: string) => {
    setSelectedPayment(paymentMethod);
  };
  const handleProvider = (validator: string) => {
    setSelectedProvider(validator);
  };

  useEffect(() => {
    if (selectedPayment && selectedProvider) {
      navigation.replace("quote-stake-screen", {
        terms: selectedPayment,
        validator: selectedProvider,
      });
    }
  }, [selectedPayment, selectedProvider]);

  return (
    <ScreenView>
      <GlobalHeader title="Choose Term" ionicons={{ name: "close" }} />
      <View className="flex-1 justify-between">
        <View className="px-3">
          <View>
            <Text className="text-white/50 text-sm font-medium py-3">
              Available Terms
            </Text>
            <View className="gap-3">
              <TradeMenuItem
                subTitle="Withdraw anytime without lock period"
                title="Flexible"
                Icon={CreditCardIcon}
                activeLabel={selectedPayment === "Flexible"}
                onPress={() => handleSelect("Flexible")}
              />
              <TradeMenuItem
                subTitle="Lock and redeem after 30 days"
                title="30 Days"
                Icon={GooglePlayIcon}
                activeLabel={selectedPayment === "30 Days"}
                onPress={() => handleSelect("30 Days")}
              />
              <TradeMenuItem
                subTitle="Lock and redeem after 60 days"
                title="60 Days"
                Icon={GooglePlayIcon}
                activeLabel={selectedPayment === "60 Days"}
                onPress={() => handleSelect("60 Days")}
              />
            </View>
          </View>
          <View>
            <Text className="text-white/50 text-sm font-medium py-3">
              Validator
            </Text>
            <View className="gap-3">
              {selectedPayment === null ? (
                <ProviderItem disabled />
              ) : (
                ValidatorListData.map((value, index) => (
                  <ProviderItem
                    key={index}
                    isItemHere={ValidatorListData.length > 0}
                    item={value}
                    onPress={() => handleProvider(value.name)}
                    activeLabel={selectedProvider === value.name}
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

export default ChooseTermsStakeScreen;
