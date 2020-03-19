import React from "react"
import { graphql } from "gatsby"

// COMPONENTS
import Header from "../components/Header"
import Footer from "../components/Footer"
import PostList from "../components/PostList"

import { Container, Content } from "./styles"

import { Link } from "gatsby"

export default () => (
  <>
    <Header />
    <Container>
      <Content>
        <h1>Oi!</h1>
        <p>
          Essa daqui é a home do meu site e não tem nada no momento, mas, se
          você quiser ler um pouquinho mais sobre mim,{" "}
          <Link to="/about">clica aqui!</Link>
        </p>
        <p>
          <img
            src="https://media1.tenor.com/images/3715223d881f47daede4eb8b5e566d8e/tenor.gif"
            alt=""
          />
        </p>
      </Content>
      <PostList />
    </Container>
    <Footer/>
  </>
)
