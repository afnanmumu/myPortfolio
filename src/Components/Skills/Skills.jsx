import React from "react";
import skills from "../../Data/Skills.json";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.skillDetails}>
        {skills.map((skillsItem, id) => {
          return (
            <li key={id} className={styles.card5}>
              <img src={getImageUrl(skillsItem.imgSrc)} />
              <div className={styles.card5Details}>
                <div className={styles.card5Name}>{`${skillsItem.name}`}</div>
                <div className={styles.card5Works}>{`${skillsItem.works}`}</div>
              </div>
            </li>
          );
        })}
        <img />
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
