import React, { useState, useEffect, useRef } from 'react';
import s from './bewertungen.module.css';
import reviews from '../../arrays/arreyReviews';
import vector from '../../assets/images/кнопка переключения.png';

export default function Bewertungen() {
  const getItemsPerSlide = () => (window.innerWidth <= 850 ? 1 : 2);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  const isMobile = window.innerWidth <= 480;

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (index + itemsPerSlide >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + itemsPerSlide);
    }
  };

  const prev = () => {
    if (index - itemsPerSlide < 0) {
      const lastFullPage = Math.floor((reviews.length - 1) / itemsPerSlide) * itemsPerSlide;
      setIndex(lastFullPage);
    } else {
      setIndex(index - itemsPerSlide);
    }
  };

  const visibleReviews = isMobile ? reviews : reviews.slice(index, index + itemsPerSlide);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const slideIndex = Math.round(scrollLeft / width);
      setCurrentSlide(slideIndex);
    };

    const node = scrollRef.current;
    node.addEventListener('scroll', handleScroll);
    return () => node.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section className={s.reviews} id="bewertungen">
      <div className={s.title}>Kundenbewertungen</div>

      <div className={s.blockReviews}>
        <div className={s.itemReviewsBlock} ref={isMobile ? scrollRef : null}>
          {visibleReviews.map((review, i) => (
            <div key={i} className={s.itemReviews}>
              <div className={s.fotoAndText}>
                <div className={s.foto}><img src={review.image} alt="" /></div>
                <div className={s.text}>{review.text}</div>
              </div>
              <div className={s.name}>{review.name}</div>
              <div className={s.stadt}>{review.stadt}</div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div className={s.bthBlock}>
            <button onClick={next}><img src={vector} alt="" /></button>
          </div>
        )}

        {isMobile && (
          <div className={s.dotsContainer}>
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`${s.dot} ${i === currentSlide ? s.active : ''}`}
              ></span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
