import React from 'react'
import s from '../about/about.module.css'
import Johann from '../../assets/images/Johann.jpeg'
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className={s.about} id='überUns'>
            <div className={s.title}>Über mich</div>

        <div className={s.textBlock}>

            <div className={s.fotoAbout}>
                <motion.img 
                  src={Johann} 
                  alt="Inhaber-Foto" 
                  className={s.fadeInImage}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}/>
                <div className={s.uterFotoName}>Johann</div>
                <div className={s.unterFotoChef}>Firmeninhaber</div>
            </div>

            <div className={s.blurBlock}></div>

            <div className={s.textAbout}>
                <p>Herzlich willkommen bei JG CarSelect.</p>
                <p>Mein Name ist Johann Grüner. Ich bin der Inhaber und gleichzeitig Ihr persönlicher Ansprechpartner rund um Ihre Wünsche.</p>
                <p>Transparenz und Kundenzufriedenheit wird bei mir besonders geschätzt. Flexible und maßgeschneiderte Lösungen sind mir stets eine Freude, mit der ich wachsen kann.</p>
                <p>Besuchen Sie mich gerne und lassen Sie sich von meinem Service überzeugen.</p> <p>Ich freue mich auf Sie!</p>
            </div>
        </div>
    </section>
  )
}
