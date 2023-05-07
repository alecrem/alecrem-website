import { SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import { ProjectCard } from '@/components/ProjectCard'

const ProjectsEs: React.FC = () => {
  return (
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
        Desarrollo y mantenimiento de un módulo Python para ayudar en análisis
        del aprendizaje, incluyendo introducir pruebas unitarias al proyecto.
        <br />
        Nominado a los{' '}
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
        Aprendizaje automático aplicado al análisis del aprendizaje.
        Clasificación y agrupación por k-medias de entradas de texto, y uso de
        técnicas de aprendizaje profundo para generar descripciones de imágenes.
      </ProjectCard>
      <ProjectCard
        title="Henkaku Nengajo"
        url="https://nengajo.henkaku.org/"
        subheading="Chiba Institute of Technology Henkaku Community, 2022"
        tags={[
          'Next.js',
          'React',
          'Pinata API',
          'web3',
          'Core Contributor',
          'Open Source'
        ]}
      >
        Desarrollo de un frontend web3 para la cadena de bloques Polygon y otras
        APIs. Una plataforma para que los miembros de la comunidad puedan poner
        NFT gratuitos a la disposición de otros miembros.
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
        Contribuciones al desarrollo tanto de un frontend web3 como a varios de
        los contratos inteligentes con los que interactúa. El sitio web ofrece
        al público del podcast la posibilidad de interactuar y ganar tokens de
        la comunidad que solo se pueden conseguir contribuyendo o interactuando.
      </ProjectCard>
      <ProjectCard
        title="Studio Kura intranet"
        subheading="Studio Kura, 2012-2023"
        tags={['Ionic', 'Angular', 'CakePHP', 'Core Contributor']}
      >
        Desarrollo de la intranet de un negocio mientras crecía desde 1 persona
        y 1 localización hasta docenas de personas, varias localizaciones, y
        varias líneas de negocio.
      </ProjectCard>
      <ProjectCard
        title="Studio Kura curriculum"
        subheading="Studio Kura, 2012-2023"
        tags={['p5.js', 'Next.js', 'React', 'web3', 'Core Contributor']}
      >
        Diseño y desarrollo de actividades de p5.js y web3 para niños que están
        aprendiendo programación en un entorno de aprendizaje activo.
      </ProjectCard>
      <ProjectCard
        title="ChallengeHub"
        url="https://www.youtube.com/watch?v=kncoERjvUUQ&t=1396s"
        subheading="Djinn Mentor, 2019-2021"
        tags={['Ionic', 'Angular', 'Jekyll', 'Co-founder']}
      >
        Helped develop a data-driven active learning solution with features such
        as sharing of teaching materials, real-time learning monitoring, and a
        chatbot for students to answer challenges.
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
        Android version is still available, but the cultural content vocabulary
        and pronunciation samples can still be enjoyed.
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
        Website for a sole proprietor with a contact form that uses the Airtable
        API to store messages, and effectively deliver them as e-mails.
      </ProjectCard>
      <ProjectCard
        title="Middle School Tutor"
        url="https://middleschooltutor.alecrem.com/"
        subheading="Alecrem, 2022-2023"
        tags={['Next.js', 'React', 'Python', 'Sole Author', 'Open Source']}
      >
        Gaming tool for Magic The Gathering's Middle School format. Consisting
        on a Python project that compiles a list of available Magic cards, and a
        website that searches said list.
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
        they can be automatically marked if the user inputs the password shared
        at the end of each episode.
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
  )
}

export default ProjectsEs
