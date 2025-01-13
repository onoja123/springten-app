import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { HEIGHT } from "@/constants/size";
import { SURFACE_COLOR } from "@/constants/colors";

const MAX_TRANSLATE_Y = HEIGHT / 1.4;
const INITIAL_TRANSLATE_Y = -HEIGHT / 9;

export const BottomSheet = ({ ...props }) => {
  const translateY = useSharedValue(INITIAL_TRANSLATE_Y);
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      // If the user tries to close the sheet, snap it back to the initial open position
      if (translateY.value > INITIAL_TRANSLATE_Y) {
        translateY.value = withSpring(INITIAL_TRANSLATE_Y);
      } else if (translateY.value < -MAX_TRANSLATE_Y) {
        translateY.value = withSpring(-MAX_TRANSLATE_Y);
      }
    });

  /**
   * Animated style for the bottom sheet
   */
  const reanimatedBottomStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const scrollTo = (destination: number) => {
    "worklet";
    translateY.value = withSpring(destination, { damping: 50 });
  };

  useEffect(() => {
    // Initial scroll to show the bottom sheet partially
    scrollTo(INITIAL_TRANSLATE_Y);
    scrollTo(INITIAL_TRANSLATE_Y);
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomsheet_container]}>
        {props.children}
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  bottomsheet_container: {
    width: "100%",
    height: 430,
    backgroundColor: SURFACE_COLOR,
    position: "absolute",
    bottom: -30,
    zIndex: 12000,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 12,
    gap: 12,
  },
});
