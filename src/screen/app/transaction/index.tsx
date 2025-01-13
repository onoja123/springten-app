import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SwapScreenProps, TransactionScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";
import GlobalHeader from "@/components/header/GlobalHeader";
import { ScrollView } from "react-native";
import CustomSearch from "@/components/input/CustomSearch";
import TradeMenuItem from "@/components/list/TradeMenuItem";
import { TransactionHistoryListData } from "@/data/phase";
import { Animated } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const TransactionScreen = ({ navigation }: TransactionScreenProps) => {
  const animationRefs = useRef(
    TransactionHistoryListData.map(() => new Animated.Value(100))
  ).current;
  const textAnimationRefs = useRef([
    new Animated.Value(-50),
    new Animated.Value(-50),
  ]).current;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      animationRefs.forEach((animatedValue) => animatedValue.setValue(100));
      textAnimationRefs.forEach((animatedValue) => animatedValue.setValue(-50));
      const animations = animationRefs.map((animatedValue, index) => {
        return Animated.timing(animatedValue, {
          toValue: 0, // Slide to the original position
          duration: 500,
          delay: index * 100, // Add delay for each item
          useNativeDriver: true,
        });
      });
      const textAnimations = textAnimationRefs.map((animatedValue, index) => {
        return Animated.timing(animatedValue, {
          toValue: 0, // Slide text to its position
          duration: 600,
          delay: index * 200, // Stagger text animation
          useNativeDriver: true,
        });
      });
      Animated.stagger(100, [...textAnimations, ...animations]).start(); // Staggered animations
    }
  }, [animationRefs, isFocused, textAnimationRefs]);
  return (
    <ScreenView style={{ flex: 0 }}>
      <GlobalHeader network between title="Transactions" />
      <View className="px-3 pt-3">
        <CustomSearch />
      </View>
      <ScrollView className="h-full">
        <View className="px-3">
          <Animated.Text
            style={{
              transform: [{ translateY: textAnimationRefs[0] }], // Slide down
              opacity: textAnimationRefs[0].interpolate({
                inputRange: [-50, 0],
                outputRange: [0, 1], // Fade-in
              }),
            }}
            className="text-white/50 text-sm font-medium py-3"
          >
            November
          </Animated.Text>
          <View className="gap-3">
            {TransactionHistoryListData.slice(0, 6).map((value, index) => (
              <Animated.View
                key={index}
                style={{
                  transform: [{ translateY: animationRefs[index] }], // Slide-in effect
                  opacity: animationRefs[index].interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 0], // Fade-in effect
                  }),
                }}
              >
                <TradeMenuItem
                  {...value}
                  onPress={() => console.log("This index was pressed", index)}
                />
              </Animated.View>
            ))}
          </View>
        </View>
        <View className="px-3">
          <Animated.Text
            style={{
              transform: [{ translateY: textAnimationRefs[1] }], // Slide down
              opacity: textAnimationRefs[1].interpolate({
                inputRange: [-50, 0],
                outputRange: [0, 1], // Fade-in
              }),
            }}
            className="text-white/50 text-sm font-medium py-3"
          >
            October
          </Animated.Text>
          <View className="gap-3">
            {TransactionHistoryListData.slice(6, 12).map((value, index) => (
              <Animated.View
                key={index + 6} // Offset index to avoid conflicts
                style={{
                  transform: [{ translateY: animationRefs[index + 6] }],
                  opacity: animationRefs[index + 6].interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 0],
                  }),
                }}
              >
                <TradeMenuItem
                  {...value}
                  onPress={() =>
                    console.log("This index was pressed", index + 6)
                  }
                />
              </Animated.View>
            ))}
          </View>
        </View>
        {/* <AssetListContainer /> */}
      </ScrollView>
    </ScreenView>
  );
};

export default TransactionScreen;
