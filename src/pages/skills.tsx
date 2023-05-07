import { useState, useEffect } from 'react'
import { Heading, List, ListIcon, ListItem, Wrap } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import useTranslation from 'next-translate/useTranslation'
import { Layout } from '@/components/Layout'
import { SkillTag } from '@/components/SkillTag'
import { skillList } from '@/data/skills'

const Skills: React.FC = () => {
  const { t, lang } = useTranslation('common')
  type SupportedLanguageIndex = keyof typeof skillList
  const [langIndex, setLangIndex] = useState<SupportedLanguageIndex>('en')
  useEffect(() => {
    if (!['en', 'ja', 'es'].includes(lang)) return
    setLangIndex(lang as SupportedLanguageIndex)
  }, [lang])
  return (
    <Layout title={t('skills.title') + ' | alecrem'}>
      <Heading as="h3" size="lg" color="text" mt={16}>
        {t('skills.title')}
      </Heading>
      <Heading as="h4" size="md" color="text">
        {t('skills.natural-languages')}
      </Heading>
      <List spacing={3} my={0} color="text">
        {skillList[langIndex].naturalLanguages.map((language, idx) => (
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
        {skillList[langIndex].web.map((skill, idx) => (
          <SkillTag key={'web-' + idx}>{skill}</SkillTag>
        ))}
      </Wrap>
      <Heading as="h4" size="md" color="text">
        {t('skills.web3')}
      </Heading>
      <Wrap>
        {skillList[langIndex].web3.map((skill, idx) => (
          <SkillTag key={'web3-' + idx}>{skill}</SkillTag>
        ))}
      </Wrap>
      <Heading as="h4" size="md" color="text">
        {t('skills.data-ml')}
      </Heading>
      <Wrap>
        {skillList[langIndex].dataMl.map((skill, idx) => (
          <SkillTag key={'data-ml-' + idx}>{skill}</SkillTag>
        ))}
      </Wrap>
    </Layout>
  )
}

export default Skills
