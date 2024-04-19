import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#' from the hash
      setActiveSection(hash.toUpperCase());
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Set the initial active section
    handleHashChange();

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Afnan
      </a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>{activeSection}
          </li>
        </ul>
      </div>
    </nav>
  );
};
