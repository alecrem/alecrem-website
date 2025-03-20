import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: { mono: { value: `'Menlo', monospace` } },
      colors: {
        text: {
          default: { value: '#222' },
          _dark: { value: '#cff' }
        },
        black: { value: '#222' },
        cyan: {
          DEFAULT: { value: '#0dd' },
          100: { value: '#cff' },
          300: { value: '#8ff' },
          500: { value: '#0dd' },
          600: { value: '#0aa' },
          700: { value: '#088' },
          800: { value: '#066' },
          900: { value: '#044' }
        }
      },
      radii: {
        button: { value: '12px' }
      },
      breakpoints: {
        sm: { value: '40em' },
        md: { value: '52em' },
        lg: { value: '64em' },
        xl: { value: '80em' }
      }
    }
  }
})
