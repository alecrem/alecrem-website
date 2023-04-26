import { Link } from '@chakra-ui/react'
import { FC } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const NavLinksDesktop: FC = () => {
  const router = useRouter()
  return (
    <>
      <NextLink passHref href="/" locale={router.locale}>
        <Link _focus={{ boxShadow: 'none' }} href="/" p={4} pr={1}>
          Home
        </Link>
      </NextLink>
      <NextLink passHref href="/skills" locale={router.locale}>
        <Link _focus={{ boxShadow: 'none' }} p={4} pr={1}>
          Skills
        </Link>
      </NextLink>
      <NextLink passHref href="/projects" locale={router.locale}>
        <Link _focus={{ boxShadow: 'none' }} p={4} pr={1}>
          Projects
        </Link>
      </NextLink>
      <NextLink passHref href="/contact" locale={router.locale}>
        <Link _focus={{ boxShadow: 'none' }} p={4} pr={1}>
          Contact
        </Link>
      </NextLink>
    </>
  )
}

export default NavLinksDesktop
