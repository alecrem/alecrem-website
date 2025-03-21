import { SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import { ProjectCard } from '@/components/ProjectCard'

const ProjectsEs = () => {
  return (
    <SimpleGrid gap={4} templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
      <ProjectCard
        title="UNCHAIN"
        url="https://app.unchain.tech/learn/"
        subheading="shiftbase, inc., 2023"
        buttonLink={'https://github.com/unchain-tech/UNCHAIN-projects/'}
        buttonText={'Ver reporitorio (contenidos)'}
        tags={[
          'Next.js',
          'React',
          'web3',
          'figma',
          'Contributor',
          'Team of 59'
        ]}
      >
        Desarrollo de contenidos además de diseño e implementación de interfaz
        de usuario en el frontend de un sitio web en el que los miembros de la
        comunidad aprenden técnicas de desarrollo de web3. Además de un portal
        de suscripción donde diversas empresas pueden encontrar desarrolladores
        en la comunidad y contratarlos.
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
        Contribuciones al desarrollo y la localización de un proyecto de web3 de
        código abierto que ofrece NFT gratuitos como prueba de participación en
        todo tipo de eventos.
      </ProjectCard>
      <ProjectCard
        title="OpenLA Streamlit Web UI"
        subheading="Kyushu University Laboratory for Image and Media Understanding, 2023"
        tags={['Python', 'Streamlit', 'Docker', 'Sole Author']}
      >
        Desarrollo, mantenimiento y despliegue de una aplicación web basada en
        datos para hacer{' '}
        <ChakraLink href="https://limu.ait.kyushu-u.ac.jp/~openLA/">
          <b>OpenLA</b>
        </ChakraLink>{' '}
        más accesible. La herramienta elegida fue{' '}
        <ChakraLink href="https://docs.streamlit.io/">Streamlit</ChakraLink>,
        una librería de Python que usa un servidor Tornado y un frontend React.
      </ProjectCard>
      <ProjectCard
        title="OpenLA"
        url="https://limu.ait.kyushu-u.ac.jp/~openLA/"
        subheading="Kyushu University Laboratory for Image and Media Understanding, 2022-2023"
        buttonLink={'https://pypi.org/project/openla/'}
        buttonText={'Ver en PyPI'}
        buttonIcon={'python'}
        tags={[
          'Python',
          'PyPI',
          'Core Contributor',
          'Team of 5',
          'Open Source'
        ]}
      >
        Desarrollo y mantenimiento de un módulo Python para acelerar el análisis
        del aprendizaje, incluyendo introducir pruebas unitarias al proyecto.
        <br />
        Mención de honor en los{' '}
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
        Aprendizaje automático aplicado al análisis del aprendizaje.
        Clasificación y agrupación por k-medias de entradas de texto, y uso de
        técnicas de aprendizaje profundo para generar descripciones de imágenes.
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
        Desarrollo de un frontend web3 para la cadena de bloques Polygon y otras
        APIs. Una plataforma para que los miembros de la comunidad puedan poner
        NFT gratuitos a la disposición de otros miembros.
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
        Contribuciones al desarrollo tanto de un frontend web3 como a varios de
        los contratos inteligentes con los que interactúa. El sitio web ofrece
        al público del podcast la posibilidad de interactuar y ganar tokens de
        la comunidad que solo se pueden conseguir contribuyendo o interactuando.
      </ProjectCard>
      <ProjectCard
        title="Studio Kura intranet"
        subheading="Studio Kura, 2012-2023"
        tags={['Ionic', 'Angular', 'CakePHP', 'Core Contributor', 'Team of 3']}
      >
        Desarrollo de la intranet de un negocio mientras crecía desde 1 persona
        y 1 localización hasta docenas de personas, varias localizaciones, y
        varias líneas de negocio.
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
        Diseño y desarrollo de actividades de p5.js y web3 para niños que están
        aprendiendo programación en un entorno de aprendizaje activo.
      </ProjectCard>
      <ProjectCard
        title="ChallengeHub"
        url="https://www.youtube.com/watch?v=kncoERjvUUQ&t=1396s"
        subheading="Djinn Mentor, 2019-2021"
        tags={['Ionic', 'Angular', 'Jekyll', 'Co-founder', 'Team of 3']}
      >
        Participé en el desarrollo de una solución de aprendizaje activo basada
        en datos, con funcionalidades como compartir materiales de enseñanza,
        monitorización del aprendizaje en tiempo real, y un chatbot para que los
        estudiantes resuelvan retos.
        <br />
        Una de las 24 startups que participó en{' '}
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
        Contribuí mejoras a un componente de Angular para selección de fecha y
        hora, porque Djinn Mentor lo quería usar en ChallengeHub.
      </ProjectCard>
      <ProjectCard
        title="Koyomito"
        url="https://apps.alecrem.com/koyomito/"
        subheading="Alecrem, 2017-2020"
        tags={['Ionic', 'Angular', 'Sole Author']}
      >
        Aplicación de calendario para iOS y Android que te enseña todo lo que
        podrías querer saber sobre el día de hoy, en el contexto del idioma y la
        cultura japoneses. Actualmente solo está disponible la versión para
        Android, pero el contenido cultural, voculario, y muestras de
        pronunciación siguen vigentes.
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
        Sitio web para una trabajadora autónoma con un formulario de contacto
        que usa la API de Airtable para almacenar los mensajes, y que finalmente
        se envíen por correo electrónico.
      </ProjectCard>
      <ProjectCard
        title="Middle School Tutor"
        url="https://middleschooltutor.alecrem.com/"
        subheading="Alecrem, 2022-2023"
        buttonLink={'https://github.com/alecrem/middleschool-cardlist'}
        tags={[
          'Python',
          'Streamlit',
          'Next.js',
          'React',
          'Sole Author',
          'Open Source'
        ]}
      >
        Herramienta para jugadores del formato Middle School de Magic: El
        encuentro. Consiste en un proyecto en Python que compila la lista de
        cartas que están permitidas en el formato, y un sitio web hecho con
        Streamlit (anteriormente Next.js) en el que se puede buscar cartas en
        dicha lista.
      </ProjectCard>
      <ProjectCard
        title="Binguerah"
        url="https://binguerah.pepinismo.net/"
        subheading="Alecrem, 2023"
        buttonLink={'https://github.com/gamerah/bingo-card'}
        tags={['Next.js', 'React', 'p5.js', 'Sole Author', 'Open Source']}
      >
        Herramienta para interacción tanto en tiempo real como asíncrona para
        podcasts que genera una tarjeta de bingo meme personalizada para cada
        combinación de nombre de usuario y número de episodio. Las casillas se
        pueden marcar manualmente mientras se escucha el episodio, o
        automáticamente al introducir la palabra clave del episodio que se
        escucha al final del programa.
      </ProjectCard>
      <ProjectCard
        title="Escucha español"
        url="https://escuchaespanol.com/"
        subheading="Alecrem, 2009-2016"
        tags={['CakePHP', 'WordPress', 'Core Contributor', 'Team of 2']}
      >
        Sitio web de membresía premium y feed de podcast personalizado para una
        serie de vídeos hechos para ayudar a los hablantes japoneses a aprender
        español.
        <br />
        Aparecimos en el programa{' '}
        <ChakraLink href="https://www.nhk.or.jp/gogaku/spanish/">
          <b>"TV de Supeingo" de la NHK</b>
        </ChakraLink>
        en 2012 y 2013.
      </ProjectCard>
    </SimpleGrid>
  )
}

export default ProjectsEs
