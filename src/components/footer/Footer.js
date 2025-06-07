import React from 'react'
import s from './footer.module.css'
import logo from '../../assets/images/logo.png'
import w from '../../assets/images/whatsapp-weiss.png'
import mobile from '../../assets/images/mobile.jpeg'

export default function Footer() {
  return (
    <footer>
        <a href="#home"><img src={logo} alt="CARSELECT" className={s.logo}/></a>
        <div className={s.adresse}>Brönninghauser Str. 41 <br/>33729 Bielefeld</div>
        <div className={s.icons}>
           <a
              href="https://wa.me/4917673568991"
              target="_blank"
              rel="noopener noreferrer">
          
            <img src={w} alt="whatsapp" />
            </a>

          <a href="https://home.mobile.de/JGCARSELECT#ses" 
               target="_blank" 
               rel="noopener noreferrer"> 
              <img src={mobile} alt="mobile" className={s.mobile} />
          </a>
        </div>
    </footer>
  )
}
