import { Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
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
    <List spacing={3} my={0} color="text">
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Next.js
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        React
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        TypeScript
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Chakra
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        p5.js
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Pyodide
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Airtable
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        API
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        MySQL
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        PostgreSQL
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Ionic
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Angular
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        CakePHP
      </ListItem>
    </List>
    <Heading as="h4" size="md" color="text">
      Web3
    </Heading>
    <List spacing={3} my={0} color="text">
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Wagmi
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Pinata API
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        OpenSea API
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Solidity
      </ListItem>
    </List>
    <Heading as="h4" size="md" color="text">
      Data and ML
    </Heading>
    <List spacing={3} my={0} color="text">
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Python
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Pandas
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        PyPi
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        TensorFlow
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        PyTorch
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Computer vision
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color="cyan.500" />
        Natural Language Processing
      </ListItem>
    </List>
  </Layout>
)

export default Skills
