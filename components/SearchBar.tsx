import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";


interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-[#02000a85]   rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        placeholderTextColor="a8b5db"
        className="flex-1 ml-2 py-4 px-5 text-white"
      />
      <Text>SearchBar</Text>
    </View>
  );
};

export default SearchBar;
