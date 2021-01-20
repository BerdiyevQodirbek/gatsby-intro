import { Link } from "gatsby"
import PropTypes from "prop-types"
import LINKS from './links'
import React from "react"
import { HeaderWrapper, NavList } from '../../styles/header'

const Header = ({ siteTitle }) => (
  <HeaderWrapper
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
          >
            {item.icon}
            <span>
              {item.title}
            </span>
          </Link>
        </NavList>
      })}
      <NavList>
        <button>Sign out</button>

      </NavList>
    </ul>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
