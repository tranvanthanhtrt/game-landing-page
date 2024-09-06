import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ArrowRightIcon from '@assets/icons/arrow-right.svg';
import styles from './InfoForm.module.css';

function InfoForm() {
  const { t } = useTranslation('banner');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <div className={`${styles.infoForm} mt-4`}>
      <Row className="justify-content-center">
        <Col md={8}>
            <p className={styles.description}>{t('description')}</p>
            <Form onSubmit={handleSubmit} className={`${styles.form}`}>
            <Form.Group controlId="email" className={styles.inputGroup}>
              <Form.Control
                type="email"
                placeholder={t('emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.emailInput}
              />
              <button type="submit" className={styles.submitButton}>
                <img src={ArrowRightIcon} alt="Submit" />
              </button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      
    </div>
  );
}

export default InfoForm;