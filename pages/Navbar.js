// components/NavBar.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="https://github.com/your-github-profile">
            <a target="_blank">GitHub</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <a>Contact Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;