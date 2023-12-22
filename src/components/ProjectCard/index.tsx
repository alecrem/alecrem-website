import { ReactElement, ReactNode } from 'react'
import {
  Heading,
  Link as ChakraLink,
  Tag,
  Wrap,
  WrapItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { FaGithub, FaPython } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  children?: ReactElement | ReactNode
  title: string
  url?: string
  subheading?: string
  buttonLink?: string
  buttonText?: string
  buttonIcon?: string
  tags?: string[]
}

const ProjectCard: React.FC<Props> = ({
  children,
  title,
  url,
  subheading,
  buttonLink,
  buttonText,
  buttonIcon,
  tags
}) => {
  const { t } = useTranslation('common')

  return (
    <Card>
      <CardHeader>
        <Heading size="md">
          {url ? (
            <ChakraLink isExternal href={url} flexGrow={1} mr={2}>
              <b>{title}</b> <LinkIcon />
            </ChakraLink>
          ) : (
            <b>{title}</b>
          )}
        </Heading>
        <Text>{subheading}</Text>
      </CardHeader>
      <CardBody>
        {children}
        {buttonLink && (
          <>
            <br />
            <ChakraLink href={buttonLink}>
              <Button
                mt={2}
                variant={'outline'}
                size={'xs'}
                color={'text'}
                fontWeight={'normal'}
              >
                {buttonIcon == 'python' ? (
                  <FaPython display={'inline'} />
                ) : (
                  <FaGithub display={'inline'} />
                )}
                &nbsp;
                {buttonText ?? t('projects.source')}
              </Button>
            </ChakraLink>
          </>
        )}
      </CardBody>
      {tags && tags.length > 0 && (
        <CardFooter>
          <Wrap>
            {tags.map((tag, idx) => (
              <WrapItem key={idx}>
                <Tag size="sm" colorScheme="cyan">
                  {tag}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </CardFooter>
      )}
    </Card>
  )
}

export { ProjectCard }
