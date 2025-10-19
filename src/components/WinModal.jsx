// src/components/WinModal.jsx

export default function WinModal({ characterName, guessCount }) {
  return (
    <div className="bg-green-600 text-white p-4 rounded-lg mb-6 text-center">
      <h2 className="text-2xl font-bold">🎉 You Won!</h2>
      <p>
        You guessed {characterName} in {guessCount} tries!
      </p>
    </div>
  );
}
