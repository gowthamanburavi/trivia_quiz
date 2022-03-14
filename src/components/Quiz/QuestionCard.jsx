import React from 'react'

export const QuestionCard = ({
    questionNumber,
    totalQuestion,
    question,
    answers,
    callback,
    userAnswer,
}) => {
    return (
        <div>
            <p>
                Question: {questionNumber} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <div className="quiz__answers" key={answer}>
                        <button className="quiz__options" disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

