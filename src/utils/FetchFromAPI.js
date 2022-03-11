import { trivia_categories } from "./questions_category";
import axios from "axios";

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export const FetchQuestions = async (category, difficulty, quizQuestions) => {
    const categoryId = Number(
        trivia_categories
            .filter((data) => data.name === category)
            .map((data) => data.id)
    );

    let urlEndPoint = "";

    if (difficulty === "Mixed") {
        urlEndPoint = `https://opentdb.com/api.php?amount=${quizQuestions}&category=${categoryId}`;
    } else {
        urlEndPoint = `https://opentdb.com/api.php?amount=${quizQuestions}&category=${categoryId}&difficulty=${difficulty}`;
    }
    console.log(urlEndPoint);

    const data = await axios
        .get(urlEndPoint)
        .then((response) => response.data)
        .catch((error) => console.log(error));

    console.log("before return");

    return data.results.map((question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
        ]),
    }));
};
