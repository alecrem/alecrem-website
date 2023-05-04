import { Text, Link as ChakraLink, Flex, FlexProps } from '@chakra-ui/react'

const Footer = (props: FlexProps) => (
  <Flex as="footer" py="8rem" {...props}>
    <Text>
      2023{' '}
      <ChakraLink href="https://github.com/alecrem/">
        Alejandro Cremades
      </ChakraLink>
    </Text>
  </Flex>
)

export { Footer }
