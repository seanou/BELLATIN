'use client';

import { useState, useEffect } from 'react';

// Since the user provided a lot of custom CSS, we'll use a <style> tag for now.
// In a real app, this would be moved to a separate CSS file.
const LatinAppStyles = () => (
  <style jsx global>{`
    body {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      width: 100vw;
    }

    * {
      box-sizing: border-box;
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
      color: #667eea;
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
      color: #667eea;
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
      border-color: #667eea;
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
      background: #667eea;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    input[type="range"]::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #667eea;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      border: none;
    }

    .slider-value {
      text-align: center;
      color: #667eea;
      font-weight: 600;
      font-size: 18px;
      margin-top: 8px;
    }

    .btn {
      width: 100%;
      padding: 14px 24px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s, transform 0.1s;
    }

    .btn:hover {
      background: #5568d3;
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
      color: #667eea;
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
      border-color: #667eea;
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
  `}</style>
);

export default function LatinPlatformPage() {
  const [niveau, setNiveau] = useState(5);
  const [screen, setScreen] = useState('questionnaire'); // 'questionnaire', 'hub', 'game'
  const [userProfile, setUserProfile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);

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
    const age = parseInt(formData.get('age'));
    const anneesLatin = parseInt(formData.get('annees'));
    const niveauValue = parseInt(formData.get('niveau'));

    const profil = calculateProfile(niveauValue, anneesLatin);

    const profileData = {
      pseudo,
      profil,
    };
    
    // Simulate API call
    setTimeout(() => {
      setUserProfile(profileData);
      setScreen('hub');
      setIsSubmitting(false);
    }, 1000);
  };

  const startGame = (gameType) => {
    setCurrentGame(gameType);
    setScreen('game');
  };
  
  const GameCard = ({ emoji, title, onClick }) => (
    <div className="game-card" onClick={onClick}>
      <div className="game-icon">{emoji}</div>
      <h3 className="game-title">{title}</h3>
    </div>
  );

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
                    <h2 className="category-title">🏛️ Culture</h2>
                    <div className="hub-grid">
                        <GameCard emoji="🎭" title="Culture Romaine" onClick={() => startGame('culture')} />
                        <GameCard emoji="💬" title="Citations Célèbres" onClick={() => startGame('citations')} />
                    </div>
                </div>
            </div>
          )}

          {screen === 'game' && (
             <div id="game-screen">
                <div className="game-container">
                    <div id="game-content">
                        <h2>Jeu: {currentGame}</h2>
                        <button className="btn" onClick={() => setScreen('hub')}>Retour au hub</button>
                    </div>
                </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
