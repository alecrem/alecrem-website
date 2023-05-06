import { Heading, List, ListIcon, ListItem, Wrap } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Layout } from '@/components/Layout'
import { SkillTag } from '@/components/SkillTag'
import useTranslation from 'next-translate/useTranslation'

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

const Skills: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Layout title="Skills | alecrem">
      <Heading as="h3" size="lg" color="text" mt={16}>
        {t('skills.title')}
      </Heading>
      <Heading as="h4" size="md" color="text">
        {t('skills.natural-languages')}
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
        {t('skills.web')}
      </Heading>
      <Wrap>
        {skillList.web.map((skill, idx) => (
          <SkillTag key={'web-' + idx}>{skill}</SkillTag>
        ))}
      </Wrap>
      <Heading as="h4" size="md" color="text">
        {t('skills.web3')}
      </Heading>
      <Wrap>
        {skillList.web3.map((skill, idx) => (
          <SkillTag key={'web3-' + idx}>{skill}</SkillTag>
        ))}
      </Wrap>
      <Heading as="h4" size="md" color="text">
        {t('skills.data-ml')}
      </Heading>
      <Wrap>
        {skillList.dataMl.map((skill, idx) => (
          <SkillTag key={'data-ml-' + idx}>{skill}</SkillTag>
        ))}
      </Wrap>
    </Layout>
  )
}

export default Skills
