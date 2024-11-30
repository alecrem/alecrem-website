import {
  Heading,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { EmailIcon, LinkIcon } from '@chakra-ui/icons'
import { Layout } from '@/components/Layout'
import useTranslation from 'next-translate/useTranslation'

const Contact: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Layout title={t('contact.title') + ' | alecrem'}>
      <Heading as="h3" size="lg" color="text" mt={16}>
        {t('contact.title')}
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
        <ListItem>
          <ListIcon as={EmailIcon} color="cyan.500" />
          Bluesky:{' '}
          <ChakraLink
            isExternal
            href="https://bsky.app/profile/karawapo.alecrem.com"
            flexGrow={1}
            mr={2}
          >
            @karawapo.alecrem.com <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Layout>
  )
}

export default Contact
