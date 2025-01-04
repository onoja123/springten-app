import { View, Text, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { QuoteScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import SwapInputForm from "@/components/input/SwapInputForm";
import PrimaryButton from "@/components/button/PrimaryButton";
import LineCheckBox from "@/components/ui/LineCheckBox";
import CustomSpinner from "@/components/ui/CustomSpinner";
import BottomModalMessage from "@/components/ui/BottomModalMessage";
import { HEIGHT } from "@/constants/size";

const QuoteScreen = ({ navigation }: QuoteScreenProps) => {
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
      navigation.navigate("quote-screen");
    }); // Hide the modal after animation
  };

  return (
    <>
      <ScreenView>
        <GlobalHeader title="Quote" ionicons={{ name: "close" }} />
        <View className="flex-1 justify-between">
          <View className="p-3 gap-3">
            <SwapInputForm navigation={navigation} />
            <View className="border border-white/15 rounded-lg w-full">
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Transaction Duration</Text>
                <Text className="text-white text-sm">0m 8s</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center border-b border-b-white/15">
                <Text className="text-white/50 text-sm">Network Fee</Text>
                <Text className="text-white text-sm">0.00060 ETH/ $2.00</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center">
                <Text className="text-white/50 text-sm">Provider Fee</Text>
                <Text className="text-white text-sm">0.00060 ETH/ $2.00</Text>
              </View>
              <View className="p-3 flex-row justify-between items-center">
                <Text className="text-white/50 text-sm">Total</Text>
                <Text className="text-white text-sm">$110.98</Text>
              </View>
            </View>
          </View>
          <View className="p-3 gap-3">
            <LineCheckBox checkbox />
            <View className="pt-3">
              <PrimaryButton
                className="bg-call-action"
                textClassName="text-call-action-text"
                onPress={() => navigation.navigate("select-payment-screen")}
              >
                Continue
              </PrimaryButton>
            </View>
          </View>
        </View>
      </ScreenView>

    </>
  );
};

export default QuoteScreen;
