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
  // "transaction-type-stack": Record<string, any>;
};

export type TransactionTypeStackParamList = {
  "swap-stack": undefined;
  "buy-stack": undefined;
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
  "quote-screen": undefined;
  "select-payment-screen": undefined;
  "transaction-buy-details-screen": undefined;
  "bottom-tab": { screen: string };
};

export type SellStackParamList = {
  "select-token-screen": { title: string };
  "form-screen": undefined;
  "quote-screen": undefined;
  "select-payment-screen": undefined;
  "transaction-sell-details-screen": undefined;
  "bottom-tab": { screen: string };
};


export type SendStackParamList = {
  "select-token-screen": { title: string };
  "form-screen": undefined;
  "quote-screen": undefined;
  "transaction-send-details-screen": undefined;
  "bottom-tab": { screen: string };
};

export type StakeStackParamList = {
  "select-token-screen": { title: string };
  "form-screen": undefined;
  "choose-item-screen": undefined;
  "quote-screen": undefined;
  "bottom-tab": { screen: string };
};

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
  "select-token-screen"
>;

export type FormSendScreenProps = StackScreenProps<
  SendStackParamList,
  "form-screen"
>;

export type QuoteSendScreenProps = StackScreenProps<
  SendStackParamList,
  "quote-screen"
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
