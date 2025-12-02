
'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { gameData } from '@/lib/latin-game-data';

const LatinAppStyles = () => (
  <style jsx global>{`
    body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #770206;
      min-height: 100vh;
      width: 100vw;
    }

    * {
      box-sizing: border-box;
    }

    .splash-screen {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-color: #770206;
    }

    .loader {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #fff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin-top: 20px;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }


    .main-container {
      width: 100%;
      min-height: 100vh;
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content-wrapper {
      max-width: 900px;
      width: 100%;
    }

    .card {
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      padding: 40px;
      margin-bottom: 20px;
    }

    h1 {
      color: #770206;
      margin: 0 0 10px 0;
      font-size: 32px;
      text-align: center;
    }

    h2 {
      color: #333;
      font-size: 24px;
      margin: 0 0 20px 0;
    }

    h3 {
      color: #770206;
      font-size: 18px;
      margin: 0 0 15px 0;
    }

    .subtitle {
      color: #666;
      text-align: center;
      margin: 0 0 30px 0;
      font-size: 16px;
    }

    .form-group {
      margin-bottom: 24px;
    }

    label {
      display: block;
      color: #333;
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 14px;
    }

    input[type="text"],
    input[type="number"] {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.3s;
      color: #333;
    }

    input[type="text"]:focus,
    input[type="number"]:focus {
      outline: none;
      border-color: #770206;
    }

    .slider-container {
      margin-top: 12px;
    }

    input[type="range"] {
      width: 100%;
      height: 8px;
      border-radius: 4px;
      background: #e0e0e0;
      outline: none;
      -webkit-appearance: none;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #770206;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    input[type="range"]::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #770206;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      border: none;
    }

    .slider-value {
      text-align: center;
      color: #770206;
      font-weight: 600;
      font-size: 18px;
      margin-top: 8px;
    }

    .btn {
      width: 100%;
      padding: 14px 24px;
      background: #770206;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s, transform 0.1s;
    }

    .btn:hover {
      background: #5a0104;
    }

    .btn:active {
      transform: scale(0.98);
    }

    .btn:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
    }
    
    .profile-badge {
      display: inline-block;
      padding: 8px 20px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 14px;
      margin-top: 20px;
    }

    .profile-debutant {
      background: #e3f2fd;
      color: #1976d2;
    }

    .profile-intermediaire {
      background: #fff3e0;
      color: #f57c00;
    }

    .profile-avance {
      background: #e8f5e9;
      color: #388e3c;
    }

    .category-section {
      margin-top: 40px;
    }

    .category-section:first-of-type {
      margin-top: 30px;
    }

    .category-title {
      color: #770206;
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 20px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #e0e0e0;
    }

    .hub-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }

    .game-card {
      background: white;
      border-radius: 12px;
      padding: 24px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      border: 2px solid #e0e0e0;
    }

    .game-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      border-color: #770206;
    }

    .game-icon {
      font-size: 48px;
      margin-bottom: 12px;
    }

    .game-title {
      color: #333;
      font-weight: 600;
      font-size: 16px;
      margin: 0;
    }

    .game-container {
      background: white;
      border-radius: 16px;
      padding: 30px;
      margin-top: 20px;
    }
    .question-text {
      color: #333;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 24px;
      text-align: center;
    }

    .options-grid {
      display: grid;
      gap: 12px;
      margin-bottom: 20px;
    }

    .option-btn {
      padding: 16px;
      background: #f5f5f5;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s;
      text-align: left;
    }

    .option-btn:hover {
      background: #e8e8e8;
      border-color: #770206;
    }

    .option-btn.correct {
      background: #e8f5e9;
      border-color: #388e3c;
      color: #388e3c;
    }

    .option-btn.incorrect {
      background: #ffebee;
      border-color: #d32f2f;
      color: #d32f2f;
    }

    .score-display {
      text-align: center;
      font-size: 18px;
      color: #770206;
      font-weight: 600;
      margin-bottom: 20px;
    }
    
    .timer-display {
      display: inline-block;
      margin-left: 20px;
      padding: 8px 16px;
      background: #fff3e0;
      color: #f57c00;
      border-radius: 8px;
      font-weight: 600;
      font-size: 18px;
    }

    .timer-display.warning {
      background: #ffebee;
      color: #d32f2f;
      animation: pulse 0.5s infinite;
    }

     @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .config-section {
        margin-bottom: 30px;
    }

    .timer-config, .checkbox-grid {
        display: grid;
        gap: 10px;
    }

    .timer-option, .checkbox-label {
      display: flex;
      align-items: center;
      padding: 12px;
      background: #f5f5f5;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .timer-option:hover, .checkbox-label:hover {
      background: #e8e8e8;
    }

    .timer-option input[type="radio"], .checkbox-label input[type="checkbox"] {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: #770206;
    }

    .back-btn {
      background: #9e9e9e;
      margin-top: 20px;
    }

    .back-btn:hover {
      background: #757575;
    }

    .word-bank {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 24px;
      min-height: 60px;
      padding: 16px;
      background: #f5f5f5;
      border-radius: 8px;
    }

    .word-btn {
      padding: 10px 16px;
      background: #770206;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    .word-btn:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .sentence-construction {
      min-height: 80px;
      padding: 16px;
      background: white;
      border: 2px dashed #770206;
      border-radius: 8px;
      margin-bottom: 24px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }

    .constructed-word {
      padding: 10px 16px;
      background: #e3f2fd;
      color: #1976d2;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .constructed-word:hover {
      background: #bbdefb;
    }

    .feedback-message {
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 20px;
      text-align: center;
      font-weight: 600;
    }

    .feedback-correct {
      background: #e8f5e9;
      color: #388e3c;
    }

    .feedback-incorrect {
      background: #ffebee;
      color: #d32f2f;
    }
  `}</style>
);

