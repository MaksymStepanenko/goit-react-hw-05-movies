import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
