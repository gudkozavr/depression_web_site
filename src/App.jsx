import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useTranslation } from "react-i18next";
import "./scripts/i18n.js";
import styles from "./App.module.css";
import Stress from "./pages/Stress/Stress.jsx";
import Fatigue from "./pages/About/Fatigue.jsx";
import Sleep from "./pages/Sleep/Sleep.jsx";
import Anxiety from "./pages/Anxiety/Anxiety.jsx";
import ContactsAbout from "./pages/Contacts/ContactAbout.jsx";
import WhichSpecialist from "./pages/WhichSpecialist/WhichSpecialist.jsx";
export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div>
        <h1>{t("welcome")}</h1>
        <button>{t("button")}</button>

        <div>
          <button onClick={() => changeLanguage("ru")}> RU</button>
          <button onClick={() => changeLanguage("en")}> EN</button>
          <button onClick={() => changeLanguage("de")}> DE</button>
        </div>
      </div>
      <Router>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fatigue" element={<Fatigue />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/stress" element={<Stress />} />
            <Route path="/anxiety" element={<Anxiety />} />
            <Route path="/about-contacts" element={<ContactsAbout />} />
            <Route path="/which-specialist" element={<WhichSpecialist />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
