import { Button, Box } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

interface Props {
  size: 'md' | 'sm' | 'lg' | 'xl' | '2xl' | '2xs' | 'xs'
  mobile?: boolean
}

const NavLanguageButtons: React.FC<Props> = ({ size, mobile }) => {
  const { lang } = useTranslation('common')
  return (
    <>
      {lang !== 'en' && (
        <Box pr={2}>
          <Button
            size={size}
            my={mobile ? 2 : undefined}
            onClick={async () => await setLanguage('en')}
          >
            English
          </Button>
        </Box>
      )}
      {lang !== 'es' && (
        <Box pr={2}>
          <Button
            size={size}
            my={mobile ? 2 : undefined}
            onClick={async () => await setLanguage('es')}
          >
            Español
          </Button>
        </Box>
      )}
      {lang !== 'ja' && (
        <Box pr={2}>
          <Button
            size={size}
            my={mobile ? 2 : undefined}
            onClick={async () => await setLanguage('ja')}
          >
            日本語
          </Button>
        </Box>
      )}
    </>
  )
}

export { NavLanguageButtons }
NavLanguageButtons.defaultProps = {
  mobile: false,
  size: 'md'
}
