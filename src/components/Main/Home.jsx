import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
// import { img } from "../../../public/img/eileen-pan-5d5DSRQ5dUc-unsplash.jpg";
export default function Main() {
  const { t } = useTranslation();
  return (
    <main className={styles.home}>
      <>
        <h2>{t("Why is this portal important?")}</h2>
        <img
          src="../../../public/img/eileen-pan-5d5DSRQ5dUc-unsplash.jpg"
          alt="you are here img"
        />
        <div className={styles.content}>
          <p>
            {t(
              "In today’s fast-paced life, people often wake up already feeling tired, get anxious without any apparent reason, and lose interest in things that used to bring joy. In Germany, nearly 30% of adults regularly experience fatigue. Moreover, in 2023, about 14% of adults showed elevated levels of depressive symptoms."
            )}
          </p>
          <p>
            {t(
              "These conditions do more than just spoil your mood—they interfere with making plans, maintaining relationships, and living life to the fullest. And most importantly—they won’t go away on their own."
            )}
          </p>
          <p>
            {t(
              "But there is a way out. Small steps—from improving your lifestyle to seeking professional help—can restore energy, mental clarity, and inner peace."
            )}
          </p>
          <p>
            {t(
              "This portal was created to be a reliable support on the path to recovery. Here, you will find clear articles, practical advice, and information that will help you understand your situation and take the first step toward better well-being."
            )}
          </p>
        </div>
      </>
    </main>
  );
}
