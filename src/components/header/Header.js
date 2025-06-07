import React from 'react'
import s from './header.module.css';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <div className={s.container} id='home'>
      <div className={s.logo}>
        <img src={logo} alt="Firmenlogo" />
      </div>
      <nav className={s.nav}>
        <ul>
          <li><a href="#home">Startseite</a></li>
          <li><a href="#überUns">Über uns</a></li>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#bewertungen">Bewertungen</a></li>
          <li><a href="#tipps">Tipps</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
          <li><a href="#FAQ">FAQ</a></li>
        </ul>
      </nav>
    </div>
  )
}
