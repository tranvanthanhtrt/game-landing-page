// import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import NavDropdown from 'react-bootstrap/NavDropdown';;
import styles from './LanguageBox.module.css';

// Import flag images
import vietnamFlag from '@assets/images/header/vietnam.png';
import usFlag from '@assets/images/header/us.png';

function LanguageBox() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'vi', name: 'Vietnamese', flag: vietnamFlag },
    { code: 'en', name: 'English', flag: usFlag },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[1];

  return (
    <NavDropdown 
      title={
        <img src={currentLang.flag} alt={currentLang.name} className={styles.flag} />
      }
      className={styles.languagesMenu}
      id="navbarScrollingDropdown"
    >
      {languages.map((lang) => (
        <NavDropdown.Item 
          key={lang.code} 
          onClick={() => changeLanguage(lang.code)}
          className="d-flex align-items-center"
        >
          <div className={styles.checkmark}> {lang.code === i18n.language ? '✓' : ''}</div>
          <img src={lang.flag} alt={lang.name} className={styles.flag} />
          <span className={styles.languageName}>{lang.name}</span>
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default LanguageBox;