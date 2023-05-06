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
  naturalLanguages: [
    {
      language: 'Spanish',
      level: 'native'
    },
    {
      language: 'English',
      level: 'fluent'
    },
    {
      language: 'Japanese',
      level: 'fluent'
    },
    {
      language: 'Catalan',
      level: 'fluent'
    }
  ],
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
      {skillList.naturalLanguages.map((language, idx) => (
        <ListItem key={'languages-' + idx}>
          <ListIcon as={CheckCircleIcon} color="cyan.500" />
          {language.language}: {language.level}
        </ListItem>
      ))}
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
