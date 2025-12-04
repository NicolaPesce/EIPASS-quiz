import React from 'react';
import { Play, BookOpen, Award } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, totalQuestions }) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 text-center animate-fade-in">
      <div className="flex justify-center mb-8">
        <div className="bg-indigo-100 p-4 rounded-full">
          <BookOpen className="w-16 h-16 text-indigo-600" />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
        EIPASS 7 Moduli
      </h1>
      <h2 className="text-xl text-indigo-600 font-medium mb-6">
        Simulatore d'Esame User 6.0
      </h2>
      
      <p className="text-slate-600 mb-8 leading-relaxed max-w-md mx-auto">
        Mettiti alla prova con una sessione di {totalQuestions} domande estratte casualmente da un database di 500 quesiti ufficiali (2023/2024).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-slate-800">Windows 11</span>
          </div>
          <p className="text-xs text-slate-500">Domande aggiornate al nuovo sistema operativo</p>
        </div>
         <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-blue-500" />
            <span className="font-bold text-slate-800">Office 2023</span>
          </div>
          <p className="text-xs text-slate-500">Word, Excel, PowerPoint e Access</p>
        </div>
         <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-green-500" />
            <span className="font-bold text-slate-800">Sicurezza</span>
          </div>
          <p className="text-xs text-slate-500">Reti, Malware, GDPR e Privacy</p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full md:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-3 mx-auto"
      >
        <Play className="w-5 h-5 fill-current" />
        Inizia il Quiz
      </button>
    </div>
  );
};

export default StartScreen;