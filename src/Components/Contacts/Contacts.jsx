import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <section className={styles.container} id="#contacts">
      <div className={styles.contactDetails}>
        <div className={styles.contactTitle}>Feel free to reach out</div>
        <ul className={styles.contactList}>
          <li>
            <img src={getImageUrl("Contacts/Google.svg")} />
          </li>
          <li>
            <img src={getImageUrl("Contacts/Facebook.svg")} />
          </li>
          <li>
            <img src={getImageUrl("Contacts/Instagram.svg")} />
          </li>
          <li>
            <img src={getImageUrl("Contacts/LinkedIn.svg")} />
          </li>
          <li>
            <img src={getImageUrl("Contacts/GitHub.svg")} />
          </li>
        </ul>
        <ul className={styles.contactList}>
          <li>Online Judge Link:</li>
          <li>
            <a href="">Leetcode</a>
          </li>
          <li>
            <a href="">Hacker Rank</a>
          </li>
          <li>
            <a href="">Codeforce</a>
          </li>
          <li>
            <a href="">Vjudge</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
