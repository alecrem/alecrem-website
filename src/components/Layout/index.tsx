import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DarkModeSwitch } from '@/components/DarkModeSwitch'

interface Props {
  title: string
  children: ReactElement | ReactNode
  tagline?: boolean
}

const Layout: React.FC<Props> = ({ children, title, tagline }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <Main>
          <Header tagline={tagline} />
          {children}
        </Main>
        <DarkModeSwitch />
        <Footer />
      </Container>
    </>
  )
}

export { Layout }

Layout.defaultProps = {
  title: 'alecrem',
  tagline: false
}
