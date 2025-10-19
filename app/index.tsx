import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-semibold text-dark-200">Welcome</Text>
      <Link
        href="/onboarding"
        className="mt-5 px-4 py-2  rounded"
      >Onboarding</Link>
    </View>
  );
}
