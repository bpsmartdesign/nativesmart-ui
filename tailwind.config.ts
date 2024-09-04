export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify where NativeWind should look for classes
  theme: {
    extend: {
      colors: {
        primary: "#19d241", // Custom primary color for UI components
        secondary: "#ff772c", // Custom secondary color
      },
      fontSize: {
        xxs: "0.25rem", // Extra extra small font size
      },
      fontFamily: {
        title: ["Baloo 2", "sans-serif"], // Custom title font
        text: ["Josefin Sans", "sans-serif"], // Custom body text font
      },
    },
  },
  plugins: [], // No plugins for now (NativeWind doesn't use Tailwind plugins like web)
};
