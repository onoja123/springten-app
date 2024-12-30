import { SURFACE_COLOR } from "@/constants/colors";
import React, { ReactNode } from "react";
import { Platform, StyleSheet, ViewStyle, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
};

const ScreenView = (props: Props) => {
  const { children, style, backgroundColor } = props;
  return (
    <SafeAreaView
      style={[
        styles.container,
        style,
        {
          backgroundColor: backgroundColor || SURFACE_COLOR,
          paddingTop: Platform.OS === "android" ? 30 : 0,
        },
      ]}
    >
      <StatusBar barStyle={"default"} />
      {children}
    </SafeAreaView>
  );
};

export default ScreenView;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
});
