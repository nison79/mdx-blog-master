/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled , { ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

import Header from "./header"
import "./layout.css"

const PageContainer = styled.div`
  display:grid;
  grid-template-columns:1fr;
  min-height:90vh;
  font-family: 'Poppins';
`

const FooterStyled = styled.footer`
  display:flex;
  justify-content:center;
  font-family: 'Poppins';
  font-size:0.8rem;

  a {
    margin-left:5px;
    display:inline;
    text-decoration:none;
    color:lightcoral;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
  <ThemeProvider theme={theme}>
      <Header  siteTitle={data.site.siteMetadata?.title || `Title`} />
      <PageContainer>
        <main> { children } </main>
          
      </PageContainer>
      <FooterStyled
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built by
            {/* {` `} */}
            <a href="https://www.gatsbyjs.com">{data.site.siteMetadata?.author || `Title`}</a>
      </FooterStyled>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
