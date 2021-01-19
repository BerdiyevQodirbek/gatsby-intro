import { Link } from "gatsby"
import PropTypes from "prop-types"
import LINKS from './links'
import React from "react"
import S, { NavList } from '../../styles/header'

const {
  HeaderWrapper
} = S

const Header = ({ siteTitle }) => (
  <HeaderWrapper
    style={{
      position: 'absolute',
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul>
        {LINKS.map((item, index) => {
          return <NavList key={index} >
            <Link 
            to={item.url}
            activeClassName='active'
            >{item.title}</Link>
          </NavList>
        })}
        <NavList>
          <button>Sign out</button>

        </NavList>
      </ul>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
