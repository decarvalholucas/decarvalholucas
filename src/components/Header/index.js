import React from "react"
import GlobalStyle from "../../styles/global"
import { LCHeader, LinkTranstionUp, LinkTranstionDown } from "./styles"

export default function Header() {
  return (
    <>
      <GlobalStyle />
      <LCHeader>
        <div className="container">
          <LinkTranstionUp to="/" className="logo">
            <span>decarvalholucas</span>
          </LinkTranstionUp>
          <div className="menu">
            <div>
              <ul>
                <li>
                  <LinkTranstionUp to="/">Home</LinkTranstionUp>
                </li>
                <li>
                  <LinkTranstionDown to="/about">About</LinkTranstionDown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </LCHeader>
    </>
  )
}
