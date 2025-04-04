import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    gap="1.5rem"
    width="100%"
    maxWidth="48rem"
    pt="4rem"
    px="1rem"
    {...props}
  />
)
