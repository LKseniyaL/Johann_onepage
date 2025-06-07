import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button onClick={scrollToTop} style={styles.button}>
      <FaArrowUp />
    </button>
  ) : null;
}

const styles = {
  button: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#217526',
    color: 'white',
    fontSize: '18px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
    cursor: 'pointer',
    zIndex: 1000,
    transition: 'opacity 0.3s ease',
  },
};
