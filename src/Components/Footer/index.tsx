import React from 'react';
import style from './style.module.css';
import logo from '../../Images/star-wars.svg';

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footerLogo}>
          <img src={logo} />
        </div>
        <div className={style.footerLinks}>
          <a href="/">Terms of Use</a>|
          <a href="/">Additional Content Information</a>|
          <a href="/">Privacy Policy</a>|
          <a href="/">Children’s Online Privacy Policy</a>|
          <a href="/">Star Wars Helpdesk</a>
        </div>
      </div>
    </footer>
  );
};
