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
  Text
} from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'

interface Props {
  children?: ReactElement | ReactNode
  title: string
  url?: string
  subheading?: string
  tags?: string[]
}

const ProjectCard: React.FC<Props> = ({
  children,
  title,
  url,
  subheading,
  tags
}) => {
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
      <CardBody>{children}</CardBody>
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
