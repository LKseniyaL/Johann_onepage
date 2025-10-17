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

