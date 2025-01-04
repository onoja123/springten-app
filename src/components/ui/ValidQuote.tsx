import { View, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { StyleSheet } from "react-native";

const ValidQuote = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create a looped animation
    const startRotation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000, // Rotation duration
        useNativeDriver: true, // Use native driver for performance
      })
    );

    startRotation.start();

    return () => startRotation.stop(); // Clean up animation on unmount
  }, [rotateValue]);

  const rotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"], // Rotate from 0 to 360 degrees
  });

  return (
    <View className="flex-row items-center justify-between py-3">
      <Text className="text-white/50 text-sm">
      Enter valid amount for quote -
      </Text>

      <View className="flex-row items-center gap-1">
        <Text className="text-alert-success text-sm ">- </Text>
        <View
          className="bg-white/50
         w-5 h-5 rounded-full p-[1px] justify-center items-center"
        >
          <Animated.View
            style={[
              styles.circle,
              { transform: [{ rotate: rotateAnimation }] },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default ValidQuote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 30,
    backgroundColor: "#333",
  },
});
