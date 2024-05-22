/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'pink': '#D000E7',
      'g-purple': '#16014F',
      'base_purple': '#D000E7',
      'pinki': '#290069',
    },
      height: {
        '97': '22.7rem',
        '100': '39rem',
        '98': '28rem',
        '101': '27.5rem',
        '102': '27rem',
        '99': '24rem',
        '103': '25rem',
        '104': '22rem',

      },
      padding: {
        '100': '35rem'
      },
      margin: {
        '100': '32rem',
        '97': '25rem',
        '110': '35rem',
        '98': '28rem',
        '38': '9.5rem',
        '73': '19.3rem',
        '99': '25.5rem',
        '101': '27rem',
        '102': '29rem',
        '103': '31rem',
        '65': '17rem',
        '111': '68rem',
         '112': '60rem',
         '113': '55rem',
         '114': '50rem',
         '115': '26.9rem',
         '116': '40rem',
         '117': '22rem',
         '118': '11.5rem',
         '119': '23rem',
         '120': '39rem',
         '121': '30rem',
         '122': '14.5rem',
         '123': '9.2rem',
         '124': '15.5rem',
         '125': '11.2rem',
         '126': '28.8rem',
         '127':  '10.8rem',
         '128': '5.3rem',
         '129': '16.1rem',
         '130':  '37rem',
         '131': '5.8rem',
         '132': '32.3rem',
         '133': '5.1rem',
         '134': '24.5rem',
         '135': '26rem',
         '136': '12rem',
         '137': '66rem',
         '138': '51.5rem',
         '139': '40.8rem',
         '140': '12.5rem',
         '141': '38.5rem',
         '142': '6.2rem',
         '143': '47rem',
         '144': '59rem',
         '145': '77.9rem',
         '146': '20rem',
         '147': '21rem',
         
      },
      translate: {
        '1': '34.5rem',
        '2': '22.9rem',
        '3': '20.5rem',
        '4': '52.3rem',
        '5': '31.2rem',
        '6': '74rem',
        '7': '79rem',
        '8': '48.5rem',
        '9': '34.7rem',
        '10': '13.5rem'

      },

      width: {
        '97': '25rem',
        '100': '39rem',
        '101': '40.15rem',
        '102': '60rem',
        '103': '90rem',
        '104': '80.5rem',
      },
      borderWidth: {
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
        '13': '13px',
      },
      inset: {
        '100': '38rem',
        
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
}