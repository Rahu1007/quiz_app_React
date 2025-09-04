import { useState } from "react";
import questions from "./data/questions.js"; // if you keep default export; see file below
import Quiz from "./components/Quiz.jsx";

export default function App() {
  // guard against undefined questions
  const [index, setIndex] = useState(0);

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div className="p-6">No questions found.</div>;
  }

  const current = questions[index];

  const handleNext = () => {
    setIndex((i) => (i + 1 < questions.length ? i + 1 : i));
  };

  const handleSelect = (choiceIndex) => {
    // you can store answers in state if you like
    // for now, just log:
    console.log("selected", choiceIndex);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <Quiz
          q={current}
          qNumber={index + 1}
          total={questions.length}
          onNext={handleNext}
          onSelect={handleSelect}
          isLast={index === questions.length - 1}
        />
      </div>
    </div>
  );
}