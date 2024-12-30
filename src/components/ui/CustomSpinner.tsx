import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { HEIGHT } from "@/constants/size";
import { Animated } from "react-native";

const CustomSpinner = () => {
  const spinner = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(spinner, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(spinner, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    );
    loopAnimation.start();

    // Optional: Stop the animation on unmount
    return () => loopAnimation.stop();
  }, [spinner]);

  const width = spinner.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 52],
  });
  const width2 = spinner.interpolate({
    inputRange: [0, 1],
    outputRange: [52, 10],
  });

  return (
    <View className="w-full h-full bg-white/20 justify-center items-center absolute top-0">
      <View className="p-4 flex-row items-center gap-2">
        <Animated.View style={[styles.spinnerLeft, { width: width2 }]} />
        <Animated.View
          style={[styles.spinnerLeft, { width, backgroundColor: "white" }]}
        />
      </View>
    </View>
  );
};

export default CustomSpinner;

const styles = StyleSheet.create({
  spinnerLeft: {
    backgroundColor: "#FFFFFF80",
    width: 52,
    height: 10,
    marginBottom: HEIGHT * 0.2,
  },
});
