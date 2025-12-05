import React from 'react';
import { RotateCcw, Trophy, Target, Share2 } from 'lucide-react';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = "";
  let subMessage = "";
  let colorClass = "";

  if (percentage >= 90) {
    message = "Eccellente!";
    subMessage = "Sei pronto per l'esame EIPASS.";
    colorClass = "text-green-600";
  } else if (percentage >= 75) {
    message = "Ottimo Lavoro!";
    subMessage = "Hai una buona preparazione.";
    colorClass = "text-blue-600";
  } else if (percentage >= 60) {
    message = "Buono";
    subMessage = "Puoi migliorare ripassando alcuni concetti.";
    colorClass = "text-yellow-600";
  } else {
    message = "Non ci siamo ancora";
    subMessage = "Ti consigliamo di ripassare il materiale.";
    colorClass = "text-red-600";
  }

  // Increased radius slightly for better aesthetics within the 192px container
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 text-center animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Risultati del Quiz</h2>

      <div className="relative w-48 h-48 mx-auto mb-8">
        {/* SVG Circle Progress */}
        {/* Added viewBox for consistent scaling and better centering logic */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 192 192">
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-slate-100"
          />
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`${percentage >= 60 ? 'text-indigo-600' : 'text-red-500'} transition-all duration-1000 ease-out`}
            strokeLinecap="round"
          />
        </svg>
        {/* Centered Text Container using Flexbox for perfect centering */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-4xl font-bold text-slate-800 leading-none">{percentage}%</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className={`text-3xl font-bold mb-2 ${colorClass}`}>{message}</h3>
        <p className="text-slate-600">{subMessage}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex flex-col items-center">
            <span className="text-slate-500 text-sm mb-1">Risposte Corrette</span>
            <div className="flex items-center gap-2 text-green-600 font-bold text-xl">
              <Trophy className="w-5 h-5" />
              {score}
            </div>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
           <div className="flex flex-col items-center">
            <span className="text-slate-500 text-sm mb-1">Totale Domande</span>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-xl">
              <Target className="w-5 h-5" />
              {totalQuestions}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Riprova
        </button>
        
      </div>
    </div>
  );
};

export default Results;