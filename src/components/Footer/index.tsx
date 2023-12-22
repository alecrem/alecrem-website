import {
  Text,
  Link as ChakraLink,
  Flex,
  Button,
  FlexProps
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import { FaGithub } from 'react-icons/fa'

const Footer: React.FC = (props: FlexProps) => {
  const { t } = useTranslation('common')
  return (
    <Flex as="footer" pt="8rem" pb="1rem" {...props}>
      <Text>
        {t('footer.year')}{' '}
        <ChakraLink href="https://github.com/alecrem/">
          {t('footer.author')}
        </ChakraLink>
        {' | '}
        <ChakraLink href="https://github.com/alecrem/alecrem-website/">
          <Button
            variant={'link'}
            size={'sm'}
            color={'text'}
            fontWeight={'normal'}
          >
            <FaGithub display={'inline'} />
            {t('footer.source')}
          </Button>
        </ChakraLink>
      </Text>
    </Flex>
  )
}

export { Footer }
