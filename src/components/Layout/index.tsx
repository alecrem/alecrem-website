import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { Container } from '@/components/Container'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ColorModeButton } from '@/components/ui/color-mode'
interface Props {
  title: string
  children: ReactElement | ReactNode
  tagline?: boolean
}

const Layout: React.FC<Props> = ({
  children,
  title = 'alecrem',
  tagline = false
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Container minH="100vh">
        <Main>
          <Header tagline={tagline} />
          {children}
        </Main>
        <ColorModeButton />
        <Footer />
      </Container>
    </>
  )
}

export { Layout }
