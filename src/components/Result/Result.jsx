import React, { useContext } from 'react';
import "./Result.css"
import { UserOptionsContext } from "../../context/quizContext";
import { useNavigate } from 'react-router-dom';

export const Result = () => {
    const { score, quizQuestions } = useContext(UserOptionsContext);
    const navigate = useNavigate();
    const handleRetry = () => {
        navigate("/")
    }
    return (
        <div className='result'>
            <h1 className="title">Quiz You!</h1>
            <div className='result__score'>
                <strong className='result__score--small'>Score:</strong> <strong className='result__score--large'>
                    {score} / {quizQuestions}
                </strong>

            </div>
            <button className="btn-retry" onClick={handleRetry}>Retry again</button>

        </div>
    )
}
