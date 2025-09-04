import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, questions, userAnswers } = location.state || {};

  const handleRestart = () => {
    navigate('/');
  };

  if (!location.state) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-2xl mb-4">No results to display.</p>
            <button 
                onClick={handleRestart} 
                className="font-bold text-lg bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
                Go to Quiz
            </button>
        </div>
    );
  }

  return (
    <div className="app bg-gray-900 w-full max-w-2xl min-h-[400px] h-auto rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
      <div className='score-section text-center mb-8'>
        <p className="text-4xl text-light-blue">You scored</p>
        <p className="text-9xl font-bold text-white">{score} <span className="text-5xl text-sky-blue">/ {questions.length}</span></p>
      </div>

      <div className="w-full mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Answers:</h2>
        {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const correctAnswer = question.answerOptions.find(opt => opt.isCorrect).answerText;
            const isCorrect = userAnswer.answerText === correctAnswer;

            return (
                <div key={index} className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-800' : 'bg-red-800'}`}>
                    <p className="font-bold text-lg">{question.questionText}</p>
                    <p>Your answer: <span className="font-semibold">{userAnswer.answerText}</span></p>
                    {!isCorrect && <p>Correct answer: <span className="font-semibold">{correctAnswer}</span></p>}
                </div>
            )
        })}
      </div>

      <button 
        onClick={handleRestart} 
        className="font-bold text-lg bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
