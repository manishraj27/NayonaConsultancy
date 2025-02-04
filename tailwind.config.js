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
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'grotesk': ['CabinetGrotesk-Variable', 'sans-serif'],
      },
      fontSize: {
        'title': ['clamp(2rem, 10vw, 6rem)'],
        'heading-1': ['clamp(2.5rem, 6.5vw, 10rem)'],
        'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
        'heading-3': ['clamp(2rem, 5vw, 2.75rem)'], 
        'heading-4': ['clamp(1.5rem, 4vw, 2rem)'],
        'body-1': ['clamp(1.1rem, 2vw, 1.3rem)'], 
        'body-2': ['clamp(1rem, 1.5vw, 1.5rem)'],
        'body-3': '1.1rem',
        'body-4': ['clamp(0.75rem, 3vw, 1rem)'],
      },
      letterSpacing: {
        'wide': '0.025em',
        'wider': '0.05em',
      },
      colors: {
        transparent: 'transparent',
        
        // Primary Colors
        'primary-100': '#1c1431', // Deep Indigo - used for main background and deep accents
        'primary-200': '#2d1a4b', // Rich Violet - used for headings and button hover states
        'primary-300': '#46265d', // Royal Purple - used for call-to-action buttons
        'primary-400': '#5c3a77', // Velvet Violet - subtle background or section dividers
        
        // Secondary Colors
        'secondary-100': '#0d0d0d', // Obsidian Black - used for dark backgrounds and text contrast
        'secondary-200': '#262626', // Charcoal Blue - used for dark-themed buttons
        'secondary-300': '#444444', // Graphite Gray - used for navigation bars or side menus
        'secondary-400': '#616161', // Muted Gray - used for text highlights or borders
        'secondary-500': '#797979', // Steel Gray - used for text or muted icons

        // Accent Colors
        'accent-100': '#c57ce2', // Lavender Rose - used for call-to-action buttons and accent details
        'accent-200': '#e7e6e7', // Soft White - used for subtle text or section highlights //LIGHT BG 
        'accent-300': '#a026e1', // Cyber Magenta - used for buttons, highlights, or link colors
        'accent-400': '#e4a484', // Warm Peach - used for subtle text or section dividers
        
        // Highlight Colors
        'highlight-100': '#f7d1e2', // Light Pink - used for lighter accents or hover effects
        'highlight-200': '#e0d6ec', // Pale Lavender - used for background highlights or soft borders
        'highlight-300': '#d3e8f0', // Frosted Lilac - used for subtle background accents or cards

        // Background Colors
        'background-100': '#0c0c0c', // Night Black - used for the primary background color
        'background-200': '#13101b', // Charcoal Blue - used for card backgrounds and sections
        
        // Highlighted Text and Elements
        'highlight-400': '#c2c2c2', // Ash Gray - used for light text on dark backgrounds
        'highlight-500': '#cdaadd', // Frosted Lilac - used for titles and highlighted sections
        
        // Muted Tone
        'subtleGray': '#848484', // Muted Gray - used for borders or subtle divider lines
        'softPeach': '#e4a484', // Warm Peach - used for form field highlights or muted backgrounds
      }
    },
  },
  plugins: [],
}
