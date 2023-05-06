import { Button, Box } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const NavLinksDesktop: FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <>
      <Box mr={4}>
        <NextLink passHref href="/" locale={router.locale}>
          <Button variant="solid" aria-label="Home" w="100%">
            {t('header.nav.index')}
          </Button>
        </NextLink>
      </Box>
      <Box mr={4}>
        <NextLink passHref href="/skills" locale={router.locale}>
          <Button variant="solid" aria-label="Skills" w="100%">
            {t('header.nav.skills')}
          </Button>
        </NextLink>
      </Box>
      <Box mr={4}>
        <NextLink passHref href="/projects" locale={router.locale}>
          <Button variant="solid" aria-label="Projects" w="100%">
            {t('header.nav.projects')}
          </Button>
        </NextLink>
      </Box>
      <Box mr={4}>
        <NextLink passHref href="/contact" locale={router.locale}>
          <Button variant="solid" aria-label="Contact" w="100%">
            {t('header.nav.contact')}
          </Button>
        </NextLink>
      </Box>
    </>
  )
}

export default NavLinksDesktop
