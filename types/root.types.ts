import { NavigatorScreenParams } from "@react-navigation/native";

export type MaineStackParamList = {
  HomeNav: NavigatorScreenParams<HomeStackParamList>;
  AuthNav: NavigatorScreenParams<AuthStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
  Talons: undefined;
  Prices: undefined;
  Promotions: undefined;
  Map: undefined;
};

export type AuthStackParamList = {
  InputPhoneScreen: undefined;
  ConfirmPhoneScreen: { phone: string; code: string };
  NameScreen: undefined;
};
