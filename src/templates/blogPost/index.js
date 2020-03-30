import React from "react"
import { graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"
import Helmet from "react-helmet"

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {post.frontmatter.title} -{" "}
          {data.allSite.nodes[0].siteMetadata.siteMetadata.title}
        </title>
        <meta name="description" content={post.frontmatter.description} />
      </Helmet>
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
        description
      }
      fields {
        slug
      }
    }
    allSite {
      nodes {
        siteMetadata {
          siteMetadata {
            title
          }
        }
      }
    }
  }
`
