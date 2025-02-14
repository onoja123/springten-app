import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import { Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { AnimatedText } from "react-native-reanimated/lib/typescript/component/Text";
import { WIDTH } from "@/constants/size";

type Props = {
  onPress: () => void;
  item?: boolean;
  src: any;
  title: string;
  price: string;
};
const NftThumbnail = (props: Props) => {
  const { onPress, item = false, price, src, title } = props;
  const isFocused = useIsFocused();
  // Animated value for shaking
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(0)).current;
  const slideTextLeft = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  // Shake animation function
  const startShakeAnimation = () => {
    shakeAnimation.setValue(0); // Reset animation value

    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const slideTextAnimation = () => {
    Animated.sequence([
      Animated.timing(slideText, {
        toValue: -60,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(slideText, {
        toValue: 0,
        duration: 800,
        delay: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const slideTextLeftAnimation = () => {
    Animated.sequence([
      // Fade in and slide left
      Animated.parallel([
        Animated.timing(slideTextLeft, {
          toValue: -WIDTH,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 0, // Fade in
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      // Fade out and slide back
      Animated.parallel([
        Animated.timing(slideTextLeft, {
          toValue: 0,
          duration: 1000,
          delay: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1, // Fade out
          duration: 1000,
          delay: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  // Trigger animation on render using useEffect
  useEffect(() => {
    if (isFocused) {
      startShakeAnimation();
      slideTextAnimation();
      slideTextLeftAnimation();
    }
  }, [isFocused]);

  // Interpolating shake values for side-to-side motion
  const shakeInterpolate = shakeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animatedStyle = {
    transform: [{ scale: shakeInterpolate }],
  };

  return (
    <TouchableOpacity onPress={onPress} className="w-2/2">
      {!item && (
        <Animated.View style={animatedStyle} className="relative">
          <Image
            source={src}
            className="w-full h-44 overflow-hidden rounded-lg"
          />
          <View className="bg-secondary p-1 flex-row items-center gap-1 absolute bottom-2 left-0 justify-between w-full rounded-md">
            <Text className="text-white text-sm">{title}</Text>
            <View className="bg-white/10 w-7 h-7 rounded-sm items-center justify-center">
              <Text className="text-white/50">{price}</Text>
            </View>
          </View>
        </Animated.View>
      )}
      {item && (
        <Animated.View style={animatedStyle} className="relative">
          <Image
            source={src}
            className="w-full h-44 overflow-hidden rounded-lg"
          />
          <View className="p-2">
            <Animated.Text
              style={{
                transform: [{ translateY: slideText }],
              }}
              className="text-white text-sm font-medium -z-10 relative"
            >
              {title}
            </Animated.Text>
            <Animated.Text
              style={{
                transform: [{ translateX: slideTextLeft }],
                opacity: textOpacity,
              }}
              // className="text-white text-sm font-medium -z-10 relative"
              className="text-white/50 text-sm"
            >
              {price}
            </Animated.Text>
          </View>
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

export default NftThumbnail;
