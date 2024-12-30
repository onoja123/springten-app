import { View, Text } from "react-native";
import React from "react";

type Props = {
  title: string;
  subTitle: string;
  textClass?: string;
};
const TitleAndSubTitle = (props: Props) => {
  const { subTitle, title, textClass } = props;
  return (
    <View className={"p-3"}>
      <Text className={`text-white text-2xl font-medium ${textClass}`}>
        {title}
      </Text>
      <Text className={`text-white/50 text-sm ${textClass}`}>{subTitle}</Text>
    </View>
  );
};

export default TitleAndSubTitle;
