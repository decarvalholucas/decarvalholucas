import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import PostCard from "../PostCard"
import { Container } from "./styles"

export default function PostList() {
  let { latestPosts } = useStaticQuery(graphql`
    query PostList {
      latestPosts: allMarkdownRemark(
        limit: 3
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
          }
        }
      }
    }
  `)

  const postList = latestPosts.edges

  return (
    <Container>
      <p>últimos posts...</p>
      {postList.map(
        ({
          node: {
            id,
            frontmatter: { title, date, description }
          },
        }) => (
          <PostCard
            key={id}
            title={title}
            description={description}
            date={date}
          />
        )
      )}
    </Container>
  )
}
