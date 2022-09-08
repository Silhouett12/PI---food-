import React from "react";
import styles from "./Pages.module.css";

const Pages = ({ recipesPerPage, allRecipes, pages }) => {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumber.push(i+1);
  }

  return (
    <nav>
      <ul className={styles.pagesList}>
        {pageNumber?.map((number) => {
          return (
            <li className={styles.pages} >
              <button onClick={() => pages(number)} className={styles.button}>{number}</button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pages;
