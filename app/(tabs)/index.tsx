import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

import { fetchMovies } from "@/services/api";
// import { getTrendingMovies } from "@/services/appwrite";
// import useFetch from "@/services/usefetch";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
// import TrendingCard from "@/components/TrendingCard";

const Index = () => {
  const router = useRouter();

  // The rest of the commented-out code is preserved as is.
  // const {
  //   data: trendingMovies,
  //   loading: trendingLoading,
  //   error: trendingError,
  // } = useFetch(getTrendingMovies);

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    // Semantic markup: Main application container
    <View className="flex-1 bg-primary" role="main">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
        // Semantic markup: Decorative image
        role="presentation"
        aria-hidden={true}
      />

      {/* Semantic markup: Main content scrollable area */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        role="region"
        aria-label="Main content area"
      >
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-14 mb-5 mx-auto"
          // Semantic markup: Application logo
          role="img"
          aria-label="Application logo"
        />

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#ab8bff" // Changed color to match theme for better contrast on dark bg
            className="mt-10 self-center"
            // Semantic markup: Loading indicator
            accessible={true}
            accessibilityLabel="Loading latest movies"
          />
        ) : moviesError || trendingError ? (
          <Text
            // Semantic markup: Error message
            accessible={true}
            accessibilityRole="alert"
            className="text-white text-center mt-10"
          >
            Error: {moviesError?.message || trendingError?.message}
          </Text>
        ) : (
          <View className="flex-1 mt-5">
            {/* SearchBar component already contains semantic markup from previous modifications */}
            <SearchBar
              onPress={() => {
                router.push("/search");
              }}
              placeholder="Search for a movie"
            />

            {/* Trending Movies section is commented out, preserving structure */}
            {trendingMovies && (
              <View className="mt-10">
                T
                <Text className="text-lg text-white font-bold mt-5 mb-3">
                  Latest Movies
                </Text>
              </View>
            )}

            <View role="region" aria-label="Latest movies list">
              <Text
                className="text-lg text-white font-bold mt-5 mb-3"
                // role="header" // Semantic markup: Section header
              >
                Latest Movies
              </Text>

              <FlatList />

              {/* Semantic markup: List of movies */}
              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
                role="list" // Semantic markup: List container
              />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;
