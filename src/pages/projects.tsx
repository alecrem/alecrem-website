import { useState, useEffect, ReactNode, FC } from 'react'
import { Heading } from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
import { Projects } from '@/components/Projects'
import useTranslation from 'next-translate/useTranslation'

const ProjectsPage: React.FC = () => {
  const { t, lang } = useTranslation('common')
  type SupportedLanguageIndex = keyof typeof Projects
  const [langIndex, setLangIndex] = useState<SupportedLanguageIndex>('en')
  useEffect(() => {
    if (!['en', 'ja', 'es'].includes(lang)) return
    setLangIndex(lang as SupportedLanguageIndex)
  }, [lang])

  return (
    <Layout title={t('projects.title') + ' | alecrem'}>
      <Heading as="h3" size="lg" color="text" mt={16}>
        {t('projects.title')}
      </Heading>
      {Projects[langIndex]()}
    </Layout>
  )
}

export default ProjectsPage
