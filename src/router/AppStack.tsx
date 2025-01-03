import ChooseCurrencyScreen from "@/screen/app/choose-currency";
import ReviewOrderScreen from "@/screen/app/review-order";
import SwapCoinScreen from "@/screen/app/swap";
import TransactionDetailsScreen from "@/screen/app/swap/transaction-details";
import { ScreenOptions } from "@/utils/stack_options";
import {
  SwapStackParamList,
  TransactionTypeStackParamList,
} from "@/utils/types";
import { createStackNavigator } from "@react-navigation/stack";

const TransactionType = createStackNavigator<TransactionTypeStackParamList>();
const SwapType = createStackNavigator<SwapStackParamList>();

export const SwapTypeStack = () => {
  return (
    <SwapType.Navigator screenOptions={ScreenOptions}>
      <SwapType.Screen name="swap-screen" component={SwapCoinScreen} />
      <SwapType.Screen
        name="choose-currency-screen"
        component={ChooseCurrencyScreen}
        options={{
          presentation: "modal",
        }}
      />
      <SwapType.Screen
        name="review-order-screen"
        component={ReviewOrderScreen}
      />
      <SwapType.Screen
        name="transaction-swap-details-screen"
        component={TransactionDetailsScreen}
      />
    </SwapType.Navigator>
  );
};
export const TransactionTypeStack = () => {
  return (
    <TransactionType.Navigator screenOptions={ScreenOptions}>
      <TransactionType.Screen name="swap-stack" component={SwapTypeStack} />
    </TransactionType.Navigator>
  );
};
