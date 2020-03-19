import React from "react"
import { FaTags } from "react-icons/fa"
import { Container } from "./styles"

export default function PostCard({ title, date, description }) {
  return (
      <Container>
        <div>
          <h1>{title || ""}</h1>
          <p>{date || ""}</p>
        </div>
        <p>{description || ""}</p>
      </Container>
  )
}
