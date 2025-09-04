import { Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
  return (
    <div className="text-white min-h-screen flex justify-center items-center p-4">
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
