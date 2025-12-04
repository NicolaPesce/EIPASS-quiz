
import React from 'react';
import { Play, BookOpen, Award, FileEdit } from 'lucide-react';
import { QuizMode } from '../types';

interface StartScreenProps {
  onStart: (mode: QuizMode) => void;
  totalQuestions: number;
  customQuestionsCount: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, totalQuestions, customQuestionsCount }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="bg-indigo-100 p-4 rounded-full">
          <BookOpen className="w-16 h-16 text-indigo-600" />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
        Quiz Simulator
      </h1>
      <h2 className="text-xl text-indigo-600 font-medium mb-8">
        Scegli la modalità di esame
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* EIPASS Card */}
        <button 
          onClick={() => onStart('eipass')}
          className="group relative bg-slate-50 hover:bg-indigo-50 border-2 border-slate-200 hover:border-indigo-500 rounded-2xl p-6 transition-all duration-300 text-left flex flex-col h-full shadow-sm hover:shadow-md"
        >
          <div className="mb-4 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <Award className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-700">EIPASS 7 Moduli</h3>
          <p className="text-sm text-slate-500 mb-4">Banca dati ufficiale aggiornata (2023/2024).</p>
          <div className="mt-auto flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>{totalQuestions} Domande</span>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-5 h-5 text-indigo-500" />
          </div>
        </button>

        {/* Custom Card */}
        <button 
          onClick={() => onStart('custom')}
          className="group relative bg-slate-50 hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 text-left flex flex-col h-full shadow-sm hover:shadow-md"
        >
          <div className="mb-4 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <FileEdit className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-emerald-700">Banca Dati Personale</h3>
          <p className="text-sm text-slate-500 mb-4">Le tue domande personalizzate (da compilare).</p>
          <div className="mt-auto flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>{customQuestionsCount} Domande</span>
          </div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-5 h-5 text-emerald-500" />
          </div>
        </button>
      </div>

      <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
        Seleziona "Banca Dati Personale" per utilizzare le domande inserite nel file <code>customQuestions.ts</code>.
      </p>
    </div>
  );
};

export default StartScreen;
