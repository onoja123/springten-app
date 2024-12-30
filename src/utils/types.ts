import { StackScreenProps } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  "walkthrough-stack": undefined;
  "auth-stack": undefined;
  "bottom-tab": undefined;
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
};

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
