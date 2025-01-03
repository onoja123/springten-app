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
  "middle-tab": undefined;
  // "transaction-type-stack": Record<string, any>;
};

export type TransactionTypeStackParamList = {
  "swap-stack": undefined;
};

export type SwapStackParamList = {
  "swap-screen": undefined;
  "choose-currency-screen": { title: string };
  "review-order-screen": undefined;
  "transaction-swap-details-screen": undefined;
  "bottom-tab": { screen: string };
};

export type SwapScreenProps = StackScreenProps<
  SwapStackParamList,
  "swap-screen"
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
