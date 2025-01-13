import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"; 

const EditableInput = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("JordanAT23");

  return (
    <View className="p-4 bg-[#1C1C1E] rounded-lg">
      {/* Label */}
      <Text className="text-gray-400 text-sm mb-2">Account Name</Text>

      {/* Input Container */}
      <View className="flex-row items-center bg-[#2C2C2E] rounded-lg px-3 py-2">
        {/* Input Field */}
        <TextInput
          className={`flex-1 text-white text-base ${
            isEditing ? "border-b border-gray-400" : ""
          }`}
          value={value}
          onChangeText={setValue}
          editable={isEditing}
          placeholder="Enter Account Name"
          placeholderTextColor="#6B6B6B"
        />

        {/* Icon */}
        <TouchableOpacity
          onPress={() => setIsEditing(!isEditing)}
          className="ml-2"
        >
          <Feather
            name={isEditing ? "check" : "edit"}
            size={16}
            color="#B1B1B1"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditableInput;
