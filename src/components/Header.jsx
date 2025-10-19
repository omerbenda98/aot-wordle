// src/components/Header.jsx

export default function Header() {
  return (
    <header className="text-center py-4 sm:py-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Attack on Titan Wordle
      </h1>
      <p className="text-gray-400 text-sm sm:text-base">Guess the character!</p>
    </header>
  );
}
