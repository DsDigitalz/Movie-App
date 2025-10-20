import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gradient-to-t from-[#02000a] via-[#030014] to-[#350e00]">
      {/* Background */}
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-4 z-0"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        {/* Logo */}
        <Image source={icons.logo} className="mx-auto mt-16 mb-5" />
        {/* Seachbar */}
        <View className="flex-1 mt-5">
          <SearchBar
            onPress={() => router.push("/Search")}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
