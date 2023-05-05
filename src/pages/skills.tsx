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
import { SkillTag } from '@/components/SkillTag'

const skillList = {
  web: [
    'Next.js',
    'React',
    'TypeScript',
    'Chakra',
    'p5.js',
    'Pyodide',
    'Airtable API',
    'MySQL',
    'PostgreSQL',
    'Ionic',
    'Angular',
    'CakePHP'
  ],
  web3: ['Wagmi', 'Pinata', 'OpenSea API', 'Solidity'],
  dataMl: [
    'Python',
    'Pandas',
    'PyPI',
    'TensorFlow',
    'Computer vision',
    ' Natural Language Processing'
  ]
}

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
      {skillList.web.map((skill, idx) => (
        <SkillTag key={'web-' + idx}>{skill}</SkillTag>
      ))}
    </Wrap>
    <Heading as="h4" size="md" color="text">
      Web3
    </Heading>
    <Wrap>
      {skillList.web3.map((skill, idx) => (
        <SkillTag key={'web3-' + idx}>{skill}</SkillTag>
      ))}
    </Wrap>
    <Heading as="h4" size="md" color="text">
      Data and ML
    </Heading>
    <Wrap>
      {skillList.dataMl.map((skill, idx) => (
        <SkillTag key={'data-ml-' + idx}>{skill}</SkillTag>
      ))}
    </Wrap>
  </Layout>
)

export default Skills
