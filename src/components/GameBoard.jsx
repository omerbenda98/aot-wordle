// src/components/GameBoard.jsx

import GuessRow from "./GuessRow";

export default function GameBoard({ guesses, targetCharacter }) {
  return (
    <div className="space-y-3">
      {/* Headers */}
      <div className="grid grid-cols-6 gap-2 text-center font-semibold text-[10px] sm:text-xs mb-2">
        <div>Character</div>
        <div>Gender</div>
        <div>Affiliation</div>
        <div>Titan Shifter</div>
        <div>First Appear</div>
        <div>Age</div>
      </div>

      {guesses.map((guess, index) => (
        <GuessRow key={index} guess={guess} targetCharacter={targetCharacter} />
      ))}

      {guesses.length === 0 && (
        <div className="text-center text-gray-400 mt-8">
          <p className="text-sm">Start guessing to see clues!</p>
          <p className="text-xs mt-2">
            🟢 Correct | ⚪ Incorrect | 🟡🟠 Higher/Lower
          </p>
        </div>
      )}
    </div>
  );
}
