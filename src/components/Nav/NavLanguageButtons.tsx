import { Button, Box } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'

interface Props {
  size?: string
  mobile?: boolean
}

const NavLanguageButtons: React.FC<Props> = ({ size, mobile }) => {
  const { lang } = useTranslation('common')
  return (
    <>
      {lang !== 'en' && (
        <Box pr={4}>
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
        <Box pr={4}>
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
        <Box pr={4}>
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

export default NavLanguageButtons
NavLanguageButtons.defaultProps = {
  mobile: false,
  size: 'md'
}
