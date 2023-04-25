import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="80vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
    mb={-200}
  >
    <Heading as="h1" fontSize="6vw">
      {title}
    </Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript'
}
