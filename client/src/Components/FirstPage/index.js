import React from "react";
import { Link } from "react-router-dom";
import styles from "./FirstPage.module.css";

const FirstPage = () => {
  return (
    <>
    
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

