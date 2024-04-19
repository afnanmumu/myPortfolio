import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.aboutHeading}>
        <ul className={styles.aboutDetails}>
          <li className={styles.aboutDetailsItems}>
            <div className={styles.detailsContent}>
              <h3 className={styles.heading2}>Hi, I’m</h3>
              <h2 className={styles.heading1}>Afnan Alauddin Mumu </h2>
              <h3 className={styles.heading2}>UI/UX and Frontend Developer</h3>
              <p className={styles.paragraph1}>
                Welcome to my digital domain! Are you ready to embark on a
                journey through lines of code and pixels of creativity?
              </p>
            </div>
          </li>
          <li className={styles.aboutDetailsItems}>
            <div className={styles.detailsLogo}>
              <a href="#about">
                <img
                  src={getImageUrl("About/LinkedIn.svg")}
                  className={styles.logos}
                />
              </a>
              <a href="#about">
                <img
                  src={getImageUrl("About/GitHub.svg")}
                  className={styles.logos}
                />
              </a>
              <a href="#about">
                <img
                  src={getImageUrl("About/Gmail.svg")}
                  className={styles.logos}
                />
              </a>
            </div>
          </li>
          <li className={styles.aboutDetailsItems}>
            <div className={styles.aboutDetailsItemsButton}>
              <div className={styles.button}>Download CV</div>
              <div className={styles.button}>Contact Me</div>
            </div>
          </li>
        </ul>
        <img src={getImageUrl("About/mumu.jpg")} className={styles.aboutImage} />
      </div>
      <div className={styles.aboutCard}>
        <div className={styles.title}>About Me</div>
        <ul className={styles.cardItems}>
          <li className={styles.card2}>
            <div className={styles.card2Heading}>
              <img src={getImageUrl("About/Frontend.svg")} />
              <div>Frontend Developer</div>
            </div>
            <div className={styles.card2Body}>
              Passionate frontend developer dedicated to crafting immersive user
              experiences through elegant code and pixel-perfect design.
            </div>
          </li>
          <li className={styles.card2}>
            <div className={styles.card2Heading}>
              <img src={getImageUrl("About/Backend.svg")} />
              <div>Backend Developer</div>
            </div>
            <div className={styles.card2Body}>
              I craft robust and efficient backend solutions, transforming
              complex problems into elegant code with a passion for scalability
              and performance.
            </div>
          </li>
          <li className={styles.card2}>
            <div className={styles.card2Heading}>
              <img src={getImageUrl("About/UI:UX.svg")} />
              <div>Frontend Developer</div>
            </div>
            <div className={styles.card2Body}>
              Passionate frontend developer dedicated to crafting immersive user
              experiences through elegant code and pixel-perfect design.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
