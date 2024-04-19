import React from "react";
import styles from "./Sidebar.module.css";
import { getImageUrl } from "../../utils";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navbar}>
        <div className={styles.menu}>
          <ul className={styles.menuItems}>
            <li>
              <a href="#about">
                <img src={getImageUrl("Sidebar/About.svg")} />
              </a>
            </li>
            <li>
              <a href="#skills">
                <img src={getImageUrl("Sidebar/Skills.svg")} />
              </a>
            </li>
            <li>
              <a href="#experience">
                <img src={getImageUrl("Sidebar/Experience.svg")} />
              </a>
            </li>
            <li>
              <a href="#projects">
                <img src={getImageUrl("Sidebar/Projects.svg")} />
              </a>
            </li>
            <li>
              <a href="#contacts">
                <img src={getImageUrl("Sidebar/Contacts.svg")} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
