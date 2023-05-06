import { Heading, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
import { ProjectCard } from '@/components/ProjectCard'
import useTranslation from 'next-translate/useTranslation'

const Projects: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Layout title="Projects | alecrem">
      <Heading as="h3" size="lg" color="text" mt={16}>
        {t('projects.title')}
      </Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <ProjectCard
          title="OpenLA"
          url="https://limu.ait.kyushu-u.ac.jp/~openLA/"
          subheading="Kyushu University Laboratory for Image and Media Understanding, 2022-2023"
          tags={['Python', 'PyPI', 'Maintainer', 'Open Source']}
        >
          Developed and maintained a Python module to help with learning
          analytics, including the introduction of unit tests to the project.
          <br />
          Nominated to the{' '}
          <ChakraLink
            isExternal
            href="https://www.imsglobal.org/lili/awards.html"
          >
            <b>Learning Impact Awards in 2023</b>
          </ChakraLink>
          .
        </ProjectCard>
        <ProjectCard
          title="Photovoice"
          subheading="Kyushu University Laboratory for Image and Media Understanding, 2021-2022"
          tags={['Python', 'ML', 'DL', 'Core Contributor']}
        >
          ML and DL applied to learning analytics. Classified and k-means
          clustered text entries, and used deep learning techniques to caption
          images.
        </ProjectCard>
        <ProjectCard
          title="Henkaku Nengajo"
          url="https://nengajo.henkaku.org/"
          subheading="Chiba Institute of Technology Henkaku Community, 2022"
          tags={['Next.js', 'React', 'web3', 'Core Contributor', 'Open Source']}
        >
          Developed a web3 frontend to Polygon blockchain and other APIs. A
          platform for community members to make Free-to-mint NFTs available to
          other community members.
        </ProjectCard>
        <ProjectCard
          title="Henkaku Omise"
          url="https://omise.henkaku.org/"
          subheading="Chiba Institute of Technology Henkaku Community, 2022"
          tags={[
            'Next.js',
            'React',
            'Solidity',
            'web3',
            'Contributor',
            'Open Source'
          ]}
        >
          Contributed to both the development of a web3 frontend and a number of
          smart contracts it interacts with. The site enables podcast listeners
          to interact and earn community tokens that can only be earned by
          contributing or interacting.
        </ProjectCard>
        <ProjectCard
          title="Studio Kura intranet"
          subheading="Studio Kura, 2012-2023"
          tags={['Ionic', 'Angular', 'CakePHP', 'Core Contributor']}
        >
          Developed the intranet for a business as it grew from 1 person and 1
          location to dozens of people, a handful of locations, and a number of
          business lines.
        </ProjectCard>
        <ProjectCard
          title="Studio Kura curriculum"
          subheading="Studio Kura, 2012-2023"
          tags={['p5.js', 'Next.js', 'React', 'web3', 'Core Contributor']}
        >
          Designed and developed p5.js and web3 activities for kids learning
          programming in an active learning environment.
        </ProjectCard>
        <ProjectCard
          title="ChallengeHub"
          url="https://www.youtube.com/watch?v=kncoERjvUUQ&t=1396s"
          subheading="Djinn Mentor, 2019-2021"
          tags={['Ionic', 'Angular', 'Jekyll', 'Co-founder']}
        >
          Helped develop a data-driven active learning solution with features
          such as sharing of teaching materials, real-time learning monitoring,
          and a chatbot for students to answer challenges.
          <br />
          One of the 24 startups to participate in{' '}
          <ChakraLink
            isExternal
            href="https://www.youtube.com/watch?v=kncoERjvUUQ&t=1396s"
          >
            <b>techstars Founder Catalyst Japan 2021</b>
          </ChakraLink>
          .
        </ProjectCard>
        <ProjectCard
          title="ngx-datetimepicker"
          url="https://github.com/RenovoSolutions/ngx-datetimepicker"
          subheading="Renovo Solutions, 2019"
          tags={['Angular', 'Contributor', 'Open Source']}
        >
          Helped improve an existing Angular date and time picker component, due
          to Djinn Mentor wanting to use it on ChallengeHub.
        </ProjectCard>
        <ProjectCard
          title="Koyomito"
          url="https://apps.alecrem.com/koyomito/"
          subheading="Alecrem, 2017-2020"
          tags={['Ionic', 'Angular', 'Sole Author']}
        >
          Calendar app for iOS and Android with everything you may want to know
          about today regarding the Japanese language and culture. Only the
          Android version is still available, but the cultural content
          vocabulary and pronunciation samples can still be enjoyed.
        </ProjectCard>
        <ProjectCard
          title="iroiro connect"
          url="https://iroiro-connect.com/"
          subheading="Alecrem, 2023"
          tags={[
            'Next.js',
            'React',
            'Airtable',
            'Core Contributor',
            'Open Source'
          ]}
        >
          Website for a sole proprietor with a contact form that uses the
          Airtable API to store messages, and effectively deliver them as
          e-mails.
        </ProjectCard>
        <ProjectCard
          title="Middle School Tutor"
          url="https://middleschooltutor.alecrem.com/"
          subheading="Alecrem, 2022-2023"
          tags={['Next.js', 'React', 'Python', 'Sole Author', 'Open Source']}
        >
          Gaming tool for Magic The Gathering's Middle School format. Consisting
          on a Python project that compiles a list of available Magic cards, and
          a website that searches said list.
        </ProjectCard>
        <ProjectCard
          title="Binguerah"
          url="https://binguerah.pepinismo.net/"
          subheading="Alecrem, 2023"
          tags={['Next.js', 'React', 'p5.js', 'Sole Author', 'Open Source']}
        >
          Real-time and async interaction tool for podcasts. A personalized meme
          bingo card that is different for each combination of user and episode.
          Spaces can be manually marked as the user listens to the podcast, or
          they can be automatically marked if the user inputs the password
          shared at the end of each episode.
        </ProjectCard>
        <ProjectCard
          title="Escucha español"
          url="https://escuchaespanol.com/"
          subheading="Alecrem, 2009-2016"
          tags={['CakePHP', 'WordPress', 'Core Contributor']}
        >
          Premium membership site and custom podcast feed for a series of videos
          made to help Japanese speakers the Spanish language.
          <br />
          Featured on{' '}
          <ChakraLink isExternal href="https://www.nhk.or.jp/gogaku/spanish/">
            <b>NHK's "TV de Supeingo" in 2012 and 2013</b>
          </ChakraLink>
          .
        </ProjectCard>
      </SimpleGrid>
    </Layout>
  )
}

export default Projects
