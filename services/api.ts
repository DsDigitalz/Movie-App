// // A. Store the secure token (Ideally in a secure environment variable file)
// const TMDB_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdwQ1Q1Q1N..."; // Replace with your full token

// // B. Define the base URL/Endpoint
// const DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

// // C. The async function to fetch data
// const fetchMovies = async () => {
//   try {
//     const response = await fetch(DISCOVER_URL, {
//       method: 'GET',
//       headers: {
//         // 1. Authorization: Use the Bearer Token format
//         'Authorization': `Bearer ${TMDB_ACCESS_TOKEN}`,

//         // 2. Accept: Define the expected response type
//         'accept': 'application/json'
//       },
//     });

//     // Handle HTTP errors
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data.results); // Logs the array of movie objects
//     return data.results;

//   } catch (error) {
//     console.error("Failed to fetch TMDB data:", error);
//     return [];
//   }
// };

// // Example usage:
// // fetchMovies();

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    // Assumes TMDB_CONFIG.headers contains the Authorization: Bearer token
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    // Modify to be more robust, including the status code in the error
    throw new Error(
      `Failed to fetch movies: ${response.status} ${response.statusText}`
    );
  }

  // FIX: Removed the extraneous dot before response.json()
  const data = await response.json();

  // Return the raw data results
  return data.results;
};
