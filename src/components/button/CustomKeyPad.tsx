import { Text, TouchableOpacity, View } from "react-native";

const CustomKeypad = ({
  onPressKey,
}: {
  onPressKey: (key: string) => void;
}) => (
  <View className="flex-row flex-wrap justify-center gap-2 p-3">
    {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "⌫"].map((key) => (
      <TouchableOpacity
        key={key}
        className="w-32 h-16 items-center justify-center rounded-lg"
        onPress={() => onPressKey(key)}
      >
        <Text className="text-white text-2xl">{key}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default CustomKeypad;
