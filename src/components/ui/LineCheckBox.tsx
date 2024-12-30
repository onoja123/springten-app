import { View, Text, Switch } from "react-native";
import React from "react";
import FaceId from "@/assets/icons/face_id.svg";

type Props = {
  isSwitch?: boolean;
};

const LineCheckBox = (props: Props) => {
  const { isSwitch } = props;
  return (
    <View
      className={`w-full bg-white/10 rounded-lg p-3 flex-row justify-between items-center`}
    >
      {isSwitch && (
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
