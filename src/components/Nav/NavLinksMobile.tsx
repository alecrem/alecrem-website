import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const NavLinksMobile: FC = () => {
  const router = useRouter()
  return (
    <>
      <NextLink passHref href="/" locale={router.locale}>
        <Button as="a" variant="ghost" aria-label="Home" my={2} w="100%">
          Home
        </Button>
      </NextLink>
      <NextLink passHref href="/skills" locale={router.locale}>
        <Button as="a" variant="ghost" aria-label="Skills" my={2} w="100%">
          Skills
        </Button>
      </NextLink>
      <NextLink passHref href="/projects" locale={router.locale}>
        <Button as="a" variant="ghost" aria-label="Projects" my={2} w="100%">
          Projects
        </Button>
      </NextLink>
      <NextLink passHref href="/contact" locale={router.locale}>
        <Button as="a" variant="ghost" aria-label="Contact" my={2} w="100%">
          Contact
        </Button>
      </NextLink>
    </>
  )
}

export default NavLinksMobile
