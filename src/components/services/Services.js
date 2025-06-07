import React, { useState } from 'react';
import s from './services.module.css';
import allServices from '../../arrays/allServices';
import btnNext from '../../assets/images/btnServiseNext.png';
import btnPrev from '../../assets/images/btnServisePrev.png';


export default function Services() {
  const [slideIndex, setSlideIndex] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(allServices.length / itemsPerSlide);

  const next = () => {
    setSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleServices = allServices.slice(
    slideIndex * itemsPerSlide,
    slideIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <section className={s.services} id="leistungen">
      <div className={s.titleBlock}>
        <div className={s.title}>Leistungen</div>
        <div className={s.subtitle}>Erfahrung und ehrliche Beratung – ganz ohne Stress und Risiko</div>
      </div>

      <div className={s.infoBlocks}>
        {visibleServices.map((service, index) => (
          <div className={s.infoBlock} key={index}>
            <div className={s.infoTeil}>
              <div className={s.cardTitle}>{service.title}</div>
              <div className={s.btn}>
                <a href="https://www.intec-garantie.de/">
                  <img src={service.btn} alt="" />
                </a>
              </div>
            </div>
            <div className={s.bild}>
              <img src={service.image} alt="Leistungen-Bild" />
            </div>
          </div>
        ))}
      </div>

    <div className={s.blockPregress}>
      <div className={s.progressBarContainer}>
        <div
          className={s.progressBarFill}
          style={{ width: `${((slideIndex + 1) / totalSlides) * 100}%` }}
        />
      </div>
      <div className={s.controls}>
            <img src={btnPrev} alt="" onClick={next}/>
            <img src={btnNext} alt="" onClick={prev}/>
      </div>
    </div>
    </section>
  );
}
