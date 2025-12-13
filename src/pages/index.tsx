import {
  Heading,
  Text,
  Link as ChakraLink,
  Button,
  List
} from '@chakra-ui/react'
import { LuCircleCheck, LuExternalLink } from 'react-icons/lu'
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
      <List.Root listStyle={'none'} gap={3} my={0} color="text">
        <List.Item>
          <List.Indicator asChild color="cyan.500">
            <LuCircleCheck />
          </List.Indicator>
          <ChakraLink
            href={t('home.occupations.yayoi-url')}
            flexGrow={1}
            mr={2}
          >
            {t('home.occupations.yayoi')} <LuExternalLink />
          </ChakraLink>
        </List.Item>
      </List.Root>
      <Heading as="h4" size="md" color="text">
        {t('home.memberships.title')}
      </Heading>
      <List.Root listStyle={'none'} gap={3} my={0} color="text">
        <List.Item>
          <List.Indicator asChild color="cyan.500">
            <LuCircleCheck />
          </List.Indicator>
          <ChakraLink
            href={t('home.memberships.henkaku-url')}
            flexGrow={1}
            mr={2}
          >
            {t('home.memberships.henkaku')} <LuExternalLink />
          </ChakraLink>
        </List.Item>
      </List.Root>
      <Heading as="h4" size="md" color="text">
        {t('home.conferences.title')}
      </Heading>
      <List.Root listStyle={'none'} gap={3} my={0} color="text">
        <List.Item>
          <List.Indicator asChild color="cyan.500">
            <LuCircleCheck />
          </List.Indicator>
          {t('home.conferences.openla-presentation')}
          <ChakraLink
            href={t('home.conferences.openla-url')}
            flexGrow={1}
            mr={2}
          >
            {t('home.conferences.openla')} <LuExternalLink />
          </ChakraLink>
          {t('home.conferences.openla-description')}
        </List.Item>
      </List.Root>
      <Heading as="h4" size="md" color="text">
        {t('home.publications.title')}
      </Heading>
      <List.Root listStyle={'none'} gap={3} my={0} color="text">
        <List.Item>
          <List.Indicator asChild color="cyan.500">
            <LuCircleCheck />
          </List.Indicator>
          <ChakraLink
            href={t('home.publications.dondon-preview-url')}
            flexGrow={1}
            mr={2}
          >
            {t('home.publications.dondon')} <LuExternalLink />
          </ChakraLink>
          <ChakraLink
            href={t('home.publications.dondon-buy-url')}
            flexGrow={1}
            mr={2}
          >
            <Button variant={'surface'} size={'2xs'}>
              {t('home.publications.buy')}
            </Button>
          </ChakraLink>
          <ChakraLink
            href={t('home.publications.dondon-preview-url')}
            flexGrow={1}
            mr={2}
          >
            <Button variant={'surface'} size={'2xs'}>
              {t('home.publications.preview')}
            </Button>
          </ChakraLink>
        </List.Item>
      </List.Root>
    </Layout>
  )
}

export default Index
