import { FC } from 'react'
import { Heading } from '@chakra-ui/react'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  tagline?: boolean
}

const Header: FC<Props> = ({ tagline }) => {
  const { t } = useTranslation('common')
  return (
    <>
      <Hero title="{ alecrem }" />
      <Heading as="h2" color="text" mt={16}>
        {t('header.fullname')}
      </Heading>
      {tagline && (
        <Heading as="h3" size="md" color="text" mt={16}>
          {t('header.tagline')}
          <br />
          {t('header.tagline2')}
        </Heading>
      )}
      <Nav />
    </>
  )
}

export { Header }

Header.defaultProps = {
  tagline: false
}
