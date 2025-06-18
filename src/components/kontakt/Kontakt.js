import React from 'react'
import s from './kontakt.module.css'
import whatsApp from '../../assets/images/whatsapp.png'
import phone from '../../assets/images/phone.png'
import google from '../../assets/images/google.png'
import EmailForm from '../email/EmailForm'

export default function Kontakt() {
  return (
    <section className={s.kontakt} id='kontakt'>
        <div className={s.titleBlock}>
            <div className={s.title}>Kontakt</div>
            <div className={s.subTitle}>Haben Sie Fragen? Ich beantworte sie gerne!</div>
        </div>
        <div className={s.kontaktInfoBlock}>
            <div className={s.telAdresseBlock}>
                
                <div className={s.telBlock}>
            

                <div className={s.tel}>
                    {/* <div className={s.oder}>oder</div> */}
                    <div className={s.block2}>
                        <img src={phone} alt="Telefon" />
                        <div className={s.text}>Rufen Sie mich an:</div>
                    </div>
                    <div className={s.telNummer}><a href="tel:+4917673568991">+49 176 344 15 895</a></div>
                </div>
                <div className={s.btn}><a href="tel:+4917673568991">Jetzt anrufen</a></div>
                    {/* WhatsApp anfang */}
                    <div className={s.whatsApp}>
                        <a
                            href="https://wa.me/4917673568991"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={whatsApp} alt="WhatsApp" />
                            <div className={s.whatsAppText}>Jetzt über WhatsApp schreiben</div>
                        </a>
                    </div>
                {/* end */}
                </div>

                {/* adresse block anfang */}
                <div className={s.adresseBlock}>
                    <div className={s.imgBlock}>
                        <a
                            href="https://www.google.com/maps?q=Brönninghauser+Straße+41,+33729+Bielefeld"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={google} alt="" />
                            <div className={s.text}>Standort</div>
                        </a>
                    </div>
                    <div className={s.adresseText}>
                        Brönninghauser Str. 41 <br/>33729 Bielefeld
                    </div>
                    {/* <div className={s.öffnungszeiten}>Öffnungszeiten</div> */}
                </div>
                {/* end */}
            </div>
            <div className={s.frageBlock}>
                <EmailForm/>
            </div>
        </div>
    </section>
  )
}
