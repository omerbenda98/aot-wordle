// src/components/GameBoard.jsx

import GuessRow from "./GuessRow";

export default function GameBoard({ guesses, targetCharacter }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-6 gap-2 text-center font-semibold text-sm mb-2">
        <div>Character</div>
        <div>Gender</div>
        <div>Affiliation</div>
        <div>Titan Shifter</div>
        <div>First Appearance</div>
        <div>Age</div>
      </div>

      {guesses.map((guess, index) => (
        <GuessRow key={index} guess={guess} targetCharacter={targetCharacter} />
      ))}

      {guesses.length === 0 && (
        <div className="text-center text-white-400 mt-8">
          <p>Start guessing to see clues!</p>
          <p className="text-md mt-2">
            Green = Correct | Gray = Incorrect | Yellow/Orange = Higher/Lower
          </p>
        </div>
      )}
    </div>
  );
}
