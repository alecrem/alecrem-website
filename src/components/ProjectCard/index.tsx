import { ReactElement, ReactNode, useEffect, useState } from 'react'
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
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react'
import { LinkIcon, StarIcon } from '@chakra-ui/icons'
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
  const [showsStargazers, setShowsStargazers] = useState(false)
  const [stargazerCount, setStargazerCount] = useState<number | null>()
  const [stargazerCountFetched, setStargazerCountFetched] = useState(false)
  useEffect(() => {
    if (showsStargazers == false || buttonLink == undefined) return
    let repoUrl = buttonLink
    if (buttonLink.lastIndexOf('/') == buttonLink.length - 1)
      repoUrl = buttonLink.substring(0, buttonLink.length - 1)
    const urlPieces = repoUrl.split('/')
    const repo = [urlPieces[3], urlPieces[4]]
    console.log(repo)
    const fetchStargazers = async (repo: string[]) => {
      const repoURI = `/api/stargazers/${repo[0]}/${repo[1]}`
      const ghresponse = await fetch(repoURI)
      if (!ghresponse.ok) {
        setShowsStargazers(false)
        return
      }
      const data = await ghresponse.json()
      setStargazerCount(data.message)
      setStargazerCountFetched(true)
    }
    fetchStargazers(repo)
  }, [showsStargazers])
  const handleMouseEnter = () => {
    if (buttonLink?.indexOf('github.com') == -1) return
    setShowsStargazers(buttonLink !== undefined && buttonLink.length > 0)
  }

  return (
    <Card onMouseEnter={handleMouseEnter}>
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
          <Stack direction={'row'}>
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
            {showsStargazers && (
              <Tag borderRadius={100}>
                {!stargazerCountFetched && <Spinner size={'xs'} />}
                {stargazerCountFetched && (
                  <>
                    <StarIcon />
                    &nbsp;{stargazerCount}
                  </>
                )}
              </Tag>
            )}
          </Stack>
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
