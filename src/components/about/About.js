import React from 'react'
import s from '../about/about.module.css'
import Johann from '../../assets/images/Johann.jpeg'

export default function About() {
  return (
    <section className={s.about} id='überUns'>
            <div className={s.title}>Über mich</div>

        <div className={s.textBlock}>

            <div className={s.fotoAbout}>
                <img src={Johann} alt="Inhaber-Foto"/>
                <div className={s.uterFotoName}>Johann</div>
                <div className={s.unterFotoChef}>Firmeninhaber</div>
            </div>

            <div className={s.blurBlock}></div>

            <div className={s.textAbout}>
                <p>Herzlich willkommen bei JG CarSelect.</p>
                <br/>
                <p>Mein Name ist Johann Grüner. Ich bin der Inhaber und gleichzeitig Ihr persönlicher Ansprechpartner rund um Ihre Wünsche.</p>
                <br/>
                <p>Transparenz und Kundenzufriedenheit wird bei mir besonders groß geschrieben. Flexible und maßgeschneiderte Lösungen sind mir immer eine Freude, mit welcher ich stets wachsen kann.</p>
                <br/>
                <p>Besuchen Sie mich gerne und lassen Sie sich von meinem Service überzeugen.</p><br/> <p>Ich freue mich auf Sie!</p>
            </div>
        </div>
    </section>
  )
}