const initialGameState = {
  type: null,
  currentQuestion: 0,
  score: 0,
  questions: [],
  config: {},
  timerId: null,
  timeRemaining: null,
  timerSeconds: null,
  constructedSentence: [],
  shuffledWords: [],
  feedback: null,
  answered: false,
};

export default function LatinPlatformPage() {
  const [niveau, setNiveau] = useState(5);
  const [screen, setScreen] = useState('questionnaire');
  const [userProfile, setUserProfile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [gameState, setGameState] = useState(initialGameState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const calculateProfile = (level, years) => {
    const score = (level * 2) + (years * 3);
    if (score <= 10) return 'debutant';
    if (score <= 25) return 'intermediaire';
    return 'avance';
  };
  
  const getProfileLabel = (profil) => {
    const labels = {
      'debutant': 'Débutant',
      'intermediaire': 'Intermédiaire',
      'avance': 'Avancé'
    };
    return labels[profil] || 'Débutant';
  }

  const handleQuestionnaireSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const pseudo = formData.get('pseudo');
    const anneesLatin = parseInt(formData.get('annees'));
    const niveauValue = parseInt(formData.get('niveau'));

    const profil = calculateProfile(niveauValue, anneesLatin);

    const profileData = {
      pseudo,
      profil,
    };
    
    setTimeout(() => {
      setUserProfile(profileData);
      setScreen('hub');
      setIsSubmitting(false);
    }, 1000);
  };

  const showHub = () => {
    setScreen('hub');
    setGameState(initialGameState);
  }

  const startGame = (gameType) => {
    setGameState(prev => ({ ...prev, type: gameType }));
    setScreen('game-config');
  };
  
  const startConfiguredGame = (gameType) => {
    const profil = userProfile.profil;
    let allQuestions = gameData[profil]?.[gameType] || [];
    let filteredQuestions = [...allQuestions];
    
    const timerValue = parseInt(document.querySelector('input[name="timer"]:checked')?.value) || null;

    if (gameType === 'conjugaison') {
      const temps = {
        present: document.getElementById('temps-present').checked,
        imparfait: document.getElementById('temps-imparfait').checked,
        parfait: document.getElementById('temps-parfait').checked,
        futur: document.getElementById('temps-futur').checked,
      };
      const voix = {
        actif: document.getElementById('voix-actif').checked,
        passif: document.getElementById('voix-passif').checked,
      };
      filteredQuestions = allQuestions.filter(q => temps[q.temps] && voix[q.voix]);
    } else if (gameType === 'temps') {
        const temps = {
            present: document.getElementById('id-present').checked,
            imparfait: document.getElementById('id-imparfait').checked,
            parfait: document.getElementById('id-parfait').checked,
            futur: document.getElementById('id-futur').checked,
            plusqueparfait: document.getElementById('id-plusqueparfait').checked,
        };
        filteredQuestions = allQuestions.filter(q => temps[q.temps]);
    } else if (gameType === 'reconstitution') {
        const declinaisons = {
            nominatif: document.getElementById('decl-nominatif').checked,
            accusatif: document.getElementById('decl-accusatif').checked,
            genitif: document.getElementById('decl-genitif').checked,
            datif: document.getElementById('decl-datif').checked,
            ablatif: document.getElementById('decl-ablatif').checked,
        };
        filteredQuestions = allQuestions.filter(q => q.declinaisons.some(d => declinaisons[d]));
    } else if (gameType === 'declinaison') {
        const decls = {
            '1ere': document.getElementById('decl-1').checked,
            '2eme': document.getElementById('decl-2').checked,
            '3eme': document.getElementById('decl-3').checked,
            '4eme': document.getElementById('decl-4').checked,
            '5eme': document.getElementById('decl-5').checked,
        };
        filteredQuestions = allQuestions.filter(q => decls[q.declinaison]);
    }
    
    if (filteredQuestions.length === 0) {
        alert("Aucune question disponible pour cette configuration. Veuillez sélectionner au moins une option.");
        return;
    }
    
    const questions = [...filteredQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    const shuffledWords = gameType === 'reconstitution' ? [...questions[0]?.words].sort(() => Math.random() - 0.5) : [];

    setGameState({
      ...initialGameState,
      type: gameType,
      questions: questions,
      timerSeconds: timerValue,
      timeRemaining: timerValue,
      shuffledWords: shuffledWords,
    });
    setScreen('game');
  };

  const handleNextQuestion = useCallback(() => {
    setGameState(prev => {
        const nextQuestionIndex = prev.currentQuestion + 1;
        if (nextQuestionIndex >= prev.questions.length) {
            return { ...prev, currentQuestion: nextQuestionIndex }; // End game
        }
        const nextQuestion = prev.questions[nextQuestionIndex];
        const shuffledWords = prev.type === 'reconstitution' ? [...nextQuestion.words].sort(() => Math.random() - 0.5) : [];
        return {
            ...prev,
            currentQuestion: nextQuestionIndex,
            timeRemaining: prev.timerSeconds,
            feedback: null,
            answered: false,
            constructedSentence: [],
            shuffledWords: shuffledWords,
        };
    });
  }, []);

  const getCorrectAnswerText = (question, type) => {
    if (!question) return '';
    switch (type) {
      case 'reconstitution':
        return question.correct.join(' ');
      case 'vraifaux':
        return question.correct ? 'Vrai' : 'Faux';
      default:
        return question.options[question.correct];
    }
  };

  const handleAnswer = useCallback((isCorrect) => {
      if (gameState.answered) return;

      const currentQuestion = gameState.questions[gameState.currentQuestion];
      const feedbackText = isCorrect
          ? 'Correct !'
          : `Incorrect. La bonne réponse était : ${getCorrectAnswerText(currentQuestion, gameState.type)}`;

      setGameState(prev => ({
          ...prev,
          answered: true,
          score: isCorrect ? prev.score + 1 : prev.score,
          feedback: feedbackText,
      }));

      setTimeout(handleNextQuestion, 2000);
  }, [gameState.answered, gameState.questions, gameState.currentQuestion, gameState.type, handleNextQuestion]);

  useEffect(() => {
    let timerId;
    if (screen === 'game' && gameState.timerSeconds && !gameState.answered && gameState.timeRemaining > 0) {
      timerId = setTimeout(() => {
        setGameState(prev => ({ ...prev, timeRemaining: prev.timeRemaining - 1 }));
      }, 1000);
    } else if (gameState.timeRemaining === 0 && !gameState.answered) {
      const currentQuestion = gameState.questions[gameState.currentQuestion];
      setGameState(prev => ({
        ...prev,
        answered: true,
        feedback: `Temps écoulé ! La bonne réponse était : ${getCorrectAnswerText(currentQuestion, gameState.type)}`
      }));
      setTimeout(handleNextQuestion, 2000);
    }
    return () => clearTimeout(timerId);
  }, [screen, gameState.timeRemaining, gameState.timerSeconds, gameState.answered, gameState.questions, gameState.currentQuestion, gameState.type, handleNextQuestion]);

  const renderGame = () => {
    if (gameState.currentQuestion >= gameState.questions.length) {
        return (
            <div>
                <h2 className="question-text">Partie terminée !</h2>
                <div className="score-display">Score final : {gameState.score}/{gameState.questions.length}</div>
                <button className="btn" onClick={() => startGame(gameState.type)}>Rejouer</button>
                <button className="btn back-btn" onClick={showHub}>Retour au hub</button>
            </div>
        );
    }

    const q = gameState.questions[gameState.currentQuestion];

    const handleQCMAnswer = (selectedIndex) => {
        handleAnswer(selectedIndex === q.correct);
    };

    const handleVraiFauxAnswer = (answer) => {
        handleAnswer(answer === q.correct);
    };

    const handleReconstitutionAnswer = () => {
        const userAnswer = gameState.constructedSentence.map(item => item.word).join(' ');
        const correctAnswer = q.correct.join(' ');
        handleAnswer(userAnswer === correctAnswer);
    }

    const addWordToSentence = (word, index) => {
      if (gameState.answered) return;
      
      const newShuffled = [...gameState.shuffledWords];
      newShuffled.splice(index, 1);

      setGameState(prev => ({
        ...prev,
        constructedSentence: [...prev.constructedSentence, { word, originalIndex: index }],
        shuffledWords: newShuffled,
      }));
    };
    
    const removeWordFromSentence = (word, indexInSentence) => {
        if (gameState.answered) return;
        
        const wordToRemove = gameState.constructedSentence[indexInSentence];
        const newConstructed = gameState.constructedSentence.filter((_, i) => i !== indexInSentence);
        const newShuffled = [...gameState.shuffledWords, wordToRemove.word];

        setGameState(prev => ({
          ...prev,
          shuffledWords: newShuffled,
          constructedSentence: newConstructed
        }));
    }

    const GameHeader = () => (
      <div className="score-display">
        Question {gameState.currentQuestion + 1}/{gameState.questions.length} - Score : {gameState.score}
        {gameState.timerSeconds && 
          <span className={`timer-display ${gameState.timeRemaining <= 5 && gameState.timeRemaining > 0 ? 'warning' : ''}`}>
            ⏱️ {gameState.timeRemaining}s
          </span>
        }
      </div>
    );
    
    return (
        <div>
            <GameHeader />
            {gameState.feedback && <div className={`feedback-message ${gameState.feedback.startsWith('Correct') ? 'feedback-correct' : 'feedback-incorrect'}`}>{gameState.feedback}</div>}
            
            {gameState.type === 'reconstitution' ? (
                <>
                    <div className="question-text">Reconstituez : "{q.french}"</div>
                    <div className="sentence-construction">
                        {gameState.constructedSentence.map((item, i) => 
                            <span key={i} className="constructed-word" onClick={() => removeWordFromSentence(item.word, i)}>{item.word}</span>
                        )}
                    </div>
                    <div className="word-bank">
                        {gameState.shuffledWords.map((word, i) => (
                           word && <button key={i} className="word-btn" onClick={() => addWordToSentence(word, i)} disabled={gameState.answered}>{word}</button>
                        ))}
                    </div>
                    <button className="btn" onClick={handleReconstitutionAnswer} disabled={gameState.answered}>Vérifier</button>
                </>
            ) : gameState.type === 'vraifaux' ? (
                 <>
                    <div className="question-text">"{q.latin}" signifie "{q.french}"</div>
                    <div className="options-grid">
                        <button className={`option-btn ${gameState.answered && q.correct === true ? 'correct' : ''} ${gameState.answered && q.correct === false && true ? 'incorrect' : ''}`} onClick={() => handleVraiFauxAnswer(true)} disabled={gameState.answered}>✅ Vrai</button>
                        <button className={`option-btn ${gameState.answered && q.correct === false ? 'correct' : ''} ${gameState.answered && q.correct === true && false ? 'incorrect' : ''}`} onClick={() => handleVraiFauxAnswer(false)} disabled={gameState.answered}>❌ Faux</button>
                    </div>
                </>
            ) : ( // Covers all QCM types
                <>
                    <div className="question-text">{q.question}</div>
                    <div className="options-grid">
                        {q.options.map((option, index) => (
                            <button key={index} 
                              className={`option-btn ${gameState.answered ? (index === q.correct ? 'correct' : '') : ''}`} 
                              onClick={() => handleQCMAnswer(index)} 
                              disabled={gameState.answered}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
            <button className="btn back-btn" onClick={showHub}>Quitter</button>
        </div>
    );
  };
  
  const renderGameConfig = () => {
    const title = `Configuration - ${gameState.type.charAt(0).toUpperCase() + gameState.type.slice(1)}`;

    const timerConfig = (
        <div className="config-section">
            <h3>⏱️ Chronomètre par question :</h3>
            <div className="timer-config">
                <label className="timer-option"><input type="radio" name="timer" value="none" defaultChecked/><span>Pas de chronomètre</span></label>
                <label className="timer-option"><input type="radio" name="timer" value="10"/><span>10 secondes</span></label>
                <label className="timer-option"><input type="radio" name="timer" value="15"/><span>15 secondes</span></label>
                <label className="timer-option"><input type="radio" name="timer" value="25"/><span>25 secondes</span></label>
            </div>
        </div>
    );

    let specificConfig = null;

    if (gameState.type === 'conjugaison') {
        specificConfig = (
            <>
                <div className="config-section">
                    <h3>Temps à inclure :</h3>
                    <div className="checkbox-grid">
                        <label className="checkbox-label"><input type="checkbox" id="temps-present" defaultChecked/><span>Présent</span></label>
                        <label className="checkbox-label"><input type="checkbox" id="temps-imparfait" defaultChecked/><span>Imparfait</span></label>
                        <label className="checkbox-label"><input type="checkbox" id="temps-parfait" defaultChecked/><span>Parfait</span></label>
                        <label className="checkbox-label"><input type="checkbox" id="temps-futur" defaultChecked/><span>Futur</span></label>
                    </div>
                </div>
                <div className="config-section">
                    <h3>Voix à inclure :</h3>
                    <div className="checkbox-grid">
                        <label className="checkbox-label"><input type="checkbox" id="voix-actif" defaultChecked/><span>Actif</span></label>
                        <label className="checkbox-label"><input type="checkbox" id="voix-passif" defaultChecked/><span>Passif</span></label>
                    </div>
                </div>
            </>
        );
    } else if (gameState.type === 'temps') {
        specificConfig = (
             <div className="config-section">
                <h3>Temps à identifier :</h3>
                <div className="checkbox-grid">
                  <label className="checkbox-label"><input type="checkbox" id="id-present" defaultChecked/><span>Présent</span></label>
                  <label className="checkbox-label"><input type="checkbox" id="id-imparfait" defaultChecked/><span>Imparfait</span></label>
                  <label className="checkbox-label"><input type="checkbox" id="id-parfait" defaultChecked/><span>Parfait</span></label>
                  <label className="checkbox-label"><input type="checkbox" id="id-futur" defaultChecked/><span>Futur</span></label>
                  <label className="checkbox-label"><input type="checkbox" id="id-plusqueparfait" defaultChecked/><span>Plus-que-parfait</span></label>
                </div>
            </div>
        );
    } else if (gameState.type === 'reconstitution') {
         specificConfig = (
             <div className="config-section">
                <h3>Déclinaisons à inclure :</h3>
                <div className="checkbox-grid">
                    <label className="checkbox-label"><input type="checkbox" id="decl-nominatif" defaultChecked/><span>Nominatif</span></label>
                    <label className="checkbox-label"><input type="checkbox" id="decl-accusatif" defaultChecked/><span>Accusatif</span></label>
                    <label className="checkbox-label"><input type="checkbox" id="decl-genitif" defaultChecked/><span>Génitif</span></label>
                    <label className="checkbox-label"><input type="checkbox" id="decl-datif" defaultChecked/><span>Datif</span></label>
                    <label className="checkbox-label"><input type="checkbox" id="decl-ablatif" defaultChecked/><span>Ablatif</span></label>
                </div>
            </div>
        );
    } else if (gameState.type === 'declinaison') {
         specificConfig = (
             <div className="config-section">
                <h3>Déclinaisons à réviser :</h3>
                <div className="checkbox-grid">
                    <label className="checkbox-label"><input type="checkbox" id="decl-1" defaultChecked/><span>1ère déclinaison</span></label>
                    <label className="checkbox-label"><input type="checkbox" id="decl-2" defaultChecked/><span>2ème déclinaison</span></label>
                    <label className="checkbox-label"><input type="checkbox" id="decl-3" defaultChecked/><span>3ème déclinaison</span></label>
                    <label className="checkbox-label"><input type="checkbox" id="decl-4" defaultChecked/><span>4ème déclinaison</span></label>
                    <label className="checkbox-label"><input type="checkbox" id="decl-5" defaultChecked/><span>5ème déclinaison</span></label>
                </div>
            </div>
        );
    }


    return (
        <div>
            <h2 className="question-text">{title}</h2>
            {timerConfig}
            {specificConfig}
            <button className="btn" onClick={() => startConfiguredGame(gameState.type)}>Commencer le quiz</button>
            <button className="btn back-btn" onClick={showHub}>Retour</button>
        </div>
    );
  }

  const GameCard = ({ emoji, title, onClick }) => (
    <div className="game-card" onClick={onClick}>
      <div className="game-icon">{emoji}</div>
      <h3 className="game-title">{title}</h3>
    </div>
  );

  if (isLoading) {
    return (
      <>
        <LatinAppStyles />
        <div className="splash-screen">
          <Image 
            src="https://i.ibb.co/N2jmFGcY/91f3c1ed-bd46-47d8-9599-235a22473f89-removebg-preview.png" 
            alt="Logo"
            width={400}
            height={400}
            priority
          />
          <div className="loader"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <LatinAppStyles />
      <div className="main-container">
        <div className="content-wrapper">
          {screen === 'questionnaire' && (
            <div id="questionnaire-screen" className="card">
              <h1 id="app-title">Apprentissage du Latin</h1>
              <p className="subtitle" id="welcome-message">
                Bienvenue ! Commencez par nous en dire un peu plus sur vous.
              </p>
              <form id="questionnaire-form" onSubmit={handleQuestionnaireSubmit}>
                <div className="form-group">
                  <label htmlFor="pseudo">Pseudo</label>
                  <input type="text" id="pseudo" name="pseudo" required placeholder="Votre pseudo" />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Âge</label>
                  <input type="number" id="age" name="age" required min="1" max="120" placeholder="Votre âge" />
                </div>
                <div className="form-group">
                  <label htmlFor="niveau">Niveau actuel (1-10)</label>
                  <div className="slider-container">
                    <input
                      type="range"
                      id="niveau"
                      name="niveau"
                      min="1"
                      max="10"
                      value={niveau}
                      onChange={(e) => setNiveau(parseInt(e.target.value))}
                    />
                    <div className="slider-value" id="niveau-value">
                      {niveau}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="annees">Nombre d'années de latin</label>
                  <input
                    type="number"
                    id="annees"
                    name="annees"
                    required
                    min="0"
                    max="20"
                    placeholder="Années d'étude"
                    defaultValue="0"
                  />
                </div>
                <button type="submit" className="btn" id="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Création de votre profil...' : 'Commencer l\'aventure'}
                </button>
              </form>
            </div>
          )}

          {screen === 'hub' && userProfile && (
            <div id="hub-screen" className="card">
                 <h1>Bienvenue <span id="user-pseudo">{userProfile.pseudo}</span> !</h1>
                 <p className="subtitle">Votre profil : <span className={`profile-badge profile-${userProfile.profil}`} id="user-profile">{getProfileLabel(userProfile.profil)}</span></p>

                <div className="category-section">
                    <h2 className="category-title">📖 Vocabulaire</h2>
                    <div className="hub-grid">
                        <GameCard emoji="📚" title="Cartes de Vocabulaire" onClick={() => startGame('vocab')} />
                        <GameCard emoji="✅" title="Vrai ou Faux" onClick={() => startGame('vraifaux')} />
                    </div>
                </div>
                <div className="category-section">
                    <h2 className="category-title">✏️ Grammaire</h2>
                    <div className="hub-grid">
                        <GameCard emoji="📝" title="Phrases à Comprendre" onClick={() => startGame('phrases')} />
                        <GameCard emoji="🔤" title="Reconstituer la Phrase" onClick={() => startGame('reconstitution')} />
                    </div>
                </div>
                 <div className="category-section">
                    <h2 className="category-title">🔄 Conjugaison</h2>
                    <div className="hub-grid">
                        <GameCard emoji="⚡" title="Quiz de Conjugaison" onClick={() => startGame('conjugaison')} />
                        <GameCard emoji="⏰" title="Identifier les Temps" onClick={() => startGame('temps')} />
                    </div>
                </div>
                <div className="category-section">
                    <h2 className="category-title">📜 Déclinaison</h2>
                    <div className="hub-grid">
                        <GameCard emoji="🏛️" title="Quiz de Déclinaison" onClick={() => startGame('declinaison')} />
                    </div>
                </div>
                <div className="category-section">
                    <h2 className="category-title">🏛️ Culture</h2>
                    <div className="hub-grid">
                        <GameCard emoji="🎭" title="Culture Romaine" onClick={() => startGame('culture')} />
                        <GameCard emoji="💬" title="Citations Célèbres" onClick={() => startGame('citations')} />
                    </div>
                </div>
            </div>
          )}

          {(screen === 'game-config' || screen === 'game') && (
             <div id="game-screen">
                <div className="game-container">
                    <div id="game-content">
                       {screen === 'game-config' && renderGameConfig()}
                       {screen === 'game' && renderGame()}
                    </div>
                </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
