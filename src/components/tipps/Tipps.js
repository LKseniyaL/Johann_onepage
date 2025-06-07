// import React from 'react'
// import s from './tipps.module.css'
// import card1 from '../../assets/images/card1.png'
// import card2 from '../../assets/images/card2.png'
// import card3 from '../../assets/images/card3.png'
// import card4 from '../../assets/images/card4.png'


// export default function Tipps() {
//   return (
//     <section className={s.tipps} id='tipps'>
//         <div className={s.titleBlock}>
//             <div className={s.title}>Autokauf-Ratgeber</div>
//             <div className={s.subTitle}>Praktische Tipps – für alle, die ihr Auto gut informiert und ohne Risiko kaufen wollen</div>
//         </div>
//         <div className={s.cardsBlock}>
//             <div>
//                 <div className={s.image}><img src={card1} alt="" /></div>
//                 <div className={s.text}>Gebrauchtwagen kaufen – worauf Sie achten sollten, um keine böse Überraschung zu erleben</div>
//             </div>
//             <div>
//                 <div className={s.image}><img src={card2} alt="" /></div>
//                 <div className={s.text}>Fahrzeugpapiere prüfen – das müssen Sie vor dem Kauf wissen</div>
//             </div>
//             <div>
//                 <div className={s.image}><img src={card3} alt="" /></div>
//                 <div className={s.text}>Tacho-Manipulation erkennen – so schützen Sie sich vor Betrug</div>
//             </div>
//             <div>
//                 <div className={s.image}><img src={card4} alt="" /></div>
//                 <div className={s.text}>Privater Autokauf – Schritt für Schritt erklärt</div>
//             </div>
//         </div>
//     </section>
//   )
// }

import React, { useState } from 'react';
import s from './tipps.module.css';
import tippsData from '../../arrays/tippsData';


export default function Tipps() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={s.tipps} id="tipps">
      <div className={s.titleBlock}>
        <div className={s.title}>Autokauf-Ratgeber</div>
        <div className={s.subTitle}>Praktische Tipps – für alle, die ihr Auto gut informiert und ohne Risiko kaufen wollen</div>
      </div>

      <div className={s.cardsBlock}>
        {tippsData.map((card, index) => (
          <div key={index} className={s.card}>
            <div className={s.imageWrapper} onClick={() => toggleAnswer(index)}>
              {openIndex === index ? (
                <div className={s.answer}>{card.answer}</div>
              ) : (
                <img src={card.image} alt="" className={s.image} />
              )}
            </div>
            <div className={s.text}>{card.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

