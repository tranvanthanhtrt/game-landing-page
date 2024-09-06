import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from './Games.module.css';

function Games() {
  const { t } = useTranslation('games');

  const gamesList = [
    { title: 'Game 1', image: 'path/to/image1.jpg' },
    { title: 'Game 2', image: 'path/to/image2.jpg' },
    // Thêm các game khác
  ];

  return (
    <section className={styles.gamesSection}>
      <Container>
        <h2 className={`${styles.sectionTitle} text-center section-title`}>{t('title')}</h2>
        <p>{t('desc')}</p>
        <Row>
          {gamesList.map((game, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className={styles.gameCard}>
                <Card.Img variant="top" src={game.image} />
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Games;
