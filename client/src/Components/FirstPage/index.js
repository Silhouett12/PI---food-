import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./FirstPage.module.css";

const FirstPage = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.mainContainer}>
      <Link to="/home" className={styles.link}>
        <button className={styles.button}>
          YUMMY! 
        </button>
        </Link>
      </div>
    </>
  );
};

export default FirstPage;

