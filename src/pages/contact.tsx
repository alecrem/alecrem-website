import {
  Heading,
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { EmailIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { DarkModeSwitch } from '@/components/DarkModeSwitch'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const Contact = () => (
  <Container>
    <Main>
      <Hero title="{ alecrem }" />
      <Heading as="h2" color="text" mt={16}>
        Alejandro Cremades Rocamora
      </Heading>
      <Nav />
      <Heading as="h3" size="lg" color="text" mt={16}>
        Contact
      </Heading>
      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={EmailIcon} color="cyan.500" />
          Twitter:{' '}
          <ChakraLink
            isExternal
            href="https://twitter.com/karawapo"
            flexGrow={1}
            mr={2}
          >
            @karawapo <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={EmailIcon} color="cyan.500" />
          Mastodon:{' '}
          <ChakraLink
            isExternal
            href="https://mastodon.social/@karawapo"
            flexGrow={1}
            mr={2}
          >
            @karawapo@mastodon.social <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>
        2023{' '}
        <ChakraLink href="https://github.com/alecrem/">
          Alejandro Cremades
        </ChakraLink>
      </Text>
    </Footer>
  </Container>
)

export default Contact
