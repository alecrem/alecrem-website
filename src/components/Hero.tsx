import { Flex, Heading } from '@chakra-ui/react'
import { useColorMode } from '@/components/ui/color-mode'

export const Hero = ({ title }: { title: string }) => {
  const { colorMode } = useColorMode()
  return (
    <Flex justifyContent="center" alignItems="center" my="4rem">
      <Heading
        as="h1"
        fontSize={{ base: '12vw', md: '10vw', lg: '7em' }}
        color={colorMode === 'dark' ? 'cyan.300' : 'cyan.500'}
      >
        {title}
      </Heading>
    </Flex>
  )
}

Hero.defaultProps = {
  title: 'alecrem'
}
