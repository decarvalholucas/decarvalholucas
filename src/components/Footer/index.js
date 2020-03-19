import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { LCFooter } from "./styles"

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  const socialQuery = useStaticQuery(graphql`
    query MyQuery {
      allSite {
        nodes {
          siteMetadata {
            siteMetadata {
              social {
                name
                url
              }
            }
          }
        }
      }
    }
  `)
  const social = socialQuery.allSite.nodes[0].siteMetadata.siteMetadata.social
  return (
    <LCFooter>
      <div className="social">
        <a href={social[0].url} target="__blank" rel="nofollow">
          <FaGithub />
        </a>
        <a href={social[1].url} target="__blank" rel="nofollow">
          <FaLinkedin />
        </a>
        <a href={social[2].url} target="__blank" rel="nofollow">
          <FaTwitter />
        </a>
      </div>
    </LCFooter>
  )
}
