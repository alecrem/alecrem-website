import { Button, Box } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

interface Props {
  size: 'md' | 'sm' | 'lg' | 'xl' | '2xl' | '2xs' | 'xs'
  mobile?: boolean
}

const NavLanguageButtons: React.FC<Props> = ({
  size = 'md',
  mobile = false
}) => {
  const { lang } = useTranslation('common')
  const router = useRouter()

  const switchLanguage = (locale: string) =>
    router.push(`/${locale}${router.asPath}`, undefined, { locale: false })

  return (
    <>
      {lang !== 'en' && (
        <Box pr={2}>
          <Button
            variant="surface"
            size={size}
            my={mobile ? 2 : undefined}
            onClick={() => switchLanguage('en')}
          >
            English
          </Button>
        </Box>
      )}
      {lang !== 'es' && (
        <Box pr={2}>
          <Button
            variant="surface"
            size={size}
            my={mobile ? 2 : undefined}
            onClick={() => switchLanguage('es')}
          >
            Español
          </Button>
        </Box>
      )}
      {lang !== 'ja' && (
        <Box pr={2}>
          <Button
            variant="surface"
            size={size}
            my={mobile ? 2 : undefined}
            onClick={() => switchLanguage('ja')}
          >
            日本語
          </Button>
        </Box>
      )}
    </>
  )
}

export { NavLanguageButtons }
