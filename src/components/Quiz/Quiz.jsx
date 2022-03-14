import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserOptionsContext } from "../../context/quizContext";
import { FetchQuestions } from "../../utils/FetchFromAPI";
import { QuestionCard } from "./QuestionCard";
import "./Quiz.css"

export const Quiz = () => {
    const { name, difficulty, category, quizQuestions, userAnswer, setUserAnswer, score, setScore } =
        useContext(UserOptionsContext);

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    // const [score, setScore] = useState(0);
    // const [userAnswer, setUserAnswer] = useState([]);

    const navigate = useNavigate();

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
                setLoading(false)
            } catch (err) {
                console.log("Error fetching,", err);
            }
        };
        fetchQuestions();
        // eslint-disable-next-line
    }, []);

    // console.log("questions: ", questions);

    const checkAnswer = (event) => {
        if (!gameOver) {
            const answer = event.currentTarget.value;
            const correct = questions[number].correct_answer === answer;
            if (correct) setScore((prev) => prev + 1);

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };

            setUserAnswer((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === quizQuestions) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
        console.log("quizQuestions:", quizQuestions, "gameover:", gameOver);
    };

    const handleEndQuiz = () => {
        navigate("/result");
    }

    console.log(number, "loading:", loading, "gameover:", gameOver, "quizQuestions:", quizQuestions);
    console.log("userAnswer:", userAnswer);
    return (
        <div>
            <h1 className="title">Quiz You!</h1>
            <div className="quiz__block">
                <h3>Name: {name}</h3>
                {loading && <p>Loading question....</p>}
                {!gameOver ? <p className="score">Score:{score}</p> : null}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNumber={number + 1}
                        totalQuestion={quizQuestions}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        callback={checkAnswer}
                        userAnswer={userAnswer ? userAnswer[number] : undefined}
                    />
                )}
                {!gameOver &&
                    number !== quizQuestions - 1 ? (
                    <button className="btn__next" onClick={nextQuestion}>
                        Next question
                    </button>
                ) : null}
                {number === quizQuestions - 1 &&
                    <button className="btn__submit" onClick={handleEndQuiz}>Submit</button>
                }
            </div>
        </div>
    )
};
