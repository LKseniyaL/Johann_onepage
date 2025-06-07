import { useEffect, useState } from 'react';
import s from '../components/hero/hero.module.css'

const TypewriterHeader = () => {
  const fullText = 'Fahrzeuge, denen Sie vertrauen können – mit geprüfter Geschichte';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [showRest, setShowRest] = useState(false); // флаг для показа h2 и кнопки

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      // Показать остальные элементы через 300 мс после окончания
      setTimeout(() => setShowRest(true), 300);
    }
  }, [index]);

  return (
    <div>
      <h1 className={s.h1}>
        {displayedText}
      </h1>

      {showRest && (
        <>
          <h2>Autos für Menschen, die Ehrlichkeit und Qualität schätzen</h2>
          <div className={s.btn}>
            <a href="https://home.mobile.de/JGCARSELECT#ses" 
               target="_blank" 
               rel="noopener noreferrer"
              >Jetzt Autos entdecken </a></div>
        </>
      )}
    </div>
  );
};

export default TypewriterHeader;
