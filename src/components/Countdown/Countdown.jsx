import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Countdown.module.css';

function Countdown() {
  const { t } = useTranslation('countdown');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const endDate = new Date("2024-12-31");
  useEffect(() => {
    let difference = +endDate - +new Date();
    if (!(difference > 0)) {return}
    const timer = setTimeout(() => {
      difference = +endDate - +new Date();
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={`${styles.countdown} bg-white p-3 p-md-4 rounded-5 mx-auto`}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <>
          <div key={unit} className={styles.timeUnit}>
            <span className={styles.number}>{value || '00'}</span>
            <span className={styles.label}>{t(unit)}</span>
          </div>
          {unit !== 'seconds' && <span className={styles.separator}>:</span>}
        </>
      ))}
    </div>
  );
}

export default Countdown;
