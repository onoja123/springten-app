import FormScreen from "@/screen/app/buy/form";
import QuoteScreen from "@/screen/app/buy/quote/indes";
import SelectPaymentScreen from "@/screen/app/buy/select-payment";
import SelectTokenScreen from "@/screen/app/buy/select-token";
import TransactionBuyScreen from "@/screen/app/buy/transaction";
import SellFormScreen from "@/screen/app/sell/form";
import SellQuoteScreen from "@/screen/app/sell/quote/indes";
import SelectSellPaymentScreen from "@/screen/app/sell/select-payment";
import SelectSellTokenScreen from "@/screen/app/sell/select-token";
import TransactionSellScreen from "@/screen/app/sell/transaction";
import ChooseCurrencyScreen from "@/screen/app/swap/choose-currency";
import ReviewOrderScreen from "@/screen/app/swap/review-order";
import SwapCoinScreen from "@/screen/app/swap/swap-token";
import TransactionDetailsScreen from "@/screen/app/swap/transaction-details";
import TransactionScreen from "@/screen/app/transaction";
import { ScreenOptions } from "@/utils/stack_options";
import {
  BuyStackParamList,
  SellStackParamList,
  SwapStackParamList,
  TransactionTypeStackParamList,
} from "@/utils/types";
import { createStackNavigator } from "@react-navigation/stack";

const TransactionType = createStackNavigator<TransactionTypeStackParamList>();
const SwapType = createStackNavigator<SwapStackParamList>();
const BuyType = createStackNavigator<BuyStackParamList>();
const SellType = createStackNavigator<SellStackParamList>();
export const BuyTypeStack = () => {
  return (
    <BuyType.Navigator screenOptions={ScreenOptions}>
      <BuyType.Screen
        name="select-token-screen"
        component={SelectTokenScreen}
      />
      <BuyType.Screen name="form-screen" component={FormScreen} />
      <BuyType.Screen name="quote-screen" component={QuoteScreen} />
      <BuyType.Screen
        name="select-payment-screen"
        component={SelectPaymentScreen}
      />
      <BuyType.Screen
        name="transaction-buy-details-screen"
        component={TransactionBuyScreen}
      />
    </BuyType.Navigator>
  );
};

export const SellTypeStack = () => {
  return (
    <SellType.Navigator screenOptions={ScreenOptions}>
      <SellType.Screen
        name="select-token-screen"
        component={SelectSellTokenScreen}
      />
      <SellType.Screen name="form-screen" component={SellFormScreen} />
      <SellType.Screen name="quote-screen" component={SellQuoteScreen} />
      <SellType.Screen
        name="select-payment-screen"
        component={SelectSellPaymentScreen}
      />
      <SellType.Screen
        name="transaction-sell-details-screen"
        component={TransactionSellScreen}
      />
    </SellType.Navigator>
  );
};

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

export const SendTypeStack = () => {
  return (
    <BuyType.Navigator screenOptions={ScreenOptions}>
      <BuyType.Screen
        name="select-token-screen"
        component={SelectTokenScreen}
      />
      <BuyType.Screen name="form-screen" component={FormScreen} />
      <BuyType.Screen name="quote-screen" component={QuoteScreen} />
      <BuyType.Screen
        name="select-payment-screen"
        component={SelectPaymentScreen}
      />
      <BuyType.Screen
        name="transaction-buy-details-screen"
        component={TransactionBuyScreen}
      />
    </BuyType.Navigator>
  );
};

export const TransactionTypeStack = () => {
  return (
    <TransactionType.Navigator screenOptions={ScreenOptions}>
      <TransactionType.Screen name="buy-stack" component={BuyTypeStack} />
      <TransactionType.Screen name="sell-stack" component={SellTypeStack} />
      {/*<TransactionType.Screen name="send-stack" component={SellTypeStack} />
      <TransactionType.Screen name="swap-stack" component={SwapTypeStack} />
      <TransactionType.Screen name="stake-stack" component={SellTypeStack} /> */}
      {/* <TransactionType.Screen name="receive-stack" component={BuyTypeStack} /> */}
    </TransactionType.Navigator>
  );
};
