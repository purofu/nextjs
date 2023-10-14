
import type { Config } from 'tailwindcss'
import { colors } from './colors'
import { typography } from './typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: colors,
      fontSize: {
        ...Object.fromEntries(
          Object.entries(typography).map(([key, { fontSize }]) => [
            key,
            fontSize.large,  // Default to large size
          ])
        ),
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      //... Additional configurations
    },
  },
  plugins: [],
}

export default config
