import { View, Text } from "react-native";
import React, { useState } from "react";
import { SwapScreenProps } from "@/utils/types";
import ScreenView from "@/layout/ScreenView";


const TransactionScreen = ({ navigation }: SwapScreenProps) => {
    return (
        <ScreenView>
        <Text>Transaction Screen</Text>
        </ScreenView>
    );
};

export default TransactionScreen;
