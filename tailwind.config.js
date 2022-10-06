/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        1600: '1600px',
        400: '400px',
        450: '450px',
        210: '210px',
        550: '550px',
        260: '260px',
        650: '650px',
      },
      height: {
        600: '600px',
        280: '280px',
        900: '900px',
        458: '458px',
      },
      top: {
        ' 50%': '50%',
      },
      backgroundColor: {
        primary: '#F1F1F2',
        blur: '#030303',
      },
      colors: {
        primary: 'rgb(22, 24, 35)',
      },
      height: {
        '88vh': '88vh',
      },
      backgroundImage: {
        'projects-img': "url('https://new-portfolio-prestaverse.vercel.app/assets/images/projects.jpeg')",
      },
      // screens: {
      //   '2xl': {'max': '1535px'},
      //   // => @media (max-width: 1535px) { ... }
  
      //   'xl': {'max': '1279px'},
      //   // => @media (max-width: 1279px) { ... }
  
      //   'lg': {'max': '1023px'},
      //   // => @media (max-width: 1023px) { ... }
  
      //   'md': {'max': '767px'},
      //   // => @media (max-width: 767px) { ... }
  
      //   'sm': {'max': '639px'},
      //   // => @media (max-width: 639px) { ... }

      //   'xs': {'max': '479px'},
      //   // => @media (max-width: 479px) { ... }
      // }
    },
  },
  plugins: [],
}
