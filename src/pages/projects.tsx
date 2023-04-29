import {
  Heading,
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { SmallAddIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { DarkModeSwitch } from '@/components/DarkModeSwitch'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const Skills = () => (
  <Container>
    <Main>
      <Hero title="{ alecrem }" />
      <Heading as="h2" color="text" mt={16}>
        Alejandro Cremades Rocamora
      </Heading>
      <Nav />
      <Heading as="h3" size="lg" color="text" mt={16}>
        Projects
      </Heading>
      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href="https://limu.ait.kyushu-u.ac.jp/~openLA/"
            flexGrow={1}
            mr={2}
          >
            OpenLA (2022-2023) <LinkIcon />
          </ChakraLink>
          : Python module to help with learning analytics
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          Photovoice (2021-2022): ML and DL applied to learning analytics
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

export default Skills
