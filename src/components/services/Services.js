// import React, { useState, useRef } from 'react';
// import s from './services.module.css';
// import allServices from '../../arrays/allServices';
// import btnNext from '../../assets/images/btnServiseNext.png';
// import btnPrev from '../../assets/images/btnServisePrev.png';


// export default function Services() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
//   const [slideIndex, setSlideIndex] = useState(0);
//   const itemsPerSlide = 4;
//   const totalSlides = Math.ceil(allServices.length / itemsPerSlide);

//   const next = () => {
//     setSlideIndex((prev) => (prev + 1) % totalSlides);
//   };

//   const prev = () => {
//     setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const visibleServices = allServices.slice(
//     slideIndex * itemsPerSlide,
//     slideIndex * itemsPerSlide + itemsPerSlide
//   );

//   return (
//     <section className={s.services} id="leistungen">
//       <div className={s.titleBlock}>
//         <div className={s.title}>Leistungen</div>
//         <div className={s.subtitle}>Erfahrung und ehrliche Beratung – ganz ohne Stress und Risiko</div>
//       </div>

// <div className={`${s.infoBlocksWrapper}`}>
//       <div className={s.infoBlocks}>
//         {(window.innerWidth <= 500 ? allServices : visibleServices).map((service, index) => (
//   <div className={s.infoBlock} key={index}>
//     <div className={s.infoTeil}>
//       <div className={s.cardTitle}>{service.title}</div>
//       <div className={s.btn}>
//         <a href="https://www.intec-garantie.de/">
//           <img src={service.btn} alt="" />
//         </a>
//       </div>
//     </div>
//     <div className={s.bild}>
//       <img src={service.image} alt="Leistungen-Bild" className={s.images} />
//     </div>
//   </div>
// ))}
//       </div>
//       </div>

//     <div className={s.blockPregress}>
//       <div className={s.progressBarContainer}>
//         <div
//           className={s.progressBarFill}
//           style={{ width: `${((slideIndex + 1) / totalSlides) * 100}%` }}
//         />
//       </div>
//       <div className={s.controls}>
//             <img src={btnPrev} alt="" onClick={next}/>
//             <img src={btnNext} alt="" onClick={prev}/>
//       </div>
//     </div>
//     </section>
//   );
// }

import React, { useRef, useState, useEffect } from 'react';
import s from './services.module.css';
import allServices from '../../arrays/allServices';
import btnNext from '../../assets/images/btnServiseNext.png';
import btnPrev from '../../assets/images/btnServisePrev.png';

export default function Services() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [scrollProgress, setScrollProgress] = useState(1 / allServices.length);
  const sliderRef = useRef(null);

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(allServices.length / itemsPerSlide);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!isMobile || !el) return;

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const progress = el.scrollLeft / maxScroll;
      setScrollProgress(progress);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const next = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
  const prev = () => setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

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

      <div className={s.infoBlocksWrapper} ref={sliderRef}>
        <div className={s.infoBlocks}>
          {(isMobile ? allServices : visibleServices).map((service, index) => (
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
                <img src={service.image} alt="Leistungen-Bild" className={s.images} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.blockPregress}>
        <div className={s.progressBarContainer}>
          <div
            className={s.progressBarFill}
            style={{
              width: isMobile
                ? `${scrollProgress * 100}%`
                : `${((slideIndex + 1) / totalSlides) * 100}%`,
            }}
          />
        </div>
        {!isMobile && (
          <div className={s.controls}>
            <img src={btnPrev} alt="" onClick={prev} />
            <img src={btnNext} alt="" onClick={next} />
          </div>
        )}
      </div>
    </section>
  );
}
