import { SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import { ProjectCard } from '@/components/ProjectCard'

const ProjectsJa: React.FC = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      <ProjectCard
        title="OpenLA"
        url="https://limu.ait.kyushu-u.ac.jp/~openLA/"
        subheading="九州大学 イメージ・メディア理解研究室, 2022-2023"
        tags={['Python', 'PyPI', 'Maintainer', 'Open Source']}
      >
        ラーニング・アナリティクス（学習の分析）で役立つPythonモジュールの、
        ユニットテストの導入も含めての開発・メンテナンス。
        <br />
        2023年度
        <ChakraLink
          isExternal
          href="https://www.imsglobal.org/lili/awards.html"
        >
          <b>Learning Impact Awards</b>
        </ChakraLink>
        にノミネートされました。
      </ProjectCard>
      <ProjectCard
        title="Photovoice"
        subheading="九州大学 イメージ・メディア理解研究室, 2021-2022"
        tags={['Python', 'ML', 'DL', 'Core Contributor']}
      >
        ラーニング・アナリティクス（学習の分析）に機械学習を適用しました。
        投稿される文章をk平均法を使って分類して、ディープラーニング（深層学習）
        を使って画像キャプショニングを行いました。
      </ProjectCard>
      <ProjectCard
        title="Henkaku Nengajo"
        url="https://nengajo.henkaku.org/"
        subheading="千葉工業大学 Henkakuコミュニティ, 2022"
        tags={[
          'Next.js',
          'React',
          'Pinata API',
          'web3',
          'Core Contributor',
          'Open Source'
        ]}
      >
        Polygonブロックチェーンやその他のAPIに対応したweb3フロントエンドを開発しましました。
        コミュニティメンバーが、他のメンバーのために無料受取可能のNFTを発行できる
        プラットフォームを提供しました。
      </ProjectCard>
      <ProjectCard
        title="Henkaku Omise"
        url="https://omise.henkaku.org/"
        subheading="千葉工業大学 Henkakuコミュニティ, 2022"
        tags={[
          'Next.js',
          'React',
          'Solidity',
          'web3',
          'Contributor',
          'Open Source'
        ]}
      >
        いくつかのスマートコントラクトと、それに対応したweb3フロントエンドの開発に貢献しました。
        サイトでは、ポッドキャストのリスナーが定期的にやり取りしながらコミュニティ
        トークンを獲得できます（コミュニティへの貢献でしか得られないトークンです）。
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
        title="聞くスペイン語"
        url="https://escuchaespanol.com/"
        subheading="Alecrem, 2009-2016"
        tags={['CakePHP', 'WordPress', 'Core Contributor']}
      >
        Premium membership site and custom podcast feed for a series of videos
        made to help Japanese speakers the Spanish language.
        <br />
        Featured on{' '}
        <ChakraLink isExternal href="https://www.nhk.or.jp/gogaku/spanish/">
          <b>NHK「テレビでスペイン語」</b> in 2012 and 2013
        </ChakraLink>
        .
      </ProjectCard>
    </SimpleGrid>
  )
}

export default ProjectsJa
