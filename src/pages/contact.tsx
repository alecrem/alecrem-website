import { Heading, Link as ChakraLink, List } from '@chakra-ui/react'
import { LuMail, LuExternalLink } from 'react-icons/lu'
import { Layout } from '@/components/Layout'
import useTranslation from 'next-translate/useTranslation'

const Contact: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Layout title={t('contact.title') + ' | alecrem'}>
      <Heading as="h3" size="lg" color="text" mt={16}>
        {t('contact.title')}
      </Heading>
      <List.Root listStyle="none" gap={3} my={0} color="text">
        <List.Item>
          <List.Indicator asChild color="cyan.500">
            <LuMail />
          </List.Indicator>
          E-mail:{' '}
          <ChakraLink href="mailto:ale@alecrem.com" flexGrow={1} mr={2}>
            ale@alecrem.com
          </ChakraLink>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="cyan.500">
            <LuMail />
          </List.Indicator>
          Bluesky:{' '}
          <ChakraLink
            href="https://bsky.app/profile/karawapo.alecrem.com"
            flexGrow={1}
            mr={2}
          >
            @karawapo.alecrem.com <LuExternalLink />
          </ChakraLink>
        </List.Item>
        <List.Item>
          <List.Indicator asChild color="cyan.500">
            <LuMail />
          </List.Indicator>
          Mastodon:{' '}
          <ChakraLink
            href="https://mastodon.social/@karawapo"
            flexGrow={1}
            mr={2}
          >
            @karawapo@mastodon.social <LuExternalLink />
          </ChakraLink>
        </List.Item>
      </List.Root>
    </Layout>
  )
}

export default Contact
