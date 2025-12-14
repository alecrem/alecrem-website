import { SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import { ProjectCard } from '@/components/ProjectCard'

const ProjectsEn = () => {
  return (
    <SimpleGrid gap={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
      <ProjectCard
        title="Yayoi Seikyu Next"
        url="https://www.yayoi-kk.co.jp/kaikei/kaikei-next/"
        subheading="Yayoi Co., Ltd., 2024-present"
        tags={[
          'Remix.js',
          'React',
          'hono',
          'SaaS',
          'e2e',
          'cdk',
          'Docker',
          'Contributor',
          'Team of 10'
        ]}
      >
        Developed, released and maintained the invoicing app for accounting
        suite Yayoi Kaikei Next as a full stack web engineer. Gained valuable
        experience working with Remix.js, hono, AWS CDK, Vitest, and end-to-end
        testing with Playwright. As well as integrating with various services
        within the same accounting suite, and dealing with security audits and
        security alerts.
      </ProjectCard>
      <ProjectCard
        title="UNCHAIN"
        url="https://app.unchain.tech/learn/"
        subheading="shiftbase, inc., 2023"
        buttonLink={'https://github.com/unchain-tech/UNCHAIN-projects/'}
        buttonText={'See repository (content)'}
        tags={[
          'Next.js',
          'React',
          'web3',
          'Figma',
          'Contributor',
          'Team of 59'
        ]}
      >
        Developed contents for, as well as designed the UI and developed the
        frontend for a website where community members learn web3 development
        techniques. As well as a subscription portal for companies to find and
        hire engineers among the community members.
      </ProjectCard>
      <ProjectCard
        title="Mint Rally"
        url="https://www.mintrally.xyz/"
        subheading="Hackdays Project (Code for Japan), 2023"
        buttonLink={'https://github.com/hackdays-io/mint-rally/'}
        tags={[
          'Next.js',
          'React',
          'web3',
          'Localization',
          'Contributor',
          'Team of 19',
          'Open Source'
        ]}
      >
        Contributed to the development and localization for an open source web3
        project which can provide free NFTs as proof of attendance to all sorts
        of events.
      </ProjectCard>
      <ProjectCard
        title="OpenLA Streamlit Web UI"
        subheading="Kyushu University Laboratory for Image and Media Understanding, 2023"
        tags={['Python', 'Streamlit', 'Docker', 'Sole Author']}
      >
        Developed, maintained and deployed a data-based web application to make{' '}
        <ChakraLink href="https://limu.ait.kyushu-u.ac.jp/~openLA/">
          <b>OpenLA</b>
        </ChakraLink>{' '}
        more accessible. The tool of choice was{' '}
        <ChakraLink href="https://docs.streamlit.io/">Streamlit</ChakraLink>, a
        Python library that uses a Tornado server and a React frontend.
      </ProjectCard>
      <ProjectCard
        title="OpenLA"
        url="https://limu.ait.kyushu-u.ac.jp/~openLA/"
        subheading="Kyushu University Laboratory for Image and Media Understanding, 2022-2023"
        buttonLink={'https://pypi.org/project/openla/'}
        buttonText={'See on PyPI'}
        buttonIcon={'python'}
        tags={[
          'Python',
          'PyPI',
          'Core Contributor',
          'Team of 5',
          'Open Source'
        ]}
      >
        Developed and maintained a Python module to accelerate learning
        analytics, including the introduction of unit tests to the project.
        <br />
        Honorable mention at the{' '}
        <ChakraLink href="https://www.1edtech.org/li/awards/2023">
          <b>Learning Impact Awards in 2023</b>
        </ChakraLink>
        .
      </ProjectCard>
      <ProjectCard
        title="Photovoice"
        subheading="Kyushu University Laboratory for Image and Media Understanding, 2021-2022"
        tags={['Python', 'ML', 'DL', 'Core Contributor', 'Team of 4']}
      >
        Machine learning applied to learning analytics. Classified and k-means
        clustered text entries, and used deep learning techniques to caption
        images.
      </ProjectCard>
      <ProjectCard
        title="Henkaku Nengajo"
        url="https://nengajo.henkaku.org/"
        subheading="Chiba Institute of Technology Henkaku Community, 2022"
        buttonLink={
          'https://github.com/henkaku-center/henkaku-nengajo-frontend'
        }
        tags={[
          'Next.js',
          'React',
          'Pinata API',
          'web3',
          'Core Contributor',
          'Team of 12',
          'Open Source'
        ]}
      >
        Developed a web3 frontend to Polygon blockchain and other APIs. A
        platform for community members to make Free-to-mint NFTs available to
        other members.
      </ProjectCard>
      <ProjectCard
        title="Henkaku Omise"
        url="https://omise.henkaku.org/"
        subheading="Chiba Institute of Technology Henkaku Community, 2022"
        buttonLink={'https://github.com/henkaku-center/omise-interface/'}
        tags={[
          'Next.js',
          'React',
          'Solidity',
          'web3',
          'Contributor',
          'Team of 9',
          'Open Source'
        ]}
      >
        Contributed to both the development of a web3 frontend and a number of
        smart contracts it interacts with. The site enables podcast listeners to
        interact and earn community tokens that can only be earned by
        contributing or interacting.
      </ProjectCard>
      <ProjectCard
        title="Studio Kura intranet"
        subheading="Studio Kura, 2012-2023"
        tags={['Ionic', 'Angular', 'CakePHP', 'Core Contributor', 'Team of 3']}
      >
        Developed the intranet for a business as it grew from 1 person and 1
        location to dozens of people, a handful of locations, and a number of
        business lines.
      </ProjectCard>
      <ProjectCard
        title="Studio Kura curriculum"
        subheading="Studio Kura, 2012-2023"
        tags={[
          'p5.js',
          'Next.js',
          'React',
          'web3',
          'Core Contributor',
          'Team of 2'
        ]}
      >
        Designed and developed p5.js and web3 activities for kids learning
        programming in an active learning environment.
      </ProjectCard>
      <ProjectCard
        title="ChallengeHub"
        url="https://www.youtube.com/watch?v=kncoERjvUUQ&t=1396s"
        subheading="Djinn Mentor, 2019-2021"
        tags={['Ionic', 'Angular', 'Jekyll', 'Co-founder', 'Team of 3']}
      >
        I took part on the development of a data-driven active learning solution
        with features such as sharing of teaching materials, real-time learning
        monitoring, and a chatbot for students to answer challenges.
        <br />
        One of the 24 startups to participate in{' '}
        <ChakraLink href="https://www.youtube.com/watch?v=kncoERjvUUQ&t=1396s">
          <b>techstars Founder Catalyst Japan 2021</b>
        </ChakraLink>
        .
      </ProjectCard>
      <ProjectCard
        title="ngx-datetimepicker"
        url="https://github.com/RenovoSolutions/ngx-datetimepicker"
        subheading="Renovo Solutions, 2019"
        buttonLink={'https://github.com/RenovoSolutions/ngx-datetimepicker'}
        tags={['Angular', 'Contributor', 'Team of 14', 'Open Source']}
      >
        Contributed improvements to an existing Angular date and time picker
        component, due to Djinn Mentor wanting to use it on ChallengeHub.
      </ProjectCard>
      <ProjectCard
        title="Koyomito"
        url="https://apps.alecrem.com/koyomito/"
        subheading="Alecrem, 2017-2020"
        tags={['Ionic', 'Angular', 'Sole Author']}
      >
        Calendar app for iOS and Android with everything you may want to know
        about today regarding the Japanese language and culture. Only the
        Android version is still available, but the cultural content, vocabulary
        and pronunciation samples can still be enjoyed.
      </ProjectCard>
      <ProjectCard
        title="iroiro connect"
        url="https://iroiro-connect.com/"
        subheading="Alecrem, 2023"
        buttonLink={'https://github.com/alecrem/iroiro-connect/'}
        tags={[
          'Next.js',
          'React',
          'Airtable',
          'Core Contributor',
          'Team of 2',
          'Open Source'
        ]}
      >
        Website for a sole proprietor with a contact form that uses the Airtable
        API to store messages, and effectively deliver them as e-mails.
      </ProjectCard>
      <ProjectCard
        title="Middle School Tutor"
        url="https://middleschooltutor.alecrem.com/"
        subheading="Alecrem, 2022-present"
        buttonLink={'https://github.com/alecrem/middleschool-cardlist'}
        tags={[
          'Python',
          'Remix.js',
          'hono',
          'GraphQL',
          'MCP server',
          'React',
          'Sole Author',
          'Open Source'
        ]}
      >
        Gaming tool for Magic The Gathering's Middle School format. Consisting
        on a Python project that compiles a list of available Magic cards, a
        hono GraphQL API, an MCP server, and a Remix.js website that enables
        searching said list. Other features include compressed URLs for sharing
        card lists without the users needing any account.
        <br />
        (Previously Streamlit and Next.js have been used for the web UI.)
      </ProjectCard>
      <ProjectCard
        title="Binguerah"
        url="https://binguerah.pepinismo.net/"
        subheading="Alecrem, 2023"
        buttonLink={'https://github.com/gamerah/bingo-card'}
        tags={['Next.js', 'React', 'p5.js', 'Sole Author', 'Open Source']}
      >
        Real-time and async interaction tool for podcasts that generates a
        personalized meme bingo card that is different for each combination of
        user and episode. Spaces can be manually marked as the user listens to
        the podcast, or they can be automatically marked if the user inputs the
        password shared at the end of each episode.
      </ProjectCard>
      <ProjectCard
        title="Escucha español"
        url="https://escuchaespanol.com/"
        subheading="Alecrem, 2009-2016"
        tags={['CakePHP', 'WordPress', 'Core Contributor', 'Team of 2']}
      >
        Premium membership site and custom podcast feed for a series of videos
        made to help Japanese speakers learn the Spanish language.
        <br />
        Featured on{' '}
        <ChakraLink href="https://www.nhk.or.jp/gogaku/spanish/">
          <b>NHK's "TV de Supeingo"</b>
        </ChakraLink>{' '}
        in 2012 and 2013.
      </ProjectCard>
    </SimpleGrid>
  )
}

export default ProjectsEn
