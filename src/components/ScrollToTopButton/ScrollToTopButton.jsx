import { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';
import ArrowDown from '@/assets/icons/down.png';

const ScrollToTopButton = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <button onClick={scrollToTop} className={`${styles.scrollToTop} ${isScrollDown ? styles.goUp : ''}`}>
        <img src={ArrowDown} alt="Scroll to Top" />
      </button>
    </>
  );
};

export default ScrollToTopButton;