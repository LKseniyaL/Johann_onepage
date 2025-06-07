import React from 'react'
import s from './email.module.css'

export default function EmailForm() {
  return (
    <form
        action="https://formsubmit.co/980a7a7a488a1c6bdf8b2e62ba3bf08b"
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
        <input type="hidden" name="_next" value="http://localhost:3000/danke.html" />

    
        <button type="submit" className={s.btn}>Nachricht senden</button>
        <div className={s.subTitel}>Ihre Daten werden sicher übertragen und nicht an Dritte weitergegeben.</div>
    </form>

  )
}
