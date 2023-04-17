import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,ts,tsx}'],
  theme: {
    container:{
      center:true
    },
    extend: {},
  },
  plugins: [typography],
} satisfies Config
