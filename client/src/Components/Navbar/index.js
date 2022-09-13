import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../Images/food.png";
import logoTitle from "../Images/great food.png";
import githubLogo from "../Images/github.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className={styles.navbar}>
        <button className={styles.toggleMenu} onClick={toggleMenu}> ||| </button>
        <div className={open ? styles.logoSection : styles.logoSectionHidden}>
          <div className={styles.logos}>
            <div className={styles.logoTitle}>
              <img alt="logoTitle" src={logoTitle} />
            </div>
            <img alt="logo" src={logo} className={styles.logoImg} />
          </div>
          <button className={styles.button}><Link to="/home" className={styles.link}>HOME</Link></button>
          <div className={styles.itemsSection}>
            <div className={styles.githubLogo}>
              <a href="https://github.com/Silhouett12/PI---food-">
                <img alt="githubLogo" src={githubLogo} />
              </a>
            </div>
            <button className={styles.button}>
              <a className={styles.link}
                href="https://pablolamadrid.netlify.app/"
              >
                My Page
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
