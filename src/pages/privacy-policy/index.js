import React from "react"
import { graphql } from "gatsby"

// COMPONENTS
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SEO from "../../components/Seo"

import { Content, Container } from "./styles"

export default ({ data }) => (
  <>
    <SEO title="Política de Privacidade"/>
    <Header />
    <Container>
      <Content>
        <h1>Política de privacidade</h1>
        <p>
          Todas as suas informações pessoais recolhidas, serão usadas para o
          ajudar a tornar a sua visita no nosso site o mais produtiva e
          agradável possível. A garantia da confidencialidade dos dados pessoais
          dos utilizadores do nosso site é importante para nós. Todas as
          informações pessoais que usem o site decarvalholucas.netlify.com serão
          tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26
          de outubro de 1998 (Lei n.º 67/98). A informação pessoal recolhida
          pode incluir o seu nome, e-mail, número de telefone, morada, data de
          nascimento e/ou outros. O uso do decarvalholucas.netlify.com pressupõe
          a aceitação deste Acordo de privacidade. Toda nossa equipe reserva-se
          ao direito de alterar este acordo sem aviso prévio. Deste modo,
          recomendamos que consulte a nossa política de privacidade com
          regularidade de forma a estar sempre atualizado.
        </p>
        <h2>Os anúncios</h2>
        <p>
          Tal como outros websites, coletamos e utilizamos informação contida
          nos anúncios. A informação contida nos anúncios, inclui o seu endereço
          IP (Internet Protocol), o seu ISP (Internet Service Provider, como o
          Sapo, Clix, ou outro), o browser que utilizou ao visitar o nosso
          website (como Chrome ou o Firefox), o tempo da sua visita e que
          páginas visitou dentro do nosso website.
        </p>
        <h2>Cookie DoubleClick Dart</h2>
        <p>
          O Google, como fornecedor de terceiros, utiliza cookies para exibir
          anúncios no nosso website; Com o cookie DART, o Google pode exibir
          anúncios com base nas visitas que o leitor fez a outros websites na
          Internet; Os utilizadores podem desativar o cookie DART visitando a
          Política de privacidade da rede de conteúdo e dos anúncios do Google.
        </p>
        <h2>Os Cookies e Web Beacons</h2>
        <p>
          Utilizamos cookies para armazenar informação, tais como as suas
          preferências pessoas quando visita o nosso website. Isto poderá
          incluir um simples popup, ou uma ligação em vários serviços que
          providenciamos, tais como fóruns. Em adição também utilizamos
          publicidade de terceiros no nosso website para suportar os custos de
          manutenção. Alguns destes publicitários, poderão utilizar tecnologias
          como os cookies e/ou web beacons quando publicitam no nosso website, o
          que fará com que esses publicitários (como o Google através do Google
          AdSense) também recebam a sua informação pessoal, como o endereço IP,
          o seu ISP, o seu browser, etc. Esta função é geralmente utilizada para
          geotargeting (mostrar publicidade de Lisboa apenas aos leitores
          oriundos de Lisboa por ex.) ou apresentar publicidade direcionada a um
          tipo de utilizador (como mostrar publicidade de restaurante a um
          utilizador que visita sites de culinária regularmente, por ex.). Você
          detém o poder de desligar os seus cookies, nas opções do seu browser,
          ou efetuando alterações nas ferramentas de programas Anti-Virus, como
          o Norton Internet Security. No entanto, isso poderá alterar a forma
          como interage com o nosso website, ou outros websites. Isso poderá
          afetar ou não permitir que faça logins em programas, sites ou fóruns
          da nossa e de outras redes.
        </p>
        <h2>Ligações a Sites de terceiros</h2>
        <p>
          O decarvalholucas.netlify.com possui ligações para outros sites, os
          quais, a nosso ver, podem conter informações / ferramentas úteis para
          os nossos visitantes. A nossa política de privacidade não é aplicada a
          sites de terceiros, pelo que, caso visite outro site a partir do nosso
          deverá ler a politica de privacidade do mesmo. Não nos
          responsabilizamos pela política de privacidade ou conteúdo presente
          nesses mesmos sites.
        </p>
      </Content>
    </Container>
    <Footer />
  </>
)

export const posts = graphql`
  query {
    allSite {
      nodes {
        siteMetadata {
          siteMetadata {
            title
            description
          }
        }
      }
    }
  }
`
