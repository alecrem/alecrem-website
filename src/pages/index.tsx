import {
  Heading,
  Text,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import { Layout } from '@/components/Layout'
import useTranslation from 'next-translate/useTranslation'

const Index: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Layout title="alecrem | Alejandro Cremades Rocamora">
      <Text color="text" mt={16}>
        {t('header.tagline')}
        <br />
        {t('header.tagline2')}
      </Text>
      <Heading as="h4" size="md" color="text">
        {t('home.occupations.title')}
      </Heading>
      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href={t('home.occupations.limu-url')}
            flexGrow={1}
            mr={2}
          >
            {t('home.occupations.limu')} <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href={t('home.occupations.kura-url')}
            flexGrow={1}
            mr={2}
          >
            {t('home.occupations.kura')} <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
      <Heading as="h4" size="md" color="text">
        {t('home.memberships.title')}
      </Heading>
      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href={t('home.memberships.henkaku-url')}
            flexGrow={1}
            mr={2}
          >
            {t('home.memberships.henkaku')} <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
      <Heading as="h4" size="md" color="text">
        {t('home.publications.title')}
      </Heading>
      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          <ChakraLink
            isExternal
            href={t('home.publications.dondon-url')}
            flexGrow={1}
            mr={2}
          >
            {t('home.publications.dondon')} <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Layout>
  )
}

export default Index
