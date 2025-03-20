import { ReactElement, ReactNode, useEffect, useState } from 'react'
import {
  Heading,
  Link as ChakraLink,
  Tag,
  Wrap,
  WrapItem,
  Card,
  Button,
  Spinner,
  Stack,
  Text,
  Icon
} from '@chakra-ui/react'
import { LuStar, LuExternalLink } from 'react-icons/lu'
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
    <Card.Root onMouseEnter={handleMouseEnter}>
      <Card.Header>
        <Heading size="xl">
          {url ? (
            <ChakraLink href={url} flexGrow={1} mr={2}>
              <b>{title}</b> <LuExternalLink />
            </ChakraLink>
          ) : (
            <b>{title}</b>
          )}
        </Heading>
        <Text>{subheading}</Text>
      </Card.Header>
      <Card.Body>
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
              <Tag.Root size="sm" borderRadius={'full'}>
                <>
                  <Icon size="sm">
                    <LuStar />
                  </Icon>
                  {stargazerCountFetched ? (
                    stargazerCount
                  ) : (
                    <Spinner size={'xs'} />
                  )}
                </>
              </Tag.Root>
            )}
          </Stack>
        )}
      </Card.Body>
      {tags && tags.length > 0 && (
        <Card.Footer>
          <Wrap>
            {tags.map((tag, idx) => (
              <WrapItem key={idx}>
                <Tag.Root size="sm" colorPalette="cyan">
                  {tag}
                </Tag.Root>
              </WrapItem>
            ))}
          </Wrap>
        </Card.Footer>
      )}
    </Card.Root>
  )
}

export { ProjectCard }
