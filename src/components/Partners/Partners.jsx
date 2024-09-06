import { Container, Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from './Partners.module.css';
import { useState, useEffect } from 'react';
import { getPartners } from '@data/partners';
import { multiplyArray } from '@utils';
function Partners() {
  const { t } = useTranslation('partners');
  const [slides, setSlides] = useState([]);
  const ITEMS_PER_SLIDE = 5;

  const partnersToSlide = (partners) => {
    const multipliedPartners = multiplyArray(partners, ITEMS_PER_SLIDE);
    const partnersSlides = [];
    for (let i = 0; i < multipliedPartners.length; i += ITEMS_PER_SLIDE) {
      partnersSlides.push(multipliedPartners.slice(i, i + ITEMS_PER_SLIDE));
    }
    setSlides(partnersSlides);
  };

  useEffect(() => {
    const partners = getPartners();
    partnersToSlide(partners);
  }, []);

  return (
    <section className={styles.partnersSection} id="partners">
      <Container>
        <h2 className={`${styles.sectionTitle} section-title text-center`}>{t('title')}</h2>
        <Carousel
          indicators={false}
          controls={true}
          interval={null}
          className={styles.partnersCarousel}
        >
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className={styles.partnerLogos}>
                {slide.map((partner) => (
                  <img
                    key={partner.id}
                    src={partner.logo}
                    alt={partner.name}
                    className={styles.partnerLogo}
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Partners;
