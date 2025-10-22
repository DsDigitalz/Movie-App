import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    // 💡 KEY MODIFICATION: Added semantic role="search" to the outermost container
    <View className="w-full flex-row items-center bg-[#080719] rounded-full px-5 py-3">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
        role="img"
        aria-label="Search icon"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#718096" // Darker Gray
        // focus:outline-none for web compatibility
        className="flex-1 ml-2 text-white text-base font-regular py-3 px-2 focus:outline-none"
        role="searchbox" // Semantic markup: role="searchbox"
        aria-label="Search input"
      />
    </View>
  );
};

export default SearchBar;
