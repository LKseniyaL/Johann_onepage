import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './burgerMenu.module.css';
import logo from '../../assets/images/logo.png';

const mainMenuItems = [
  { name: 'Startseite', anchor: '#home' },
  { name: 'Über uns', anchor: '#überUns' },
  { name: 'Leistungen', anchor: '#leistungen' },
  { name: 'Bewertungen', anchor: '#bewertungen' },
  { name: 'Tipps', anchor: '#tipps' },
  { name: 'Kontakt', anchor: '#kontakt' },
  { name: 'FAQ', anchor: '#FAQ' },
];

const legalMenuItems = [
  { name: 'Impressum', href: `${process.env.PUBLIC_URL}/impressum.html` },
  { name: 'Datenschutz', href: `${process.env.PUBLIC_URL}/datenschutz.html` },
];

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.logo} ${styles.logoAnimated}`}>
        <img src={logo} alt="Logotip" />
      </div>

      <div className={`${styles.burger} ${styles.burgerAnimated}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className={styles.menu}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ul>
                {[...mainMenuItems, ...legalMenuItems].map((item, index) => (
                  <motion.li
                    key={item.name}
                    className={styles.menuItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {item.anchor ? (
                      <a
                        href={item.anchor}
                        onClick={(e) => {
                          e.preventDefault();
                          const section = document.querySelector(item.anchor);
                          if (section) section.scrollIntoView({ behavior: 'smooth' });
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </a>
                    )}
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

