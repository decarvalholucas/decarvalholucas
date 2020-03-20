import React from "react"
import { graphql } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Header />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
