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
    <Heading as="h1" fontSize="8vw">
      {title}
    </Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'alecrem'
}
