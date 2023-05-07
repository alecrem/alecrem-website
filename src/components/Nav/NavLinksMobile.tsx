import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const NavLinksMobile: FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <>
      <NextLink passHref href="/" locale={router.locale}>
        <Button variant="solid" aria-label="Home" my={2} w="100%">
          {t('header.nav.index')}
        </Button>
      </NextLink>
      <NextLink passHref href="/projects" locale={router.locale}>
        <Button variant="solid" aria-label="Projects" my={2} w="100%">
          {t('header.nav.projects')}
        </Button>
      </NextLink>
      <NextLink passHref href="/skills" locale={router.locale}>
        <Button variant="solid" aria-label="Skills" my={2} w="100%">
          {t('header.nav.skills')}
        </Button>
      </NextLink>
      <NextLink passHref href="/contact" locale={router.locale}>
        <Button variant="solid" aria-label="Contact" my={2} w="100%">
          {t('header.nav.contact')}
        </Button>
      </NextLink>
    </>
  )
}

export default NavLinksMobile
