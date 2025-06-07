import React, {useState} from 'react'
import s from './faq.module.css'
import audi from '../../assets/images/audi.png'
import faqs from './arrey'
import arrow from '../../assets/images/arrow.png'

export default function Faq() {

const [activeIndex, setActiveIndex] = useState(null);

const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={s.faq} id='FAQ'>
        <div className={s.title}>FAQ</div>
        
        <div className={s.audi}><img src={audi} alt="" /></div>

        <div className={s.faqContainer}>
            {faqs.map((faq, index) => (
                <div key={index} className={s.faqItem}>
                    
                    <div className={s.question} onClick={() => toggle(index)}>
                        {faq.question}
                        <div className={`${s.arrow} ${activeIndex === index ? s.rotate : ''}`}>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    
                    {activeIndex === index && (
                    <div className={s.answer}>
                        {faq.answer}
                    </div>
            )}
                </div>
        ))}
        </div>
    </section>
  )
}
