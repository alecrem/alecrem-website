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
        <ChakraLink isExternal href="https://www.1edtech.org/li/awards/2023">
          <b>Learning Impact Awards</b>
        </ChakraLink>
        で特別賞を受賞しました。
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
        本社に1人いる企業が、多数の従業員、複数の事業と事業所の段階まで成長するとともに
        社内ネットワークを開発しました。
      </ProjectCard>
      <ProjectCard
        title="Studio Kura curriculum"
        subheading="Studio Kura, 2012-2023"
        tags={['p5.js', 'Next.js', 'React', 'web3', 'Core Contributor']}
      >
        アクティブラーニングの文脈でプログラミングを習う子どもたちのためのp5.jsや
        web3カリキュラムを設計・実装しました。
      </ProjectCard>
      <ProjectCard
        title="ChallengeHub"
        url="https://www.youtube.com/watch?v=kncoERjvUUQ&t=1396s"
        subheading="Djinn Mentor, 2019-2021"
        tags={['Ionic', 'Angular', 'Jekyll', 'Co-founder']}
      >
        教材の共有、リアルタイム学習モニタリング、
        学生の課題の回答を受け付けるチャットボットなどの機能を備えた、
        データ駆動型のアクティブラーニングソリューションの開発に貢献しました。
        <br />
        <ChakraLink
          isExternal
          href="https://www.youtube.com/watch?v=kncoERjvUUQ&t=1396s"
        >
          <b>techstars Founder Catalyst Japan 2021</b>
        </ChakraLink>
        に参加した24社のひとつでした。
      </ProjectCard>
      <ProjectCard
        title="ngx-datetimepicker"
        url="https://github.com/RenovoSolutions/ngx-datetimepicker"
        subheading="Renovo Solutions, 2019"
        tags={['Angular', 'Contributor', 'Open Source']}
      >
        Djinn Mentor社がChallengeHubで使用できるように、
        既存のAngularの日時選択用コンポーネントを改善するのに貢献しました。
      </ProjectCard>
      <ProjectCard
        title="Koyomito"
        url="https://apps.alecrem.com/koyomito/"
        subheading="Alecrem, 2017-2020"
        tags={['Ionic', 'Angular', 'Sole Author']}
      >
        iOS・Android向けのカレンダーアプリを作りました。
        日本語と文化に関する、毎日「今日」の情報がすべてわかります。
        現在はAndroid版のみが利用可能ですが、
        語彙、発音のサンプルなど文化コンテンツは引き続き楽しめます。
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
        個人事業主の公式ウェブサイトで、Airtable
        APIを使用したお問い合わせフォームが付いています。
        お問い合わせ内容を保存して、Airtableによりメールとして配信されます。
      </ProjectCard>
      <ProjectCard
        title="Middle School Tutor"
        url="https://middleschooltutor.alecrem.com/"
        subheading="Alecrem, 2022-2023"
        tags={['Next.js', 'React', 'Python', 'Sole Author', 'Open Source']}
      >
        マジック：ザ・ギャザリングのフォーマット「ミドルスクール」のための
        ゲーミング・ツールを開発しました。
        二つの部品で構成されています：利用可能なMTGカードのリストをまとめるPythonプロジェクトと、
        そのリストを検索するNext.jsでできたウェブサイト。
      </ProjectCard>
      <ProjectCard
        title="Binguerah"
        url="https://binguerah.pepinismo.net/"
        subheading="Alecrem, 2023"
        tags={['Next.js', 'React', 'p5.js', 'Sole Author', 'Open Source']}
      >
        ポッドキャストのリスナーがリアルタイムでも非同期にでも使うインタラクションツール。
        各ユーザーのためにカスタマイズされたお楽しみビンゴカードが提供されます。
        ユーザーはポッドキャストを聴きながら手動でチェックしていっても良いですし、
        各エピソードの最後に共有されるパスワードを入力すると自動的にチェックされます。
      </ProjectCard>
      <ProjectCard
        title="聞くスペイン語"
        url="https://escuchaespanol.com/"
        subheading="Alecrem, 2009-2016"
        tags={['CakePHP', 'WordPress', 'Core Contributor']}
      >
        スペイン語を学びたい日本語話者のために制作したビデオポッドキャストに対応する、
        プレミアム会員サイトおよびカスタムポッドキャストフィード。
        <br />
        2012〜2013年度の{' '}
        <ChakraLink isExternal href="https://www.nhk.or.jp/gogaku/spanish/">
          <b>NHK「テレビでスペイン語」</b>
        </ChakraLink>
        に出演しました。
      </ProjectCard>
    </SimpleGrid>
  )
}

export default ProjectsJa
