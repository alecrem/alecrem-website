import { createSystem, defaultConfig } from '@chakra-ui/react'

// import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: { mono: { value: `'Menlo', monospace` } },
      colors: {
        text: {
          default: { value: '#222' },
          _dark: { value: '#cff' }
        },
        heroGradientStart: {
          default: { value: '#0dd' },
          _dark: { value: '#0ff' }
        },
        heroGradientEnd: {
          default: { value: '#0dd' },
          _dark: { value: '#0ff' }
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

// const theme = extendTheme({
//   styles: {
//     global: (props: StyleFunctionProps) => ({
//       'html, body, Container': {
//         bg: mode('gray.50', 'gray.900')(props)
//       }
//     })
//   }
// })

// export default theme
