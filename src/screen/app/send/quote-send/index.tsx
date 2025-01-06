import { View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { QuoteSendScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import SwapInputForm from "@/components/input/SwapInputForm";
import PrimaryButton from "@/components/button/PrimaryButton";
import LineCheckBox from "@/components/ui/LineCheckBox";
import CustomSpinner from "@/components/ui/CustomSpinner";
import BottomModalMessage from "@/components/ui/BottomModalMessage";
import { HEIGHT } from "@/constants/size";
import ValidQuote from "@/components/ui/ValidQuote";
import SendInputForm from "@/components/input/SendInputForm";

const QuoteSendScreen = ({ navigation }: QuoteSendScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleNextScreen = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalVisible(true);
      slideInModal();
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
      navigation.navigate("transaction-send-details-screen");
    });
  };

  return (
    <>
      <ScreenView>
        <GlobalHeader title="Review" ionicons={{ name: "arrow-back" }} />
        <View className="flex-1 justify-between">
          <View className="p-3 gap-3">
            <SendInputForm disabled={true} />
            <View>
              <Text className="text-white text-base font-medium pb-3">
                Details
              </Text>
            </View>
            <View className="border border-white/15 rounded-lg w-full">
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Network</Text>
                <Text className="text-white text-sm">Ethereum</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Network Fee</Text>
                <Text className="text-white text-sm">0.00060 ETH/ $2.00</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Provider Fee</Text>
                <Text className="text-white text-sm">0.00060 ETH/ $2.00</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">
                  Transaction Duration
                </Text>
                <Text className="text-white text-sm">0m 8s</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center">
                <Text className="text-white/50 text-sm">Total</Text>
                <Text className="text-white text-sm">$38.02</Text>
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
          subTitle="You’ve sent 36.02 USDC to 0x71C7656EC7a88.."
          onPress={slideOutModal}
          slideAnim={slideAnim}
        />
      )}
    </>
  );
};

export default QuoteSendScreen;
