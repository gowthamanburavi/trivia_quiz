import React, { useContext, useEffect, useState } from "react";
import { UserOptionsContext } from "../context/quizContext";
import { FetchQuestions } from "../../utils/FetchFromAPI";
import { QuestionCard } from "./QuestionCard";

export const Quiz = () => {
    const { name, difficulty, category, quizQuestions } =
        useContext(UserOptionsContext);

    const [questions, setQuestions] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [number, setNumber] = useState(0);
    // const [userAnswer, setUserAnswer] = useState([]);
    // const [score, setScore] = useState(0);
    // const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        console.log("inside Quiz", "useEffect", name, category, difficulty);

        const fetchQuestions = async () => {
            try {
                const newQuestions = await FetchQuestions(
                    category,
                    difficulty,
                    quizQuestions
                );
                setQuestions(newQuestions);
            } catch (err) {
                console.log("Error fetching,", err);
            }
        };
        fetchQuestions();
    }, []);

    console.log("questions", questions);
    return (
        <div>
            <h1 className="title">Quiz You!</h1>
            <div className="quiz__block">
                <h3>Name: {name}</h3>
                {/* <QuestionCard
                    questionNumber={number}
                    totalQuestion={quizQuestions}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswer ? userAnswer[number] : undefined}
                // callback={checkAnswer}
                /> */}
            </div>
        </div>
    )
};
