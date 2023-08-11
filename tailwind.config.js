/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      estedad: ['Estedad'],
      iRANSans: ['IRANSans'],
      laleZar: ['LaleZar'],
      shabnam: ['Shabnam']
    },
    screens: {
      vsmmobile: { max: '580px' },
      smmobile: { min: '581px', max: '903px' },
      mobile: { min: '904px', max: '991px' },
      tablet: { min: '992px', max: '1023px' },
      laptop: { min: '1024px', max: '1239px' },
      desktop: { min: '1240px' }
    },
    extend: {
      colors: {
        color1: 'rgb(var(--color-color1) / <alpha-value>)',
        color2: 'rgb(var(--color-color2) / <alpha-value>)',
        color3: 'rgb(var(--color-color3) / <alpha-value>)',
        color4: 'rgb(var(--color-color4) / <alpha-value>)',
        text1: 'rgb(var(--color-text1) / <alpha-value>)',
        bghovor: 'rgb(var(--color-bghovor) / <alpha-value>)',
        bgmymassage: 'rgb(var(--color-bgmymassage) / <alpha-value>)',
        bgyoumassage: 'rgb(var(--color-bgyoumassage) / <alpha-value>)',
        textcolor: 'rgb(var(--color-textcolor) / <alpha-value>)',
        bluetext1: 'rgb(var(--color-bluetext1) / <alpha-value>)'
      },
      backgroundImage: {
        chatbackground: 'var(--chatbackground)'
      }
    }
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  },
  plugins: []
};
