import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const HeaderStyled = styled.header`
  background-color:#eee;
  display:flex;
  align-items:center;
  justify-content:space-between;
  h3 {
    font-family: 'Poppins';
    font-weight:400;
    letter-spacing:-2px;
    margin-top:0px;
    margin-bottom:0px;
    margin-right:8px;
    
    padding:1rem 0rem;
  }
  
`
const StaticImageBox= styled.div`
  margin-left:1rem;
`

const LinkStyled = styled(Link)`
  margin-right:1rem;
  text-decoration:none;
  color:black;
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <StaticImageBox>
        <StaticImage 
        alt="logo"
        width={40}
        src="../images/slice1.svg" /> 
    </StaticImageBox>
      <div>
        <h3>
          <LinkStyled to="/">
            Blog
          </LinkStyled>
        </h3>
      </div>
    
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
