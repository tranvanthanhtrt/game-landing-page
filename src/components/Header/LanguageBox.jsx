import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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
    <Dropdown className={styles.languageBox}>
      <Dropdown.Toggle variant="light" id="dropdown-language" className={styles.dropdownToggle}>
        <img src={currentLang.flag} alt={currentLang.name} className={styles.flag} />
        {/* <span className={styles.languageName}>{currentLang.name}</span> */}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.dropdownMenu}>
        {languages.map((lang) => (
          <Dropdown.Item 
            key={lang.code} 
            onClick={() => changeLanguage(lang.code)}
            className={styles.dropdownItem}
            active={lang.code === i18n.language}
          >
            <img src={lang.flag} alt={lang.name} className={styles.flag} />
            <span>{lang.name}</span>
            {lang.code === i18n.language && <span className={styles.checkmark}>✓</span>}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageBox;