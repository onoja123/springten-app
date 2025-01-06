import { StackScreenProps } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  "walkthrough-stack": undefined;
  "auth-stack": undefined;
  "bottom-tab": undefined;
  "transaction-type-stack": Record<string, any>;
};

export type WalkthroughStackParamList = {
  "splash-screen": undefined;
  "onboarding-screen": undefined;
  "auth-stack": undefined;
};
export type AuthStackParamList = {
  "set-up-security-screen": undefined;
  "secret-phase-screen": undefined;
  "create-wallet-screen": undefined;
  "bottom-tab": undefined;
};

export type BottomTabParamList = {
  "home-screen": undefined;
  "transaction-screen": undefined;
  "middle-tab": undefined;
  "menu-screen": undefined;
  "settings-screen": undefined;
  "item-collection-screen": undefined;
};

export type TransactionTypeStackParamList = {
  "swap-stack": undefined;
  "buy-stack": undefined;
  "send-stack": undefined;
  "stake-stack": undefined;
  "sell-stack": undefined;
};

export type SwapStackParamList = {
  "swap-screen": undefined;
  "choose-currency-screen": { title: string };
  "review-order-screen": undefined;
  "transaction-swap-details-screen": undefined;
  "bottom-tab": { screen: string };
};

export type BuyStackParamList = {
  "select-token-screen": { title: string };
  "form-screen": undefined;
  "quote-screen":
    | {
        paymentMethod: string;
        providerIndex: number;
      }
    | undefined;
  "select-payment-screen": undefined;
  "transaction-buy-details-screen": undefined;
  "bottom-tab": { screen: string };
};

export type SellStackParamList = {
  "select-sell-token-screen": { title: string };
  "form-sell-screen": undefined;
  "quote-sell-screen":
    | {
        paymentMethod: string;
        providerIndex: number;
      }
    | undefined;
  "select-sell-payment-screen": undefined;
  "transaction-sell-details-screen": undefined;
  "bottom-tab": { screen: string };
};

export type SendStackParamList = {
  "select-send-token-screen": { title: string };
  "form-send-screen": undefined;
  "quote-send-screen": undefined;
  "transaction-send-details-screen": undefined;
  "bottom-tab": { screen: string };
};

export type SelectSellTokenScreenProps = StackScreenProps<
  SellStackParamList,
  "select-sell-token-screen"
>;

export type FormSellScreenProps = StackScreenProps<
  SellStackParamList,
  "form-sell-screen"
>;

export type QuoteSellScreenProps = StackScreenProps<
  SellStackParamList,
  "quote-sell-screen"
>;

export type SelectSellSellPaymentScreenProps = StackScreenProps<
  SellStackParamList,
  "select-sell-payment-screen"
>;

export type TransactionSellDetailsScreenProps = StackScreenProps<
  SellStackParamList,
  "transaction-sell-details-screen"
>;

export type StakeStackParamList = {
  "select-stake-token-screen": { title: string };
  "form-stake-screen": undefined;
  "choose-term-stake-screen": undefined;
  "quote-stake-screen": {
    terms: string;
    validator: string;
  };
  "transaction-stake-screen": undefined;
  "bottom-tab": { screen: string };
};

export type SelectStakeTokenScreenProps = StackScreenProps<
  StakeStackParamList,
  "select-stake-token-screen"
>;

export type FormSkateScreenProps = StackScreenProps<
  StakeStackParamList,
  "form-stake-screen"
>;
export type ChooseTermsSkateScreenProps = StackScreenProps<
  StakeStackParamList,
  "choose-term-stake-screen"
>;
export type QuoteStakeScreenProps = StackScreenProps<
  StakeStackParamList,
  "quote-stake-screen"
>;
export type TransactionStakeDetailsScreenProps = StackScreenProps<
  StakeStackParamList,
  "transaction-stake-screen"
>;

export type SwapScreenProps = StackScreenProps<
  SwapStackParamList,
  "swap-screen"
>;

export type SelectTokenScreenProps = StackScreenProps<
  BuyStackParamList,
  "select-token-screen"
>;

export type FormScreenProps = StackScreenProps<
  BuyStackParamList,
  "form-screen"
>;

export type QuoteScreenProps = StackScreenProps<
  BuyStackParamList,
  "quote-screen"
>;

export type SelectPaymentScreenProps = StackScreenProps<
  BuyStackParamList,
  "select-payment-screen"
>;

export type TransactionBuyDetailsScreenProps = StackScreenProps<
  BuyStackParamList,
  "transaction-buy-details-screen"
>;

export type SelectSendTokenScreenProps = StackScreenProps<
  SendStackParamList,
  "select-send-token-screen"
>;

export type FormSendScreenProps = StackScreenProps<
  SendStackParamList,
  "form-send-screen"
>;

export type QuoteSendScreenProps = StackScreenProps<
  SendStackParamList,
  "quote-send-screen"
>;

export type TransactionSendDetailsScreenProps = StackScreenProps<
  SendStackParamList,
  "transaction-send-details-screen"
>;

export type ChooseCurrencyScreenProps = StackScreenProps<
  SwapStackParamList,
  "choose-currency-screen"
>;
export type ReviewOrderScreenProps = StackScreenProps<
  SwapStackParamList,
  "review-order-screen"
>;
export type TransactionDetailsScreenProps = StackScreenProps<
  SwapStackParamList,
  "transaction-swap-details-screen"
>;

export type SplashScreenProps = StackScreenProps<
  WalkthroughStackParamList,
  "splash-screen"
>;
export type OnboardingScreenProps = StackScreenProps<
  WalkthroughStackParamList,
  "onboarding-screen"
>;
export type SetUpSecurityScreenProps = StackScreenProps<
  AuthStackParamList,
  "set-up-security-screen"
>;
export type SecretRecoveryPhaseScreenProps = StackScreenProps<
  AuthStackParamList,
  "secret-phase-screen"
>;
export type CreateWalletScreenProps = StackScreenProps<
  AuthStackParamList,
  "create-wallet-screen"
>;

// bottom tab - app
export type HomeScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  "home-screen"
>;
export type TransactionScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  "transaction-screen"
>;
export type ItemCollectionScreenProps = BottomTabScreenProps<
  BottomTabParamList,
  "item-collection-screen"
>;
