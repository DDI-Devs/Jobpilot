import type { Config } from 'tailwindcss';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)'
        },
        blue: {
          50: 'var(--color-blue-50)',
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
          800: 'var(--color-blue-800)',
          900: 'var(--color-blue-900)'
        },
        green: {
          50: 'var(--color-green-50)',
          100: 'var(--color-green-100)',
          200: 'var(--color-green-200)',
          300: 'var(--color-green-300)',
          400: 'var(--color-green-400)',
          500: 'var(--color-green-500)',
          600: 'var(--color-green-600)',
          700: 'var(--color-green-700)',
          800: 'var(--color-green-800)',
          900: 'var(--color-green-900)'
        },
        yellow: {
          50: 'var(--color-yellow-50)',
          100: 'var(--color-yellow-100)',
          200: 'var(--color-yellow-200)',
          300: 'var(--color-yellow-300)',
          400: 'var(--color-yellow-400)',
          500: 'var(--color-yellow-500)',
          600: 'var(--color-yellow-600)',
          700: 'var(--color-yellow-700)',
          800: 'var(--color-yellow-800)',
          900: 'var(--color-yellow-900)'
        },
        red: {
          50: 'var(--color-red-50)',
          100: 'var(--color-red-100)',
          200: 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
          500: 'var(--color-red-500)',
          600: 'var(--color-red-600)',
          700: 'var(--color-red-700)',
          800: 'var(--color-red-800)',
          900: 'var(--color-red-900)'
        }
      },
      fontSize: {
        'heading-01': ['56px', { lineHeight: '64px', fontWeight: '500' }],
        'heading-02': ['48px', { lineHeight: '56px', fontWeight: '500' }],
        'heading-03': ['40px', { lineHeight: '48px', fontWeight: '500' }],
        'heading-04': ['36px', { lineHeight: '44px', fontWeight: '500' }],
        'heading-05': ['32px', { lineHeight: '40px', fontWeight: '500' }],
        'heading-06': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'body-xl': ['20px', { lineHeight: '32px', fontWeight: '400' }],
        'body-xl-bold': ['20px', { lineHeight: '32px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-lg-bold': ['18px', { lineHeight: '28px', fontWeight: '500' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-md-bold': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'body-sm': ['14px', { lineHeight: '20ox', fontWeight: '400' }],
        'body-sm-bold': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-xs': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'body-xs-bold': ['12px', { lineHeight: '18px', fontWeight: '500' }]
      }
    }
  },
  plugins: []
} satisfies Config;
