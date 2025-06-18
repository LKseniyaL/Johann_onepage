import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './burgerMenu.module.css';
import logo from '../../assets/images/logo.png';

const menuItems = [
  { name: 'Startseite', anchor: '#home' },
  { name: 'Über uns', anchor: '#überUns' },
  { name: 'Leistungen', anchor: '#leistungen' },
  { name: 'Bewertungen', anchor: '#bewertungen' },
  { name: 'Tipps', anchor: '#tipps' },
  { name: 'Kontakt', anchor: '#kontakt' },
  { name: 'FAQ', anchor: '#FAQ' },
];

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}> <img src={logo} alt="Logotip" /></div>
      <div className={styles.burger} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            onClick={() => setIsOpen(false)} // клик вне меню
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className={styles.menu}
              onClick={(e) => e.stopPropagation()} // чтобы клик внутри меню не закрывал
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    className={styles.menuItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={item.anchor}
                      onClick={(e) => {
                        e.preventDefault(); // отключаем резкий переход
                        const section = document.querySelector(item.anchor);
                        if (section) section.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false); // закрываем меню
                      }}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

