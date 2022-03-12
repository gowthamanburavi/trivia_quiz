import React from 'react'

export const QuestionCard = ({
    questionNumber,
    totalQuestion,
    question,
    answers,
    // userAnswer,
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
                    <div className="quiz__answers" key={answer}>
                        <button className="quiz__options" value={answer} >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

// answers: (2)['False', 'True']
// correct_answer: "True"
// question: "Michael Jackson had a pet python named &lsquo;Crusher&rsquo;."
// type: "boolean"