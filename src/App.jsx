import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import PsychologicalTest from "./pages/Tests/psychologicalTests.jsx";
import Contacts from "./pages/Contacts/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import styles from "./App.module.css";
export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/psychological_tests"
              element={<PsychologicalTest />}
            />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
