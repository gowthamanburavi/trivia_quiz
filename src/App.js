import { Quiz } from "./components/Quiz/Quiz";
import "./App.css";
import { BeginningForm } from "./components/BeginningForm/BeginningForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<BeginningForm />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
