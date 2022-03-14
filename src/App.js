import { Routes, Route } from "react-router-dom";
import "./App.css";
import { BeginningForm } from "./components/BeginningForm/BeginningForm";
import { Quiz } from "./components/Quiz/Quiz";
import { Result } from "./components/Result/Result"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<BeginningForm />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
