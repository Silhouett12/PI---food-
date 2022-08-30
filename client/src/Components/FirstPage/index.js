import React from "react";
import { Link } from "react-router-dom";
import styles from "./FirstPage.module.css";

const FirstPage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <button className={styles.button}>
          <Link to="/Home">Let's find out!</Link>
        </button>
      </div>
    </>
  );
};

export default FirstPage;
