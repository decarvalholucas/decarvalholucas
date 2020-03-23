import React from "react"
import { graphql } from "gatsby"

// COMPONENTS
import Header from "../components/Header"
import Footer from "../components/Footer"

import {
  Container,
  Content,
  LinkTranstionDown,
} from "./styles"

export default ({ data }) => (
  <>
    {console.log(data)}
    <Header />
    <Container>
      <Content>
        <h1>Olá!</h1>
        <p>
          Me chamo Lucas de Carvalho, sou de Nova Friburgo, Rio de Janeiro, esse
          é o meu Blog e tenho o intuito de compartilhar conteúdo sobre
          programação, tecnologia e e-commerce, ou seja, tudo da área que amo e
          vivo. Se você quiser saber mais sobre mim,
          <LinkTranstionDown to="/about"> clica aqui.</LinkTranstionDown>
        </p>
        <h2 className="blog-latest-posts">Últimas do blog</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article className="postlist__container">
            <div className="post__date">{node.frontmatter.date}</div>
            <div key={node.id}>
              <LinkTranstionDown to={node.fields.slug} className="post__slug">
                <h3 className="post__title">{node.frontmatter.title}</h3>
                <p class="post__description">{node.frontmatter.description}</p>
              </LinkTranstionDown>
            </div>
          </article>
        ))}
      </Content>
    </Container>
    <Footer />
  </>
)

export const posts = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(locale: "pt-br", formatString: "DD MMM[,] YYYY")
            description
          }
          fields {
            slug
          }
          excerpt
          html
          timeToRead
        }
      }
    }
  }
`
