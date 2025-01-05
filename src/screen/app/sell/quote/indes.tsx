import { View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { QuoteSellScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import SwapInputForm from "@/components/input/SwapInputForm";
import PrimaryButton from "@/components/button/PrimaryButton";
import LineCheckBox from "@/components/ui/LineCheckBox";
import CustomSpinner from "@/components/ui/CustomSpinner";
import BottomModalMessage from "@/components/ui/BottomModalMessage";
import { HEIGHT } from "@/constants/size";
import BuyInputForm from "@/components/input/BuyInputForm";
import ValidQuote from "@/components/ui/ValidQuote";
import { Ionicons } from "@expo/vector-icons";
import { CustomToaster } from "@/utils/core";
import SellInputForm from "@/components/input/SellInputForm";

const SellQuoteScreen = ({ navigation, route }: QuoteSellScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const selectedPayment = route.params?.paymentMethod;
  const selectedProvider = route.params?.providerIndex;

  const handleNextScreen = () => {
    if (selectedPayment && selectedProvider) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsModalVisible(true);
        slideInModal();
      }, 5000);
    } else {
      CustomToaster("info", "Please select a payment method", 2300);
    }
  };
  const slideInModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0, // Slide to the visible position
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideOutModal = () => {
    Animated.timing(slideAnim, {
      toValue: HEIGHT, // Slide back off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
      navigation.navigate("transaction-sell-details-screen");
    }); // Hide the modal after animation
  };

  return (
    <>
      <ScreenView>
        <GlobalHeader title="Quote" ionicons={{ name: "arrow-back" }} />
        <View className="flex-1 justify-between">
          <View className="p-3 gap-3">
            <SellInputForm disabled={true} />
            <View>
              <Text className="text-white text-base font-medium pb-3">
                Details
              </Text>
              <View className="gap-2">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("select-sell-payment-screen")
                  }
                  className="flex-row item-center justify-between p-3 rounded-lg bg-white/10"
                >
                  <Text className="text-white/50 text-sm">Method</Text>
                  <View className="flex-row item-center gap-1">
                    <Text className="text-white text-sm">
                      {selectedPayment ? selectedPayment : "Select"}
                    </Text>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color={"#FFFFFF80"}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("select-sell-payment-screen")
                  }
                  className="flex-row item-center justify-between p-3 rounded-lg bg-white/10"
                >
                  <Text className="text-white/50 text-sm">Provider</Text>
                  <View className="flex-row item-center gap-1">
                    <Text className="text-white text-sm">
                      {selectedProvider ? "Blockchain.com" : "Select"}
                    </Text>
                    <Ionicons
                      name="chevron-forward"
                      size={16}
                      color={"#FFFFFF80"}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className="border border-white/15 rounded-lg w-full">
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">
                  Transaction Duration
                </Text>
                <Text className="text-white text-sm">0m 8s</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Network Fee</Text>
                <Text className="text-white text-sm">0.00060 ETH/ $2.00</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Provider Fee</Text>
                <Text className="text-white text-sm">0.00060 ETH/ $2.00</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center">
                <Text className="text-white/50 text-sm">Total</Text>
                <Text className="text-white text-sm">$34.02</Text>
              </View>
            </View>
          </View>
          <View className="p-3 gap-3">
            <ValidQuote text="Select Provider for precise quote" />
            <LineCheckBox checkbox />
            <View className="pt-3">
              <PrimaryButton
                className="bg-call-action"
                textClassName="text-call-action-text"
                onPress={handleNextScreen}
              >
                Continue
              </PrimaryButton>
            </View>
          </View>
        </View>
      </ScreenView>

      {isLoading && <CustomSpinner />}
      {isModalVisible && (
        <BottomModalMessage
          title="Transaction Success"
          subTitle="You’ve withdrawn 34.02 USDC"
          onPress={slideOutModal}
          slideAnim={slideAnim}
        />
      )}
    </>
  );
};

export default SellQuoteScreen;
