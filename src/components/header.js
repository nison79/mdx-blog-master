import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const HeaderStyled = styled.header`
  background-color:#eee;
  h3 {
    font-family: 'Poppins';
    font-weight:400;
    letter-spacing:-2px;
  }
  
`

const LinkStyled = styled(Link)`
  text-decoration:none;
  color:black;
`

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <div>
      <h3>
        <LinkStyled to="/">
          {siteTitle}
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
