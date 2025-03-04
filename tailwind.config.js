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
        // 'montserrat-bold': ['Montserrat-bold', 'serif'],
        // 'montserrat': ['Montserrat', 'serif'],
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
        transparent: 'transparent',
        'light-100' : '#FFFAFA', //ROSE WHITE
        'light-200' : '#EEEEFF',//TITAN WHITE //
        'background-100': '#0c0c0c',
         
        
      }
    },
  },
  plugins: [],
}
