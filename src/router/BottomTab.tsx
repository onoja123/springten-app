import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screen/app/home";
import { BottomTabParamList } from "@/utils/types";
import { ScreenOptions } from "@/utils/stack_options";
import { SURFACE_DEEP } from "@/constants/colors";
import DBIcon from "@/assets/icons/db.svg";
import TradeIcon from "@/assets/icons/trade.svg";
// import { BottomSheet } from "@/components/ui/BottomSheet";
import { HEIGHT } from "@/constants/size";
import { TradeMenuListData } from "@/data/phase";
import TradeMenuItem from "@/components/list/TradeMenuItem";
import { TransactionTypeStack } from "./AppStack";
import CustomTabBar from "@/components/ui/CustomTabBar";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
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
        // tabBar={(props) => <CustomTabBar {...props} />}
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
          name="middle-tab"
          component={() => null}
          listeners={{
            tabPress: (e) => {
              e.preventDefault(); // Prevent default navigation
              bottomSheetRef.current?.expand();
              // setBottomSheetVisible(true); // Show the bottom sheet
            },
          }}
          // component={TransactionTypeStack}
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
      </Tab.Navigator>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Start in a closed state
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
                bottomSheetRef.current?.close(); // Close the bottom sheet
                navigation.navigate("transaction-type-stack", {
                  screen: "swap-stack",
                }); // Replace with the actual target screen name
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
    position: "relative", // Allow stacking of elements
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2a2a2a",
  },
  bottomSheet: {
    // zIndex: 10, // Ensure it's above the tab bar
    // // backgroundColor: "transparent", // Transparent to show the custom background
    // position: "absolute",
    // bottom: 60,
  },
  bottomSheetBackground: {
    backgroundColor: "#2a2a2a", // Custom background color
    position: "absolute",
    bottom: 150,
  },
  bottomSheetContentContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#2a2a2a", // Match the bottom sheet background
    gap: 12,
  },
});

{
  /* <BottomSheet>
    {TradeMenuListData.map((value, index) => (
      <TradeMenuItem
        key={index}
        subTitle={value.subTitle}
        title={value.title}
        Icon={value.Icon}
      />
    ))}
  </BottomSheet> */
}

{
  /* <Tab.Screen
          name="transaction-type-stack"
          // component={() => null}
          // listeners={{
          //   tabPress: (e) => {
          //     e.preventDefault(); // Prevent default navigation
          //     bottomSheetRef.current?.expand();
          //     // setBottomSheetVisible(true); // Show the bottom sheet
          //   },
          // }}
          component={TransactionTypeStack}
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
            tabBarStyle: {
              display: "none",
            },
          }}
        /> */
}
