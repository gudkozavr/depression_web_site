import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {/* Бургер-иконка */}
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <span
          className={isOpen ? `${styles.bar} ${styles.rotate1}` : styles.bar}
        ></span>
        <span
          className={isOpen ? `${styles.bar} ${styles.fade}` : styles.bar}
        ></span>
        <span
          className={isOpen ? `${styles.bar} ${styles.rotate2}` : styles.bar}
        ></span>
      </div>

      {/* Затемнённый фон */}
      <div
        className={isOpen ? `${styles.overlay} ${styles.show}` : styles.overlay}
        onClick={toggleMenu}
      ></div>

      {/* Меню */}
      <nav
        className={
          isOpen ? `${styles.sideMenu} ${styles.open}` : styles.sideMenu
        }
      >
        <ul className={styles.nav}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              {t("Home")}
            </Link>
          </li>
          <li>
            <Link to="/fatigue" onClick={toggleMenu}>
              {t("Fatigue and weakness")}
            </Link>
          </li>
          <li>
            <Link to="/anxiety" onClick={toggleMenu}>
              {t("Anxiety")}
            </Link>
          </li>
          <li>
            <Link to="/sleep" onClick={toggleMenu}>
              {t("Sleep")}
            </Link>
          </li>
          <li>
            <Link to="/stress" onClick={toggleMenu}>
              {t("Stress")}
            </Link>
          </li>
          <li>
            <Link to="/which-specialist" onClick={toggleMenu}>
              {t("Which specialist should I consult?")}
            </Link>
          </li>
          <li>
            <Link to="/about-contacts" onClick={toggleMenu}>
              {t("About me")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
