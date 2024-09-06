import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import TwitterIcon from '@assets/icons/twitter.svg';
import FacebookIcon from '@assets/icons/facebook.svg';
import LinkedinIcon from '@assets/icons/linkedin.svg';
import LocationIcon from '@assets/icons/location.svg';
import PhoneIcon from '@assets/icons/mobile.svg';
import logo from '@assets/images/header/logo.png';
import ArrowRightIcon from '@assets/icons/arrow-right-white.svg';

function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={4} className={styles.logoSection}>
            <img
            src={logo}
            height="64"
            className={`${styles.logo} d-inline-block align-top`}
            alt="Logo"
          />
            <div className={styles.socialIcons}>
              <a href="#twitter">
                <img
                  src={TwitterIcon}
                  height="32"
                  className="d-inline-block align-top"
                  alt="twitter"
                />
              </a>
              <a href="#facebook">
                <img
                  src={FacebookIcon}
                  height="32"
                  className="d-inline-block align-top"
                  alt="facebook"
                />
              </a>
              <a href="#linkedin">
                <img
                  src={LinkedinIcon}
                  height="32"
                  className="d-inline-block align-top"
                  alt="linkedin"
                />
              </a>
            </div>
          </Col>
          <Col md={4} className={styles.addressSection}>
            <h5>{t('address')}</h5>
            <div className='d-flex align-items-top gap-2'>
              <img
                src={LocationIcon}
                height="32"
                className="d-inline-block align-top"
                alt="location"
              />
              <div>
                <p>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</p>
                <p> 20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <img
                src={PhoneIcon}
                height="32"
                className="d-inline-block align-top"
                alt="phone"
                /> 
              <p className='mb-0'>
                (+1) 555-0108-000 or (+256) 555-0108
              </p>
            </div>
          </Col>
          <Col md={4} className={styles.subscribeSection}>
            <h5>{t('subscribe')}</h5>
            <p>{t('subscribeText')}</p>
            <Form>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder={t('enterEmail')}
                  aria-label="Enter your email"
                />
                <button type="submit">
                  <img src={ArrowRightIcon} alt="Submit" /> 
                </button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className={styles.copyright}>
        <Container>
          <p>© 2017 Copyright. Policy.</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;