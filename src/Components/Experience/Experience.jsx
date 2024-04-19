import React from "react";
import { getImageUrl } from "../../utils";
import experience from "../../Data/Experience.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.experienceDetails}>
        {experience.map((experienceItem, id) => {
          return (
            <li key={id} className={styles.card4}>
              <img src={getImageUrl(experienceItem.imgSrc)} />
              <div className={styles.card4Details}>
                <div className={styles.details}>
                  <div>{`${experienceItem.role}`}</div>
                  <div>{`${experienceItem.company}`}</div>
                  <div
                    className={styles.detailsDuration}
                  >{`${experienceItem.duration}`}</div>
                </div>
                <ul className={styles.list}>
                  {experienceItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </div>
    </section>
  );
};
