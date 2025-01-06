import { View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { QuoteStakeScreenProps } from "@/utils/types";
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
import StakeInputForm from "@/components/input/StakeInputForm";

const QuoteStakeScreen = ({ navigation, route }: QuoteStakeScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const selectedPayment = route.params?.terms;
  const selectedProvider = route.params?.validator;

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
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideOutModal = () => {
    Animated.timing(slideAnim, {
      toValue: HEIGHT,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
      navigation.navigate("transaction-stake-screen");
    });
  };

  return (
    <>
      <ScreenView>
        <GlobalHeader title="Quote" ionicons={{ name: "arrow-back" }} />
        <View className="flex-1 justify-between">
          <View className="p-3 gap-3">
            <StakeInputForm disabled={true} />
            <View>
              <Text className="text-white text-base font-medium pb-3">
                Details
              </Text>
              <View className="gap-2">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("choose-term-stake-screen")
                  }
                  className="flex-row item-center justify-between p-3 rounded-lg bg-white/10"
                >
                  <Text className="text-white/50 text-sm">Terms</Text>
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
                    navigation.navigate("choose-term-stake-screen")
                  }
                  className="flex-row item-center justify-between p-3 rounded-lg bg-white/10"
                >
                  <Text className="text-white/50 text-sm">Validator</Text>
                  <View className="flex-row item-center gap-1">
                    <Text className="text-white text-sm">
                      {selectedProvider ? selectedProvider : "Select"}
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
                <Text className="text-white/50 text-sm">Estimated APR</Text>
                <Text className="text-white text-sm">3.12%</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Stake Date</Text>
                <Text className="text-white text-sm">11/23/2024 23:08</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Value Date</Text>
                <Text className="text-white text-sm">11/24/2024 23:08</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center">
                <Text className="text-white/50 text-sm">Interest End Date</Text>
                <Text className="text-white text-sm">12/24/2024 23:08</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center">
                <Text className="text-white/50 text-sm">Redemption Date</Text>
                <Text className="text-white text-sm">11/25/2024 23:08</Text>
              </View>
            </View>
          </View>
          <View className="p-3 gap-3">
            <LineCheckBox checkbox />
            <View className="pt-3">
              <PrimaryButton
                className="bg-call-action"
                textClassName="text-call-action-text"
                onPress={handleNextScreen}
              >
                Stake ETH
              </PrimaryButton>
            </View>
          </View>
        </View>
      </ScreenView>

      {isLoading && <CustomSpinner />}
      {isModalVisible && (
        <BottomModalMessage
          title="Transaction Success"
          subTitle="You’ve staked 11.00 ETH"
          onPress={slideOutModal}
          slideAnim={slideAnim}
        />
      )}
    </>
  );
};

export default QuoteStakeScreen;
