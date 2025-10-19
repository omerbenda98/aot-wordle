// src/App.jsx

import { useState, useMemo } from "react";
import Header from "./components/Header";
import WinModal from "./components/WinModal";
import GuessInput from "./components/GuessInput";
import GameBoard from "./components/GameBoard";
import { getRandomCharacter, filterCharacters } from "./data/characters";
import { compareCharacters } from "./utils/gameLogic";
import backgroundImage from "./assets/background5.jpg";

function App() {
  const [targetCharacter] = useState(() => getRandomCharacter());
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const suggestions = useMemo(() => {
    const guessedNames = guesses.map((g) => g.name);
    return filterCharacters(input, guessedNames);
  }, [input, guesses]);

  const handleGuess = (character) => {
    if (gameWon) return;

    const comparison = compareCharacters(character, targetCharacter);
    setGuesses([...guesses, comparison]);
    setInput("");
    setShowSuggestions(false);

    if (character.name === targetCharacter.name) {
      setGameWon(true);
    }
  };

  return (
    <div
      className="min-h-screen text-white p-3 sm:p-4 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <Header />

        {gameWon && (
          <WinModal
            characterName={targetCharacter.name}
            guessCount={guesses.length}
          />
        )}

        <GuessInput
          value={input}
          onChange={setInput}
          onSelect={handleGuess}
          suggestions={suggestions}
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
          disabled={gameWon}
        />

        <GameBoard guesses={guesses} targetCharacter={targetCharacter} />
      </div>
    </div>
  );
}

export default App;
