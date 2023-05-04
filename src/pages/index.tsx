import {
  Heading,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Layout } from '@/components/Layout'

const Index = () => (
  <Layout tagline={true} title="alecrem | Alejandro Cremades Rocamora">
    <Heading as="h4" size="md" color="text">
      Current occupations
    </Heading>
    <List spacing={3} my={0} color="text">
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        <ChakraLink
          isExternal
          href="https://limu.ait.kyushu-u.ac.jp/e/"
          flexGrow={1}
          mr={2}
        >
          Kyushu University Laboratory for Image and Media Understanding{' '}
          <LinkIcon />
        </ChakraLink>
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        <ChakraLink
          isExternal
          href="https://studiokura.info/en/"
          flexGrow={1}
          mr={2}
        >
          Studio Kura <LinkIcon />
        </ChakraLink>
      </ListItem>
    </List>
    <Heading as="h4" size="md" color="text">
      Memberships
    </Heading>
    <List spacing={3} my={0} color="text">
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        <ChakraLink
          isExternal
          href="https://henkaku.org/ja/henkaku-community/"
          flexGrow={1}
          mr={2}
        >
          Chiba Institute of Technology Henkaku Community <LinkIcon />
        </ChakraLink>
      </ListItem>
    </List>
    <Heading as="h4" size="md" color="text">
      Publications
    </Heading>
    <List spacing={3} my={0} color="text">
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        <ChakraLink
          isExternal
          href="https://amzn.to/3V7imAm"
          flexGrow={1}
          mr={2}
        >
          どんどん話せるスペイン語 作文トレーニング (2016) <LinkIcon />
        </ChakraLink>
      </ListItem>
    </List>
  </Layout>
)

export default Index
