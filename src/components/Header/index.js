import React from "react"
import GlobalStyle from "../../styles/global"
import { LCHeader } from "./styles"
import { Link } from "gatsby"

export default function Header() {
  return (
    <>
      <GlobalStyle />
      <LCHeader>
        <div className="container">
          <Link to="/" className="logo">
            <span>decarvalholucas</span>
          </Link>
          <div className="menu">
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </LCHeader>
    </>
  )
}
