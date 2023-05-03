import {
  Heading,
  Link as ChakraLink,
  Text,
  Badge,
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

const Projects = () => (
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
            <b>OpenLA</b> (Kyushu University, 2022-2023) <LinkIcon />
          </ChakraLink>
          <br />
          Python module to help with learning analytics
          <br />
          <Badge colorScheme="cyan">Python</Badge>{' '}
          <Badge colorScheme="cyan">PyPI</Badge>{' '}
          <Badge colorScheme="cyan">Maintainer</Badge>{' '}
          <Badge colorScheme="cyan">Open Source</Badge>
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <b>Photovoice</b> (Kyushu University, 2021-2022)
          <br />
          ML and DL applied to learning analytics
          <br />
          <Badge colorScheme="cyan">Python</Badge>{' '}
          <Badge colorScheme="cyan">ML</Badge>{' '}
          <Badge colorScheme="cyan">DL</Badge>{' '}
          <Badge colorScheme="cyan">Core Contributor</Badge>{' '}
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href="https://nengajo.henkaku.org/"
            flexGrow={1}
            mr={2}
          >
            <b>Henkaku Nengajo</b> (Henkaku, 2022) <LinkIcon />
          </ChakraLink>
          <br />
          web3 frontend to Polygon blockchain and other APIs
          <br />
          <Badge colorScheme="cyan">Next.js</Badge>{' '}
          <Badge colorScheme="cyan">React</Badge>{' '}
          <Badge colorScheme="cyan">web3</Badge>{' '}
          <Badge colorScheme="cyan">Core Contributor</Badge>{' '}
          <Badge colorScheme="cyan">Open Source</Badge>
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href="https://omise.henkaku.org/"
            flexGrow={1}
            mr={2}
          >
            <b>Henkaku Omise</b> (Henkaku, 2022) <LinkIcon />
          </ChakraLink>
          <br />
          web3 frontend to Polygon blockchain and other APIs
          <br />
          <Badge colorScheme="cyan">Next.js</Badge>{' '}
          <Badge colorScheme="cyan">React</Badge>{' '}
          <Badge colorScheme="cyan">web3</Badge>{' '}
          <Badge colorScheme="cyan">Solidity</Badge>{' '}
          <Badge colorScheme="cyan">Contributor</Badge>{' '}
          <Badge colorScheme="cyan">Open Source</Badge>
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <b>Studio Kura intranet</b> (Studio Kura, 2012-2023)
          <br />
          Management database for a business that grew from 1 person and 1
          location
          <br />
          <Badge colorScheme="cyan">Ionic</Badge>{' '}
          <Badge colorScheme="cyan">CakePHP</Badge>{' '}
          <Badge colorScheme="cyan">Core Contributor</Badge>{' '}
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <b>Studio Kura curriculum</b> (Studio Kura, 2012-2023)
          <br />
          p5.js and web3 activities for kids learning programming in an active
          learning environment
          <br />
          <Badge colorScheme="cyan">p5.js</Badge>{' '}
          <Badge colorScheme="cyan">Ionic</Badge>{' '}
          <Badge colorScheme="cyan">Angular</Badge>{' '}
          <Badge colorScheme="cyan">Core Contributor</Badge>{' '}
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <b>ChallengeHub</b> (Djinn Mentor, 2019-2021)
          <br />
          Data-driven active learning solution
          <br />
          <Badge colorScheme="cyan">Jekyll</Badge>{' '}
          <Badge colorScheme="cyan">Ionic</Badge>{' '}
          <Badge colorScheme="cyan">Angular</Badge>{' '}
          <Badge colorScheme="cyan">Co-founder</Badge>{' '}
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href="https://github.com/RenovoSolutions/ngx-datetimepicker"
            flexGrow={1}
            mr={2}
          >
            <b>ngx-datetimepicker</b> (Renovo Solutions, 2019) <LinkIcon />
          </ChakraLink>
          <br />
          Angular date and time picker component
          <br />
          <Badge colorScheme="cyan">Angular</Badge>{' '}
          <Badge colorScheme="cyan">Contributor</Badge>{' '}
          <Badge colorScheme="cyan">Open Source</Badge>
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href="https://iroiro-connect.com/"
            flexGrow={1}
            mr={2}
          >
            <b>iroiro connect</b> (iroiro connect, 2023) <LinkIcon />
          </ChakraLink>
          <br />
          Personal website with a contact form that talks to the Airtable API
          <br />
          <Badge colorScheme="cyan">Next.js</Badge>{' '}
          <Badge colorScheme="cyan">React</Badge>{' '}
          <Badge colorScheme="cyan">Core Contributor</Badge>{' '}
          <Badge colorScheme="cyan">Open Source</Badge>
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href="https://middleschooltutor.alecrem.com/"
            flexGrow={1}
            mr={2}
          >
            <b>Middle School Tutor</b> (2022-2023) <LinkIcon />
          </ChakraLink>
          <br />
          Gaming tool for Magic The Gathering's Middle School format
          <br />
          <Badge colorScheme="cyan">Next.js</Badge>{' '}
          <Badge colorScheme="cyan">React</Badge>{' '}
          <Badge colorScheme="cyan">Python</Badge>{' '}
          <Badge colorScheme="cyan">Core Contributor</Badge>{' '}
          <Badge colorScheme="cyan">Open Source</Badge>
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href="https://binguerah.pepinismo.net/"
            flexGrow={1}
            mr={2}
          >
            <b>Binguerah</b> (2023) <LinkIcon />
          </ChakraLink>
          <br />
          Real-time interaction tool for podcasts
          <br />
          <Badge colorScheme="cyan">Next.js</Badge>{' '}
          <Badge colorScheme="cyan">React</Badge>{' '}
          <Badge colorScheme="cyan">p5.js</Badge>{' '}
          <Badge colorScheme="cyan">Core Contributor</Badge>{' '}
          <Badge colorScheme="cyan">Open Source</Badge>
          <Badge colorScheme="cyan">Podcasting</Badge>{' '}
        </ListItem>
        <ListItem>
          <ListIcon as={SmallAddIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href="https://escuchaespanol.com/"
            flexGrow={1}
            mr={2}
          >
            <b>Escucha español</b> (2009-2016) <LinkIcon />
          </ChakraLink>
          <br />
          Premium site and custom podcast feed
          <br />
          <Badge colorScheme="cyan">CakePHP</Badge>{' '}
          <Badge colorScheme="cyan">Core Contributor</Badge>{' '}
          <Badge colorScheme="cyan">Podcasting</Badge>{' '}
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

export default Projects
