import React from 'react';
import { Link } from 'gatsby';
import { AiOutlineBell } from 'react-icons/ai';
import { Nav } from '../../styles/header';
import { FlexWrapper } from '../../styles';
// import defaultImg from '../../assets/img/profile.jpg';

const Navbar = (props) => {
  const {  name, type } = props;

  return (
    <Nav>
      <select name="lang" className="ml-auto">
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
      <Link to="/students/new" className="links" display="inline-block">
        <AiOutlineBell size="20" />
      </Link>
      <Link to="/profile" className="profile-img" display="inline-block">

        <FlexWrapper fd="column" align="flex-end">
          <small>{name || 'User'}</small>
          <small>{type || 'Customer'}</small>
        </FlexWrapper>

        {/* <img src={img || defaultImg} onError={e => e.target.src = defaultImg} alt="Profile" /> */}
      </Link>
    </Nav>
  )
};

export default Navbar;