import React from 'react';
import logo from '../../Images/star-wars.svg';
import style from './style.module.css';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logoWrapper}>
          <Link to="/">
            <img src={logo} className={style.mainLogo} alt="logo" />
          </Link>
        </div>
      </div>
    </header>
  );
};
