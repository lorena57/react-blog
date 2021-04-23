import React from 'react';
import './style.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Posts</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search" />
        <IconContext.Provider value={{ textAlign: 'center', width: '100%' }}>
          <BsSearch />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Navbar;
