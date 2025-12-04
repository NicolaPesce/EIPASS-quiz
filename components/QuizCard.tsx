
import React, { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, XCircle, Lightbulb, AlertCircle, ArrowRight } from 'lucide-react';
import { Question } from '../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  totalQuestions: number;
  currentQuestionNumber: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  onAnswer, 
  totalQuestions, 
  currentQuestionNumber 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Combine and shuffle answers only when the question changes
  const shuffledAnswers = useMemo(() => {
    const allAnswers = [question.correctAnswer, ...question.wrongAnswers];
    // Fisher-Yates shuffle
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    return allAnswers;
  }, [question]);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setShowHint(false);
  }, [question]);

  const handleOptionClick = (answer: string) => {
    if (isSubmitted) return;
    
    setSelectedAnswer(answer);
    setIsSubmitted(true);
    // Timer removed: waiting for user to click "Prosegui"
  };

  const handleContinue = () => {
    onAnswer(selectedAnswer === question.correctAnswer);
  };

  const getButtonClass = (answer: string) => {
    const baseClass = "w-full p-4 text-left border-2 rounded-xl transition-all duration-200 flex items-center justify-between group";
    
    if (!isSubmitted) {
      return `${baseClass} border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 text-slate-700`;
    }

    if (answer === question.correctAnswer) {
      return `${baseClass} border-green-500 bg-green-50 text-green-800 font-medium`;
    }

    if (answer === selectedAnswer && answer !== question.correctAnswer) {
      return `${baseClass} border-red-500 bg-red-50 text-red-800`;
    }

    return `${baseClass} border-slate-200 opacity-50 cursor-not-allowed`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in flex flex-col min-h-[500px]">
      {/* Header / Progress */}
      <div className="bg-indigo-600 px-6 py-4">
        <div className="flex justify-between items-center text-white mb-2">
          <span className="font-semibold text-indigo-100 uppercase tracking-wider text-xs">Domanda {currentQuestionNumber} di {totalQuestions}</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowHint(!showHint)}
              disabled={isSubmitted}
              className={`p-1 rounded-full transition-colors ${showHint ? 'bg-yellow-400 text-indigo-900' : 'hover:bg-indigo-500 text-indigo-200'}`}
              title="Mostra Suggerimento"
            >
              <Lightbulb className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-full bg-indigo-800 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentQuestionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Hint Banner */}
      {showHint && !isSubmitted && (
        <div className="bg-yellow-50 border-b border-yellow-100 px-8 py-3 animate-fade-in">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 italic">
              <span className="font-bold">Suggerimento:</span> {question.hint}
            </p>
          </div>
        </div>
      )}

      {/* Question Content */}
      <div className="p-8 flex-grow">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
          {question.question}
        </h2>

        <div className="space-y-4">
          {shuffledAnswers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(answer)}
              disabled={isSubmitted}
              className={getButtonClass(answer)}
            >
              <span className="flex-1 mr-4">{answer}</span>
              {isSubmitted && answer === question.correctAnswer && (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              )}
              {isSubmitted && answer === selectedAnswer && answer !== question.correctAnswer && (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Feedback Area */}
      {isSubmitted && (
        <div className={`px-8 py-6 ${selectedAnswer === question.correctAnswer ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'} border-t animate-fade-in`}>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              {selectedAnswer === question.correctAnswer ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-1" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              )}
              
              <div>
                <p className={`font-bold text-lg mb-1 ${selectedAnswer === question.correctAnswer ? 'text-green-800' : 'text-red-800'}`}>
                  {selectedAnswer === question.correctAnswer 
                    ? "Corretto!" 
                    : "Risposta Errata"}
                </p>
                
                {selectedAnswer !== question.correctAnswer && (
                  <div className="text-slate-700 text-sm leading-relaxed mt-2 mb-2">
                    <p className="font-semibold mb-1">Spiegazione:</p>
                    <p>{question.explanation}</p>
                  </div>
                )}
                
                {selectedAnswer === question.correctAnswer && (
                   <p className="text-green-700 text-sm mb-2">Ottimo lavoro.</p>
                )}
              </div>
            </div>

            <button 
              onClick={handleContinue}
              className={`w-full py-3 px-6 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md
                ${selectedAnswer === question.correctAnswer 
                  ? 'bg-green-600 hover:bg-green-700 shadow-green-200' 
                  : 'bg-red-600 hover:bg-red-700 shadow-red-200'
                }`}
            >
              Prosegui
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
