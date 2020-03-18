import React from "react"

// COMPONENTS
import Header from '../components/Header';

import { Content, Container } from './styles';

export default () => (
  <>
    <Header/>
    <Container>
      <Content>
        <h1>Fala ai!</h1>
        <p>
          Meu nome é Lucas de Carvalho. Trabalho e estudo programação desde 
          2014. Sou apaixonado por projetos open source e também por e-commerce.
        </p>
        <p>
        Atualmente estou trabalhando no e-commerce da
        <a href="https://www.livreeleve.com.br" rel="nofollow"> Livre e Leve</a>. 
        Sou dev, estou lá desde 2016 e atuo diretamente na 
        parte de manutenção e desenvolvimento do site e ajudo em algumas coisas 
        por fora, como um bom carinha do T.I.
        </p>
        <p>
        Quando estou fora do trabalho eu gosto de estudar, agora este blog vai
        ser mais um hobby em minha vida, junto com tantos outros como por exemplo:
        trilhas, academia, futebol com os amigos, entre VÁRIAS outras coisas.
        </p>
        <p>
        Sou apaixonado também por astronomia e como não posso deixar de falar,
        por cachorros e por Harry Potter. Junto com minha família, são verdadeiramente
        minhas paixões.
        </p>

        <p>
          Espero que você esteja gostando do meu site, de vez em quando vou soltar
          uns artigos bem maneiros aqui com minha visão sobre o mundo da tecnologia!
        </p>

        <p>
        Então, obrigado pela visita, abração e seja bem vindo!
        </p>
      </Content>
    </Container>
  </>
);
