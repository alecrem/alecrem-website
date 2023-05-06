import { Text, Link as ChakraLink, Flex, FlexProps } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'

const Footer: React.FC = (props: FlexProps) => {
  const { t } = useTranslation('common')
  return (
    <Flex as="footer" py="8rem" {...props}>
      <Text>
        {t('footer.year')}{' '}
        <ChakraLink href="https://github.com/alecrem/">
          {t('footer.author')}
        </ChakraLink>
      </Text>
    </Flex>
  )
}

export { Footer }
