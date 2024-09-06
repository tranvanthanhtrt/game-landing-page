import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Countdown, InfoForm } from '@/components';
import Image from 'react-bootstrap/Image';
import Fairy from '@assets/images/banner/fairy.png';

import styles from './Banner.module.css';

function Banner() {
  const { t } = useTranslation('banner');

  return (
    <div className={styles.banner}>
      <Container className={styles.content}>
        <Image src={Fairy} className={styles.fairy} />
        <Row className="justify-content-center text-center align-items-center h-100">
          <Col md={8} className={styles.box}>
            <h1 className={styles.title}>{t('title')}</h1>
            <Countdown />
            <InfoForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;