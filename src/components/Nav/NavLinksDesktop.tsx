import { Button, Box } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const NavLinksDesktop: FC = () => {
  const router = useRouter()
  return (
    <>
      <Box mr={4}>
        <NextLink passHref href="/" locale={router.locale}>
          <Button as="a" variant="solid" aria-label="Home" w="100%">
            Home
          </Button>
        </NextLink>
      </Box>
      <Box mr={4}>
        <NextLink passHref href="/skills" locale={router.locale}>
          <Button as="a" variant="solid" aria-label="Skills" w="100%">
            Skills
          </Button>
        </NextLink>
      </Box>
      <Box mr={4}>
        <NextLink passHref href="/projects" locale={router.locale}>
          <Button as="a" variant="solid" aria-label="Projects" w="100%">
            Projects
          </Button>
        </NextLink>
      </Box>
      <Box mr={4}>
        <NextLink passHref href="/contact" locale={router.locale}>
          <Button as="a" variant="solid" aria-label="Contact" w="100%">
            Contact
          </Button>
        </NextLink>
      </Box>
    </>
  )
}

export default NavLinksDesktop
