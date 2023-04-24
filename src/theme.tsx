import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
}

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#222',
        _dark: '#cff'
      },
      heroGradientStart: {
        default: '#0dd',
        _dark: '#0ff'
      },
      heroGradientEnd: {
        default: '#0dd',
        _dark: '#0ff'
      }
    },
    radii: {
      button: '12px'
    }
  },
  colors: {
    black: '#222',
    cyan: {
      100: '#cff',
      300: '#8ff',
      500: '#0dd',
      600: '#0aa',
      700: '#088',
      800: '#066',
      900: '#044'
    }
  },
  fonts,
  breakpoints
})

export default theme
