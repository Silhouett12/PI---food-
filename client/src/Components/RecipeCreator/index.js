import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createRecipe, getDiets } from "../../Redux/actions";
import styles from "./RecipeCreator.module.css";
import Navbar from "../Navbar";

const RecipeCreator = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: [],
  });

  const validateForm = (input) => {
    let errors = {};
    if (!input.name.trim()) {
      errors.name = "Name is required";
    } 
    else if (!input.summary.trim()) {
      errors.summary = "Summary is required";
    }
    else if (!input.steps.trim()) {
      errors.steps = "Steps is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipe(input));
    alert("Recipe created successfully");
    setInput({
      name: "",
      summary: "",
      healthScore: "",
      steps: "",
      diets: [],
    });
  };

  const handleDelete = (e) => {
    console.log(e);
    console.log(input);
    setInput({
      ...input,
      diets: input.diets.filter((el) => el !== e),
    });
  };

  useEffect(() => {
    dispatch(getDiets());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.mainDiv}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputDiv}>
            <label>Name:</label>
            <input
              className={styles.input}
              type="text"
              value={input.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              maxLength="255"
            />
            {errors.name && (
              <p className={styles.errorMessage}>{errors.name}</p>
            )}
          </div>
          <div className={styles.inputDiv}>
            <label>Summary:</label>
            <textarea
              className={styles.input}
              type="text"
              value={input.summary}
              name="summary"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              maxLength="255"
            />
            {errors.summary && (
              <p className={styles.errorMessage}>{errors.summary}</p>
            )}
          </div>
          <div className={styles.inputDiv}>
            <label>HealthScore:</label>
            <input
              className={styles.input}
              type="number"
              value={input.healthScore}
              name="healthScore"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputDiv}>
            <label>Image:</label>
            <input
              type="text"
              value={input.image}
              name="image"
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputDiv}>
            <label>Steps:</label>
            <textarea
              type="text"
              value={input.steps}
              name="steps"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              maxLength="255"
            />
            {errors.steps && (
              <p className={styles.errorMessage}>{errors.steps}</p>
            )}
          </div>
          <select onChange={handleSelect}>
            {diets.map((el) => (
              <option value={el.name}>{el.name}</option>
            ))}
          </select>
          <ul>
            {" "}
            Diets:
            {input.diets.map((el) => (
              <li>
                {el}
                <button
                  onClick={() => handleDelete(el)}
                  className={styles.deleteButton}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
          <button type="submit" className={styles.createButton}>
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecipeCreator;
