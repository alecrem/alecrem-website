import { ColorModeProvider } from '@/components/ui/color-mode'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from '@/theme'
import { AppProps } from 'next/app'

function MyApp({ pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
