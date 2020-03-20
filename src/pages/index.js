import React from "react"
import { graphql, Link } from "gatsby"

// COMPONENTS
import Header from "../components/Header"
import Footer from "../components/Footer"

import { Container, Content } from "./styles"

export default ({ data }) => (
  <>
    {console.log(data)}
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
        <h2>Veja no Blog</h2>
        <div className="postlist">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
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
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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
