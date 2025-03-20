import NextLink from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack
} from '@chakra-ui/react'
import { useColorMode } from '@/components/ui/color-mode'

import { LuMenu, LuX } from 'react-icons/lu'
import { NavLanguageButtons } from '@/components/Nav/NavLanguageButtons'

const Links = ['index', 'projects', 'skills', 'contact']

interface Props {
  href: string
}
const NavLink: React.FC<Props> = ({ href }) => {
  const actualHref = href === 'index' ? '/' : href
  const { t } = useTranslation('common')
  const router = useRouter()
  console.log('href', href, 'actualHref', actualHref)
  const { colorMode } = useColorMode()
  return (
    <>
      <NextLink
        passHref
        legacyBehavior
        href={actualHref}
        locale={router.locale}
      >
        <Link variant={'underline'} px={2} py={1} rounded={'md'}>
          {t('header.nav.' + href)}
        </Link>
      </NextLink>
    </>
  )
}

const Nav = () => {
  const { open, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            variant="surface"
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={open ? onClose : onOpen}
          >
            {open ? <LuX /> : <LuMenu />}
          </IconButton>
          <HStack gap={8} alignItems={'center'}>
            <HStack as={'nav'} gap={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} href={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <NavLanguageButtons size={'xs'} />
          </Flex>
        </Flex>

        {open ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} gap={4}>
              {Links.map((link) => (
                <NavLink key={link} href={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export { Nav }
