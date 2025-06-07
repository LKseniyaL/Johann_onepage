import React from 'react'
import Hero from '../hero/Hero'
import s from '../main/main.module.css'
import About from '../about/About'
import Services from '../services/Services'
import Bewertungen from '../bewertungen/Bewertungen'
import Tipps from '../tipps/Tipps'
import Kontakt from '../kontakt/Kontakt'

export default function Main() {
  return (
    <main className={s.main}>
      <About/>
      <Services/>
      <Bewertungen/>
      <Tipps/>
      <Kontakt/>
    </main>
  )
}
