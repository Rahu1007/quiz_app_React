
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions.json';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleAnswerOptionClick = (isCorrect, answerText) => {
    setSelectedOption({ text: answerText, isCorrect });
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    if (selectedOption) {
      const nextQuestion = currentQuestion + 1;
      setSelectedAnswers([...selectedAnswers, selectedOption]);
      setSelectedOption(null);
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        navigate('/results', { state: { score: score, questions: questions, userAnswers: [...selectedAnswers, selectedOption] } });
      }
    } else {
      alert("Please select an answer before moving to the next question.");
    }
  };

  return (
    <div className="app bg-gray-900 w-full max-w-xl min-h-[250px] h-auto rounded-2xl p-8 shadow-lg flex flex-col justify-between">
      <>
        <div className="question-section w-full relative mb-6">
          <div className="question-count text-2xl mb-4 text-slate-400">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text bg-slate-700 p-6 rounded-lg text-2xl shadow-md">{questions[currentQuestion].questionText}</div>
        </div>
        <div className="answer-section w-full flex flex-col gap-4">
          {questions[currentQuestion].answerOptions.map((answerOption, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}
              className={`w-full text-lg text-white bg-gray-800 rounded-lg p-3 text-left border-2 border-gray-700 hover:bg-gray-700 focus:outline-none
                ${selectedOption && selectedOption.text === answerOption.answerText ? 
                  (selectedOption.isCorrect ? 'bg-green-700 border-green-500' : 'bg-red-700 border-red-500') 
                  : ''
                }`}
              disabled={selectedOption !== null}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-6">
            <button onClick={handleNextClick} className="w-1/3 font-bold text-lg bg-sky-blue hover:bg-light-blue text-white py-2 px-4 rounded-lg">
                {currentQuestion + 1 < questions.length ? 'Next' : 'Finish'}
            </button>
        </div>
      </>
    </div>
  );
};

export default Quiz;

