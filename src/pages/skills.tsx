import { useState, useEffect } from 'react'
import { Heading, List, Wrap } from '@chakra-ui/react'
import { LuCircleCheck } from 'react-icons/lu'
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
      <List.Root gap={3} my={0} color="text">
        {skillList[langIndex].naturalLanguages.map((language, idx) => (
          <List.Item key={'languages-' + idx}>
            <List.Indicator asChild color="cyan.500">
              <LuCircleCheck />
            </List.Indicator>
            {language.language}: {language.level}
          </List.Item>
        ))}
      </List.Root>
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
