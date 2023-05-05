import {
  Heading,
  List,
  ListIcon,
  Tag,
  TagLabel,
  TagLeftIcon,
  ListItem,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Layout } from '@/components/Layout'

const Skills = () => (
  <Layout title="Skills | alecrem">
    <Heading as="h3" size="lg" color="text" mt={16}>
      Skills
    </Heading>
    <Heading as="h4" size="md" color="text">
      Natural Languages
    </Heading>
    <List spacing={3} my={0} color="text">
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Spanish: native
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        English: fluent
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Japanese: fluent
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Catalan: fluent
      </ListItem>
    </List>
    <Heading as="h4" size="md" color="text">
      Web
    </Heading>
    <Wrap>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>Next.js</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>React</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>TypeScript</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>Chakra</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>p5.js</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>Pyodide</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>Airtable</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>API</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>MySQL</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>PostgreSQL</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>Ionic</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>Angular</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel>CakePHP</TagLabel>
        </Tag>
      </WrapItem>
    </Wrap>
    <Heading as="h4" size="md" color="text">
      Web3
    </Heading>
    <Wrap>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> Wagmi</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> Pinata API</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> OpenSea API</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> Solidity</TagLabel>
        </Tag>
      </WrapItem>
    </Wrap>
    <Heading as="h4" size="md" color="text">
      Data and ML
    </Heading>
    <Wrap>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> Python</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> Pandas</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> PyPi</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> TensorFlow</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> PyTorch</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> Computer vision</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="lg">
          <TagLeftIcon as={CheckCircleIcon} color="cyan.500" />
          <TagLabel> Natural Language Processing</TagLabel>
        </Tag>
      </WrapItem>
    </Wrap>
  </Layout>
)

export default Skills
