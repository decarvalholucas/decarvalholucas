import React from "react"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"

import { Container, Content } from "./styles"

// COMPONENTS
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default ({ data }) => {
  const post = data.markdownRemark
  const disqusConfig = {
    shortname: "decarvalholucas",
    config: { identifier: post.fields.slug, title: post.frontmatter.title },
  }
  return (
    <>
      <Header />
      <Container>
        <Content>
          <time className="postDate">{post.frontmatter.date}</time>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <DiscussionEmbed {...disqusConfig} />
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD MMMM [de] YYYY")
      }
      fields {
        slug
      }
    }
  }
`
