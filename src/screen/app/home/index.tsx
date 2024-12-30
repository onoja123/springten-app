import { View, Text } from "react-native";
import React from "react";
import ScreenView from "@/layout/ScreenView";
import { HomeScreenProps } from "@/utils/types";

const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <ScreenView>
      <Text>HomeScreen</Text>
    </ScreenView>
  );
};

export default HomeScreen;
