import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomSearch = () => {
  return (
    <View className="relative">
      <TextInput
        className="bg-white/10 rounded-lg p-4 pl-10 placeholder:text-white/50"
        placeholder="Search"
      />
      <Ionicons
        name="search"
        size={16}
        color={"#FFFFFF80"}
        className="absolute left-3 top-4"
      />
    </View>
  );
};

export default CustomSearch;
