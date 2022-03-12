import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserOptionsContext } from "../../context/quizContext";
import { trivia_categories } from "../../utils/questions_category";
import "./BeginningForm.css";

export const BeginningForm = () => {
  const {
    name,
    setName,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    quizQuestions,
    setQuizQuestions,
  } = useContext(UserOptionsContext);

  let navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleQuestionsChange = (event) => {
    setQuizQuestions(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name, category, difficulty, quizQuestions);
    navigate("/quiz");
  }

  return (
    <>
      <h1 className="title">Quiz You!</h1>
      <div className="input__form">
        <form action="" method="post" onSubmit={handleSubmit}>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleNameChange}
          ></input>
          <label for="category">Select category:</label>
          <select
            name="dropdown"
            id="category"
            required
            onChange={handleCategoryChange}
          >
            {trivia_categories.map((category, key) => (
              <option value={category.name} key={key}>
                {category.name}
              </option>
            ))}
          </select>
          <label for="questions">Select questions:</label>
          <input
            type="range"
            name="questinons"
            id="questions"
            list="question_list"
            step="5"
            min="10"
            max="20"
            value={quizQuestions}
            onChange={handleQuestionsChange}
          />
          <div className="bubble">{quizQuestions}</div>

          <datalist id="question_list">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </datalist>
          <div className="radio-input" onChange={handleDifficultyChange}>
            <p>Difficulty:</p>
            <label>
              <input
                type="radio"
                name="difficulty"
                value="Mixed"
                checked={difficulty === "Mixed"}
              />
              Mixed
            </label>
            <label>
              <input
                type="radio"
                name="difficulty"
                value="easy"
                checked={difficulty === "easy"}
              />
              Easy
            </label>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="medium"
                checked={difficulty === "medium"}
              />
              Medium
            </label>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="hard"
                checked={difficulty === "hard"}
              />
              Hard
            </label>
          </div>
          <button type="submit">Begin Quiz</button>
        </form>
      </div>
    </>
  );
};
