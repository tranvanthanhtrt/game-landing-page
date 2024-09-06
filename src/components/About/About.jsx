import { Container, Row, Col, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import CalendarIcon from '@assets/icons/calendar-tick.svg';
import DesignIcon from '@assets/icons/pen-tool-2.svg';
import TeamIcon from '@assets/icons/people.svg';
import FairyImg from '@assets/images/about/fairy_2.png';
import MapImg from '@assets/images/about/pin-map.png';

function About() {
  const { t } = useTranslation('about');

  const features = [
    { name: '24_hour', icon: CalendarIcon, title: t('24_hour'), description: t('24HourDescription') },
    { name: 'design', icon: DesignIcon, title: t('design'), description: t('designDescription') },
    { name: 'team', icon: TeamIcon, title: t('team'), description: t('teamDescription') },
  ];

  return (
    <section className={styles.about} id="about">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className={`${styles.title} section-title text-start`}>{t('title')}</h2>
            <p className={styles.description}>{t('description')}</p>
            <Row className={styles.stats}>
              <Col xs={6} md={12} className='mb-2'>
                <span className={styles.statNumber}>600<span>M</span>+</span>
                <span className={styles.statLabel}>{t('users')}</span>
              </Col>
              <Col xs={6} md={12} className='mb-2'>
                <span className={styles.statNumber}>135+</span>
                <span className={styles.statLabel}>{t('games')}</span>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <div className={styles.features}>
              {features.map((feature) => (
                <div key={feature.name} className={styles.featureItem}>
                  <img className={styles.featureIcon} src={feature.icon} alt={feature.name} />
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="position-relative mt-4">
          <Col md={12} className="text-center">
            <Image src={FairyImg} className={styles.fairy} />
            <Image src={MapImg} className={styles.map} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
