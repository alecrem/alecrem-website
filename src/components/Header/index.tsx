import { FC } from 'react'
import { Heading } from '@chakra-ui/react'
import { Hero } from '@/components/Hero'
import { Nav } from '@/components/Nav'

interface Props {
  tagline?: boolean
}

const Header: FC<Props> = ({ tagline }) => {
  return (
    <>
      <Hero title="{ alecrem }" />
      <Heading as="h2" color="text" mt={16}>
        Alejandro Cremades Rocamora
      </Heading>
      {tagline && (
        <Heading as="h3" size="md" color="text" mt={16}>
          Software engineer
          <br />
          Front end, web3, data analysis, machine learning
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
