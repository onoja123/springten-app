import { View, Text, Switch, TouchableOpacity } from "react-native";
import React from "react";
import FaceId from "@/assets/icons/face_id.svg";

type Props = {
  isSwitch?: boolean;
  checkbox?: boolean;
  title?: string;
};

const LineCheckBox = (props: Props) => {
  const { isSwitch, checkbox, title } = props;
  return (
    <View
      className={`w-full bg-white/10 rounded-lg p-3 flex-row justify-between items-center`}
    >
      {checkbox && (
        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            activeOpacity={0.6}
            className="border-2 border-white/50 w-5 h-5"
          ></TouchableOpacity>
          <Text className="text-white text-sm">
            I agree to buyer’s{" "}
            <Text className="text-text-link">terms & condition</Text>
          </Text>
        </View>
      )}
      {title && <Text className="text-white text-sm">{title}</Text>}
      {isSwitch && !title && (
        <View className="flex-row items-center gap-3">
          <View className="w-12 h-12 justify-center items-center rounded-full bg-white/10">
            <FaceId />
          </View>
          <View>
            <Text className="text-sm text-white font-medium">Face ID</Text>
            <Text className="text-sm text-white/50">
              Use Face ID Authentication
            </Text>
          </View>
        </View>
      )}
      {isSwitch && <Switch />}
    </View>
  );
};

export default LineCheckBox;
