import React from 'react'
import s from './footer.module.css'
import logo from '../../assets/images/logo.png'
import w from '../../assets/images/whatsapp-weiss.png'
import mobile from '../../assets/images/mobile.jpeg'
import ebay from '../../assets/images/ebay.png'

export default function Footer() {
  return (
    <footer>
      <div className={s.footerBlock}>
        <a href="#home"><img src={logo} alt="CARSELECT" className={s.logo}/></a>

        <div className={s.footerBlockInfo}>
        <div className={s.info}>
          <div className={s.adresse}>Brönninghauser Str. 41 <br/>33729 Bielefeld</div>
          <div className={s.impressum}><a href={`${process.env.PUBLIC_URL}/impressum.html`} target="_blank" rel="noopener noreferrer">Impressum</a></div>
          <div className={s.impressum}><a href={`${process.env.PUBLIC_URL}/datenschutz.html`} target="_blank" rel="noopener noreferrer">
  Datenschutz
</a></div>
        </div>
        <div className={s.icons}>
           <a
              href="https://wa.me/4915560494709"
              target="_blank"
              rel="noopener noreferrer">
          
            <img src={w} alt="whatsapp" className={s.whatsapp}/>
            </a>

            <a href="https://www.kleinanzeigen.de/s-bestandsliste.html?userId=144643924">
              <img src={ebay} alt="ebay" className={s.mobile}/>
            </a>

          <a href="https://home.mobile.de/JGCARSELECT#ses" 
               target="_blank" 
               rel="noopener noreferrer"> 
              <img src={mobile} alt="mobile" className={s.mobile} />
          </a>
        </div>
        </div>
        </div>
    </footer>
  )
}
