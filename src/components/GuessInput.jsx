// src/components/GuessInput.jsx

export default function GuessInput({
  value,
  onChange,
  onSelect,
  suggestions,
  showSuggestions,
  setShowSuggestions,
  disabled,
}) {
  return (
    <div className="mb-8 relative">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Type a character name..."
        className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={disabled}
      />

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-gray-700 rounded-lg shadow-lg z-10">
          {suggestions.map((char) => (
            <button
              key={char.name}
              onClick={() => onSelect(char)}
              className="w-full text-left p-3 hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg transition-colors"
            >
              {char.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
