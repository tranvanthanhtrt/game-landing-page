import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import logo from '@assets/images/header/logo.png';
function Header() {
  const { t, i18n } = useTranslation('header');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar expand="lg" className='position-absolute top-0 w-100' style={{zIndex: 1}}>
      <Container className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="64"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about" className='text-light text-uppercase px-4'>{t('about')}</Nav.Link>
            <Nav.Link href="#games" className='text-light text-uppercase px-4'>{t('games')}</Nav.Link>
            <Nav.Link href="#partners" className='text-light text-uppercase px-4'>{t('partners')}</Nav.Link>
            <Nav.Link href="#contact-us" className='text-light text-uppercase px-4'>{t('contact_us')}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => changeLanguage('en')}>EN</Nav.Link>
            <Nav.Link onClick={() => changeLanguage('vi')}>VI</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
