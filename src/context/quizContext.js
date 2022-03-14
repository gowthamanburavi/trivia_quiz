import { createContext, useState } from "react";

export const UserOptionsContext = createContext();

export const UserProvider = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("easy");
  const [quizQuestions, setQuizQuestions] = useState(10);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);

  return (
    <UserOptionsContext.Provider
      value={{
        name,
        setName,
        category,
        setCategory,
        difficulty,
        setDifficulty,
        quizQuestions,
        setQuizQuestions,
        userAnswer,
        setUserAnswer,
        score,
        setScore,
      }}
    >
      {props.children}
    </UserOptionsContext.Provider>
  );
};
