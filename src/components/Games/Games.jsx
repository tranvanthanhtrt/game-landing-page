import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import styles from './Games.module.css';
import { getGames } from '@data/games';

function Games() {
  const { t } = useTranslation('games');
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gamesList = getGames();
    setGames(gamesList);
  }, []);

  return (
    <section className={styles.gamesSection} id="games">
      <Container>
        <h2 className={`${styles.sectionTitle} section-title text-center`}>{t('title')}</h2>
        <p className="text-center">{t('game_description')}</p>
        <Row className={styles.gamesGrid}>
          {games.map((game) => (
            <Col key={game.id} xs={6} sm={6} lg={3} className={`${styles.gameCol} p-1 p-sm-2 p-md-3`}>
              <Card className={styles.gameCard}>
                <div className={styles.imageWrapper}>
                  <Card.Img variant="bottom" src={game.image} className={styles.gameImage} />
                </div>
                <Card.ImgOverlay className={styles.gameOverlay}>
                  <Card.Title className={`${styles.gameTitle} text-white fw-bold fs-2`}>{game.title}</Card.Title>
                  <Card.Text className={styles.gameDescription}>{game.description}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Games;
