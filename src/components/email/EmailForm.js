import React from 'react'
import s from './email.module.css'

export default function EmailForm() {
  return (
    <form
        action="https://formsubmit.co/info@jg-carselect.com"
        method="POST"
    >
        <input type="text" name="name" placeholder="Ihr Name" required  className={s.name}/>
        <div className={s.emailTelBlock}>
          <input type="email" name="email" placeholder="Ihre E-Mail" required className={s.email}/>
          <input type="tel" name="phone" placeholder="Telefonnummer"  className={s.tel}/>
        </div>
        <textarea name="message" placeholder="Ihre Nachricht" required />
    
    {/* Anti-bot поле */}
        {/* <input type="hidden" name="_captcha" value="false" /> */}
        <input type="hidden" name="_next" value={`${window.location.origin}/danke.html`} />    
        <button type="submit" className={s.btn}>Nachricht senden</button>
        <div className={s.subTitel}>Mit dem Absenden des Formulars erkläre ich mich mit der Verarbeitung meiner Daten gemäß der 
            <a href={`${process.env.PUBLIC_URL}/datenschutz.html`} target="_blank"> Datenschutzerklärung</a> einverstanden.
        </div>
    </form>

  )
}
