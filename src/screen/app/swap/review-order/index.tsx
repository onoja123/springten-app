import { View, Text, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { ReviewOrderScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import SwapInputForm from "@/components/input/SwapInputForm";
import PrimaryButton from "@/components/button/PrimaryButton";
import LineCheckBox from "@/components/ui/LineCheckBox";
import CustomSpinner from "@/components/ui/CustomSpinner";
import BottomModalMessage from "@/components/ui/BottomModalMessage";
import { HEIGHT } from "@/constants/size";

const ReviewOrderScreen = ({ navigation }: ReviewOrderScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleNextScreen = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalVisible(true);
      slideInModal();
      //   navigation.navigate("");
    }, 5000);
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
      navigation.navigate("transaction-swap-details-screen");
    });
  };

  return (
    <>
      <ScreenView>
        <GlobalHeader title="Review Order" ionicons={{ name: "close" }} />
        <View className="flex-1 justify-between">
          <View className="p-3 gap-3">
            <SwapInputForm navigation={navigation} />
            <View className="border border-white/15 rounded-lg w-full">
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Rate</Text>
                <Text className="text-white text-sm">1 ETH = $3115.40</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Slippage</Text>
                <Text className="text-white text-sm">1%</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center">
                <Text className="text-white/50 text-sm">Estimated Fees</Text>
                <Text className="text-white text-sm">$9.16</Text>
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
                Swap Assets
              </PrimaryButton>
            </View>
          </View>
        </View>
      </ScreenView>

      {isLoading && <CustomSpinner />}
      {isModalVisible && (
        <BottomModalMessage
          subTitle="You’ve swapped 0.521 ETH for 0.01813402 BTC"
          title="Transaction Success"
          onPress={slideOutModal}
          slideAnim={slideAnim}
        />
      )}
    </>
  );
};

export default ReviewOrderScreen;
