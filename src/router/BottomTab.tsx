import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screen/app/home";
import { BottomTabParamList } from "@/utils/types";
import { ScreenOptions } from "@/utils/stack_options";
import { SURFACE_DEEP } from "@/constants/colors";
import DBIcon from "@/assets/icons/db.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import SettingsIcon from "@/assets/icons/settings.svg";
import TradeIcon from "@/assets/icons/trade.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import { TradeMenuListData } from "@/data/phase";
import TradeMenuItem from "@/components/list/TradeMenuItem";

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import TransactionScreen from "@/screen/app/transaction";
import SettingsScreen from "@/screen/app/settings";
import CollectScreen from "@/screen/collections";
import ItemsCollectionScreen from "@/screen/collections/items-collections";
import ItemDetailScreen from "@/screen/collections/item-detail";
import { AccountStack, CollectionStack } from "./AppStack";
const Tab = createBottomTabNavigator<BottomTabParamList>();
const BottomTab = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation<any>();
  const handleSheetChanges = useCallback((index: number) => {
    console.log("Bottom sheet index changed:", index);
    // Automatically close the bottom sheet if the index indicates it's closed
    if (index === -1) {
      bottomSheetRef.current?.close(); // Ensure the bottom sheet stays closed
    }
  }, []);
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          ...ScreenOptions,
          tabBarActiveTintColor: "#8181E6",
          tabBarInactiveTintColor: "#FFFFFF80",
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarStyle: {
            backgroundColor: SURFACE_DEEP,
            borderTopWidth: 0,
            height: 68,
            paddingTop: 6,
          },
        }}
      >
        <Tab.Screen
          name="home-screen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                className={`w-12 h-8 rounded-full items-center justify-center ${
                  focused ? "bg-white/10" : ""
                }`}
              >
                <DBIcon fill={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="transaction-screen"
          component={TransactionScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                className={`w-12 h-8 rounded-full items-center justify-center ${
                  focused ? "bg-white/10" : ""
                }`}
              >
                <ClockIcon fill={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="middle-tab"
          component={() => null}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              bottomSheetRef.current?.expand();
            },
          }}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                className={`w-12 h-8 rounded-full items-center justify-center ${
                  focused ? "bg-white/10" : ""
                }`}
              >
                <TradeIcon fill={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="collection-stack"
          component={CollectionStack}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                className={`w-12 h-8 rounded-full items-center justify-center ${
                  focused ? "bg-white/10" : ""
                }`}
              >
                <MenuIcon fill={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="settings-screen"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                className={`w-12 h-8 rounded-full items-center justify-center ${
                  focused ? "bg-white/10" : ""
                }`}
              >
                <SettingsIcon fill={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="account-stack"
          component={AccountStack}
          options={{
            tabBarStyle: {
              display: "none",
            },
            tabBarItemStyle: {
              display: "none",
            },
          }}
        />
      </Tab.Navigator>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={["25%", "55%"]}
        onChange={handleSheetChanges}
        backgroundStyle={styles.bottomSheetBackground}
        enablePanDownToClose
      >
        <BottomSheetScrollView
          contentContainerStyle={styles.bottomSheetContentContainer}
        >
          {TradeMenuListData.map((value, index) => (
            <TradeMenuItem
              key={index}
              subTitle={value.subTitle}
              title={value.title}
              Icon={value.Icon}
              onPress={() => {
                bottomSheetRef.current?.close();
                navigation.navigate("transaction-type-stack", {
                  screen: value.screen,
                });
              }}
            />
          ))}
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2a2a2a",
  },
  bottomSheet: {},
  bottomSheetBackground: {
    backgroundColor: "#2a2a2a",
    position: "absolute",
    bottom: 150,
  },
  bottomSheetContentContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#2a2a2a",
    gap: 12,
  },
});
