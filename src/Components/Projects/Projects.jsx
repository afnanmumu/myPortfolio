import React from 'react';
import projects from "../../Data/Projects.json";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.projectsDetails}>
        {projects.map((projectsItem, id) => {
          return (
            <li key={id} className={styles.card6}>
              <div className={styles.card6Name}>{`${projectsItem.name}`}</div>
              <div className={styles.card6Type}>{`${projectsItem.type}`}</div>
              <ul>
                {projectsItem.tag.map((tag, id) => {
                  return <li key={id}>{tag}</li>;
                })}
              </ul>
              <a href={`${projectsItem.link}`}>Source</a>
            </li>
          );
        })}
      </div>
    </section>
  );
}
