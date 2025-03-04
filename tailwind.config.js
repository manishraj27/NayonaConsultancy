/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md2': '872px'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'grotesk': ['CabinetGrotesk-Variable', 'sans-serif'],
      },
      fontSize: {
        'title': ['clamp(2rem, 10vw, 6rm)'],
        'footer': ['clamp(5rem, 15vw, 20rem)'],
        'heading-1': ['clamp(2.5rem, 6.5vw, 10rem)'],
        'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
        'heading-3': ['clamp(2rem, 5vw, 2.75rem)'], 
        'heading-4': ['clamp(1.5rem, 4vw, 2rem)'],
        'body-1': ['clamp(1.1rem, 2vw, 1.3rem)'], 
        'body-2': ['clamp(1rem, 1.5vw, 1.5rem)'],
        'body-3': '1.1rem',
        'body-4': ['clamp(0.75rem, 3vw, 1rem)'],
        'body-5': ['clamp(0.60rem, 2vw, 0.85rem)'],
      },
      letterSpacing: {
        'wide': '0.025em',
        'wider': '0.05em',
      },
      colors: {
        // Fixed Colors
        'light-100': '#FFFAFA', // Rose White
        'light-200': '#EEEEFF', // Titan White
        'background-100': '#0c0c0c', // Dark background

        // Primary Colors (Professional Blues)
        'primary-100': '#E6F2FF', // Lightest, subtle background or hover state
        'primary-200': '#B3D9FF', // Light blue, soft interactive elements
        'primary-300': '#4A90E2', // Main brand blue, primary buttons, links
        'primary-400': '#2C5282', // Deep blue, active states, strong emphasis

        // Secondary Colors (Blue-Purple Gradient)
        'secondary-100': '#F5F3FF', // Very light lavender, subtle background
        'secondary-200': '#E6E6FA', // Soft lavender, card backgrounds
        'secondary-300': '#8A92B2', // Muted blue-gray, headings, icons
        'secondary-400': '#5A6ACF', // Deep blue-purple, section backgrounds
        'secondary-500': '#4338CA', // Rich indigo, strong secondary actions
        'secondary-600': '#312E81', // Dark indigo, deep sections
        'secondary-700': '#1E1B4B', // Very dark indigo, contrast elements

        // Accent Colors (Vibrant Highlights)
        'accent-100': '#C7D2FE', // Soft periwinkle, subtle highlights
        'accent-200': '#A5B4FC', // Light purple-blue, hover states
        'accent-300': '#818CF8', // Vibrant purple-blue, CTAs
        'accent-400': '#6366F1', // Bright indigo, interactive accents
      },
      textColor: {
        // Text colors optimized for readability
        'on-light': '#1A202C', // Dark gray for light backgrounds
        'on-dark': '#E2E8F0', // Light gray for dark backgrounds
        'primary': '#2C5282', // Primary text color
        'secondary': '#4A5568', // Secondary text color
      },
      backgroundColor: {
        // Background color utilities
        'brand-light': '#E6F2FF',
        'brand-dark': '#2C5282',
      },
      borderColor: {
        // Border color utilities
        'subtle': '#B3D9FF',
        'strong': '#4A90E2',
      },
    },
  },
  plugins: [],
}