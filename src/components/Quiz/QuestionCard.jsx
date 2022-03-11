import React from 'react'

export const QuestionCard = ({
    questionNumber,
    totalQuestion,
    question,
    answers,
    userAnswer,
    // callback,
}) => {
    return (
        <div>
            <p>
                Question: {questionNumber} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button disabled={!!userAnswer} value={answer} >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
