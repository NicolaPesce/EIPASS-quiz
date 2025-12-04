import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import QuizCard from './components/QuizCard';
import Results from './components/Results';
import { QUESTION_DATABASE } from './constants';
import { QuizState, Question } from './types';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<QuizState>({
    status: 'start',
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
  });

  const [questions, setQuestions] = useState<Question[]>([]);

  // Shuffle questions when starting
  const startQuiz = () => {
    const shuffled = [...QUESTION_DATABASE]
      .sort(() => Math.random() - 0.5)
      .slice(0, 30); // Take random 30 questions for a session

    setQuestions(shuffled);
    setGameState({
      status: 'playing',
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
    });
  };

  const handleAnswer = (isCorrect: boolean) => {
    const newScore = isCorrect ? gameState.score + 1 : gameState.score;
    const newAnswers = [...gameState.answers, isCorrect];
    
    if (gameState.currentQuestionIndex + 1 >= questions.length) {
      // Quiz finished
      setGameState({
        ...gameState,
        score: newScore,
        answers: newAnswers,
        status: 'finished'
      });
    } else {
      // Next question
      setGameState({
        ...gameState,
        score: newScore,
        answers: newAnswers,
        currentQuestionIndex: gameState.currentQuestionIndex + 1
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 font-sans text-slate-800">
      
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-[90vh]">
        
        {/* App Logo/Header (Small, visible on all screens except start if needed, but let's keep it clean) */}
        {gameState.status !== 'start' && (
           <div className="mb-8 text-center">
             <h1 className="text-xl font-bold text-indigo-900 opacity-50">EIPASS 7 Moduli</h1>
           </div>
        )}

        {gameState.status === 'start' && (
          <StartScreen 
            onStart={startQuiz} 
            totalQuestions={30} // We select 30 random ones
          />
        )}

        {gameState.status === 'playing' && questions.length > 0 && (
          <QuizCard
            question={questions[gameState.currentQuestionIndex]}
            currentQuestionNumber={gameState.currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {gameState.status === 'finished' && (
          <Results
            score={gameState.score}
            totalQuestions={questions.length}
            onRestart={startQuiz}
          />
        )}

        <footer className="mt-12 text-center text-slate-400 text-sm">
          <p>Based on EIPASS 7 Moduli User 6.0 Bank Data (2023/2024)</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
