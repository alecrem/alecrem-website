import { FC, useState } from 'react'
import {
  Heading,
  HStack,
  VStack,
  Image,
  IconButton,
  Flex
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NavLinksMobile from '@/components/Nav/NavLinksMobile'
import NavLinksDesktop from '@/components/Nav/NavLinksDesktop'

const Nav: FC = () => {
  const [display, changeDisplay] = useState('none')
  return (
    <>
      <Flex>
        <Flex position="fixed" top="1rem" right="1rem" align="center">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay('flex')}
            // Mobile only
            display={['flex', 'flex', 'none', 'none']}
          />
        </Flex>

        <Flex
          w="100vw"
          // Only when menu open
          display={display}
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Close Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay('none')}
            />
          </Flex>
        </Flex>
      </Flex>

      <Flex
        // Desktop only
        display={['none', 'none', 'flex', 'flex']}
        direction="row"
        pl={'88px'}
      >
        <NavLinksDesktop />
      </Flex>
    </>
  )
}

export { Nav }
