import {
  Heading,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { EmailIcon, LinkIcon } from '@chakra-ui/icons'
import { Layout } from '@/components/Layout'

const Contact = () => (
  <Layout title="Contact | alecrem">
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
  </Layout>
)

export default Contact
