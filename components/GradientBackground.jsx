// // src/components/GradientBackground.ios.js
// // AND
// // src/components/GradientBackground.android.js

// import React from "react";
// import LinearGradient from "react-native-linear-gradient";

// // Use the same colors defined in Index.js
// const BACKGROUND_COLORS = [
//   "#02000a", // Start (Bottom)
//   "#030014", // Middle
//   "#350e00", // End (Top)
// ];

// const GradientBackground = ({ children, ...props }) => {
//   return (
//     <LinearGradient
//       colors={BACKGROUND_COLORS}
//       // Added locations to fix the issue where only the middle color showed on the device
//       locations={[0.0, 0.5, 1.0]}
//       // 'to-t' (bottom to top) direction
//       start={{ x: 0.5, y: 1.0 }}
//       end={{ x: 0.5, y: 0.0 }}
//       className="flex-1"
//       {...props}
//     >
//       {children}
//     </LinearGradient>
//   );
// };

// export default GradientBackground;
