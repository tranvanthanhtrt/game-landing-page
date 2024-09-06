import { Navbar, Nav, Container } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import logo from '@assets/images/header/logo.png';
import LanguageBox from './LanguageBox';
import styles from './Header.module.css';
function Header() {
  const { t } = useTranslation('header');

  return (
    <Navbar expand="lg" className='position-absolute top-0 w-100' style={{zIndex: 1}}>
      <Container className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand href="#home" className={styles.brand}>
          <img
            src={logo}
            height="64"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
            <Offcanvas.Body className='justify-content-end'>
              <Nav>
                <Nav.Link href="#about" className='text-light text-uppercase px-4 fw-bold'>{t('about')}</Nav.Link>
                <Nav.Link href="#games" className='text-light text-uppercase px-4 fw-bold'>{t('games')}</Nav.Link>
                <Nav.Link href="#partners" className='text-light text-uppercase px-4 fw-bold'>{t('partners')}</Nav.Link>
                <Nav.Link href="#contact-us" className='text-light text-uppercase px-4 fw-bold'>{t('contact_us')}</Nav.Link>
              </Nav>
              <Nav>
                <LanguageBox />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
