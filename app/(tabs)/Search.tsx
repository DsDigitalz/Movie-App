import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute z-0 w-full"
        resizeMode="cover"
      />

      {/* No ScrollView */}
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 20,
          paddingRight: 20,
          paddingLeft: 20,
          marginBottom: 10,
        }}
        className="mt-2 pb-32"
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-18 " />
            </View>
            <View className="my-5">
              <SearchBar placeholder="Searxh movies..." />
            </View>
          </>
        }
      />

      <Text>Search</Text>
    </View>
  );
};

export default Search;
