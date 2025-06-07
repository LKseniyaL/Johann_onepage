import React from 'react'
import { useState } from 'react'
import s from './bewertungen.module.css'
import reviews from '../../arreyReviews'
import vector from '../../assets/images/кнопка переключения.png'

export default function Bewertungen() {

    
    const [ index, setIndex ] = useState(0);
    const itemsPerSlide = 2;

    //кнопка вперед
    const next = () => {
        if(index + itemsPerSlide >= reviews.length){
            setIndex(0);
        }else{
            setIndex(index + itemsPerSlide);
        }
    }

    //кнопка назад 
    const prev = () => {
        if(index - itemsPerSlide < 0){
            const lastFullPage = Math.floor((reviews.length - 1) / itemsPerSlide) * itemsPerSlide;
            setIndex(lastFullPage);
        }else{
            setIndex(index - itemsPerSlide);
        }
    }


  const visibleReviews = reviews.slice(index, index + itemsPerSlide);

  return (
    <section className={s.reviews} id='bewertungen'>
        <div className={s.title}>Kundenbewertungen</div>

        <div className={s.blockReviews}>
            <div className={s.itemReviewsBlock}>
                {visibleReviews.map((review, i) => (
                <div key={i} className={s.itemReviews}>
                    <div className={s.fotoAndText}>
                        <div className={s.foto}> <img src={review.image} alt="" /></div>
                        <div className={s.text}>{review.text}</div>
                    </div>
                    <div className={s.name}>{review.name}</div>
                    <div className={s.stadt}>{review.stadt}</div>
                </div>
                ))}
            </div>
            <div className={s.bthBlock}>
                <button onClick={prev} className={s.prevBtn}><img src={vector} alt="" /></button>
                <button onClick={next}><img src={vector} alt="" /></button>
            </div>
        </div>
    </section>
  )
}
