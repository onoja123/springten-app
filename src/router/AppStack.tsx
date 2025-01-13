import AccountScreen from "@/screen/app/account";
import ChooseDisplayPictureScreen from "@/screen/app/account/choose-dp";
import CollectionItemDetailScreen from "@/screen/app/account/collection-item";
import ChooseDpCollectionScreen from "@/screen/app/account/collections";
import SingleCollectionDetailScreen from "@/screen/app/account/single-collection-detail";
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
import FormSendScreen from "@/screen/app/send/form-send";
import QuoteSendScreen from "@/screen/app/send/quote-send";
import SelectSendTokenScreen from "@/screen/app/send/select-send-token";
import TransactionSendScreen from "@/screen/app/send/transaction-send";
import ChooseTermsStakeScreen from "@/screen/app/stake/choose-terms";
import FormStakeScreen from "@/screen/app/stake/form-stake";
import QuoteStakeScreen from "@/screen/app/stake/quote-stake";
import SelectStakeTokenScreen from "@/screen/app/stake/select-stake-token";
import TransactionStakeScreen from "@/screen/app/stake/transaction-stake";
import ChooseCurrencyScreen from "@/screen/app/swap/choose-currency";
import ReviewOrderScreen from "@/screen/app/swap/review-order";
import SwapCoinScreen from "@/screen/app/swap/swap-token";
import TransactionDetailsScreen from "@/screen/app/swap/transaction-details";
import TransactionScreen from "@/screen/app/transaction";
import CollectScreen from "@/screen/collections";
import ItemDetailScreen from "@/screen/collections/item-detail";
import ItemsCollectionScreen from "@/screen/collections/items-collections";
import { ScreenOptions } from "@/utils/stack_options";
import {
  AccountStackParamList,
  BuyStackParamList,
  CollectionStackParamList,
  SellStackParamList,
  SendStackParamList,
  StakeStackParamList,
  SwapStackParamList,
  TransactionTypeStackParamList,
} from "@/utils/types";
import { createStackNavigator } from "@react-navigation/stack";

const TransactionType = createStackNavigator<TransactionTypeStackParamList>();
const SwapType = createStackNavigator<SwapStackParamList>();
const BuyType = createStackNavigator<BuyStackParamList>();
const SellType = createStackNavigator<SellStackParamList>();
const SendType = createStackNavigator<SendStackParamList>();
const StakeType = createStackNavigator<StakeStackParamList>();
const Collection = createStackNavigator<CollectionStackParamList>();
const Account = createStackNavigator<AccountStackParamList>();
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
        name="select-sell-token-screen"
        component={SelectSellTokenScreen}
      />
      <SellType.Screen name="form-sell-screen" component={SellFormScreen} />
      <SellType.Screen name="quote-sell-screen" component={SellQuoteScreen} />
      <SellType.Screen
        name="select-sell-payment-screen"
        component={SelectSellPaymentScreen}
      />
      <SellType.Screen
        name="transaction-sell-details-screen"
        component={TransactionSellScreen}
      />
    </SellType.Navigator>
  );
};
export const StakeTypeStack = () => {
  return (
    <StakeType.Navigator screenOptions={ScreenOptions}>
      <StakeType.Screen
        name="select-stake-token-screen"
        component={SelectStakeTokenScreen}
      />
      <StakeType.Screen name="form-stake-screen" component={FormStakeScreen} />
      <StakeType.Screen
        name="choose-term-stake-screen"
        component={ChooseTermsStakeScreen}
      />
      <StakeType.Screen
        name="quote-stake-screen"
        component={QuoteStakeScreen}
      />
      <StakeType.Screen
        name="transaction-stake-screen"
        component={TransactionStakeScreen}
      />
    </StakeType.Navigator>
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
    <SendType.Navigator screenOptions={ScreenOptions}>
      <SendType.Screen
        name="select-send-token-screen"
        component={SelectSendTokenScreen}
      />
      <SendType.Screen name="form-send-screen" component={FormSendScreen} />
      <SendType.Screen name="quote-send-screen" component={QuoteSendScreen} />
      <SendType.Screen
        name="transaction-send-details-screen"
        component={TransactionSendScreen}
      />
    </SendType.Navigator>
  );
};

export const TransactionTypeStack = () => {
  return (
    <TransactionType.Navigator screenOptions={ScreenOptions}>
      <TransactionType.Screen name="buy-stack" component={BuyTypeStack} />
      <TransactionType.Screen name="sell-stack" component={SellTypeStack} />
      <TransactionType.Screen name="send-stack" component={SendTypeStack} />
      <TransactionType.Screen name="swap-stack" component={SwapTypeStack} />
      <TransactionType.Screen name="stake-stack" component={StakeTypeStack} />
    </TransactionType.Navigator>
  );
};

export const CollectionStack = () => {
  return (
    <Collection.Navigator screenOptions={ScreenOptions}>
      <Collection.Screen name="collection-screen" component={CollectScreen} />
      <Collection.Screen
        name="item-collection-screen"
        component={ItemsCollectionScreen}
      />
      <Collection.Screen
        name="item-detail-screen"
        component={ItemDetailScreen}
      />
    </Collection.Navigator>
  );
};

export const AccountStack = () => {
  return (
    <Account.Navigator screenOptions={ScreenOptions}>
      <Account.Screen name="account-screen" component={AccountScreen} />
      <Account.Screen
        name="choose-dp-screen"
        component={ChooseDisplayPictureScreen}
      />
      <Account.Screen
        name="choose-collection-screen"
        component={ChooseDpCollectionScreen}
      />
      <Account.Screen
        name="choose-collection-item-detail-screen"
        component={CollectionItemDetailScreen}
      />
      <Account.Screen
        name="collection-single-detail-screen"
        component={SingleCollectionDetailScreen}
      />
    </Account.Navigator>
  );
};
