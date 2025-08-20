import { Link } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О враче</Link>
          </li>

          <li>
            <Link to="/psychological_tests">Психологические тесты</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
