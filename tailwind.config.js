/* eslint-disable import/no-unresolved */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      keyframes: true
    }
  },
  darkMode: false,
  theme: {
    rotate: {
      '-180': '-180deg',
      5: '5deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
      360: '360deg'
    },
    boxShadow: {
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl':
        '0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: {
          ...colors.trueGray,
          default: '#E5E5E5',
          deepGray: '#727272',
          lightGray: '#7A7A7A',
          input: '#F3F3F3'
        },
        yellow: {
          deepYellow: '#FFCC69',
          lightYellow: '#F4EEE6',
          ...colors.amber
        },
        brown: { default: '#84754F' }
      },
      backgroundImage: {
        logo: "url('../src/image/Da-Nai-Wei-Wei_logo.webp')",
        creditCard: "url('../src/image/creditCard.webp')"
      },
      transition: {
        transition:
          'transition-delay: 500ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);'
      },
      spacing: {
        15: '3.75rem',
        17: '4.25rem',
        46: '182px',
        76: '19rem',
        86: '22rem',
        120: '26rem',
        124: '451px',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        164: '43rem',
        176: '44rem',
        192: '48rem',
        206: '52rem',
        234: '60rem',
        270: '66rem',
        388: '96rem'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        normal: '0',
        wide: '.1em',
        wider: '.2em',
        widest: '.3em'
      },
      zIndex: {
        default: '999'
      },
      transitionDelay: {
        0: '0ms',
        2000: '2000ms'
      },
      width: {
        '9/20': '46%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.process-active': {
          content: '""',
          width: '40px',
          height: '40px',
          backgroundColor: '#FFCC69',
          display: 'block',
          textAlign: 'center',
          borderRadius: '50%',
          margin: '50px auto 10px auto',
          lineHeight: '30px'
        },
        '.process-before': {
          content: '""',
          width: '40px',
          height: '40px',
          backgroundColor: '#ffffff',
          display: 'block',
          textAlign: 'center',
          borderRadius: '50%',
          margin: '50px auto 10px auto',
          lineHeight: '30px'
        },
        '.process-after': {
          content: '""',
          width: '65%',
          height: '4px',
          margin: '0 2%',
          backgroundColor: 'white',
          position: 'absolute',
          top: '57%',
          left: '-35%'
        },
        '.hover': {
          backgroundColor: '#FFFFFF',
          border: '1px solid #FFCC69',
          color: '#FFCC69'
        },
        '.nav-bottom': {
          content: '""',
          height: '1px',
          backgroundColor: 'white',
          width: '95%',
          position: 'absolute',
          top: '17%',
          left: '19%',
          transform: 'translate(-17%, 19%)'
        }
      };
      addUtilities(newUtilities, {
        variants: ['before', 'after', 'hover']
      });
    })
  ]
};
