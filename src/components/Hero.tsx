import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="90vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    mb="-20vh"
  >
    <Heading as="h1" fontSize={{ base: '12vw', md: '10vw', lg: '7em' }}>
      {title}
    </Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'alecrem'
}
