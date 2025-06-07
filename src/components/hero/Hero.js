import React from 'react'
import s from './hero.module.css'
import fon from '../../assets/images/backgraug.png'
import TypewriterHeader from '../TypewriterHeader'

export default function Hero() {
  return (
    <main className={s.hero} id='home'>
      <img src={fon} alt="Bild" />
      <div className={s.content}>
        <div className={s.h1}>
        <TypewriterHeader/>
        </div>
        {/* <h1>Fahrzeuge, denen Sie vertrauen können – mit geprüfter Geschichte</h1> */}
        {/* <h2>Autos für Menschen, die Ehrlichkeit und Qualität schätzen</h2>
        <div className={s.btn}>Jetzt Autos entdecken</div> */}
      </div>
    </main>
  )
}
