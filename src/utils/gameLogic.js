// src/utils/gameLogic.js

export const compareAttribute = (guessValue, targetValue, type = "exact") => {
  if (type === "exact") {
    return guessValue === targetValue ? "correct" : "incorrect";
  }
  if (type === "number") {
    if (guessValue === targetValue) return "correct";
    return guessValue < targetValue ? "lower" : "higher";
  }
  return "incorrect";
};

export const compareCharacters = (guessedCharacter, targetCharacter) => {
  return {
    name: guessedCharacter.name,
    image: guessedCharacter.image,
    gender: compareAttribute(guessedCharacter.gender, targetCharacter.gender),
    genderValue: guessedCharacter.gender,
    affiliation: compareAttribute(
      guessedCharacter.affiliation,
      targetCharacter.affiliation
    ),
    affiliationValue: guessedCharacter.affiliation,
    titanShifter: compareAttribute(
      guessedCharacter.titanShifter,
      targetCharacter.titanShifter
    ),
    titanShifterValue: guessedCharacter.titanShifter,
    firstAppearance: compareAttribute(
      guessedCharacter.firstAppearance,
      targetCharacter.firstAppearance
    ),
    firstAppearanceValue: guessedCharacter.firstAppearance,
    status: compareAttribute(guessedCharacter.status, targetCharacter.status),
    statusValue: guessedCharacter.status,
    age: compareAttribute(guessedCharacter.age, targetCharacter.age, "number"),
    ageValue: guessedCharacter.age,
  };
};

export const getColorClass = (status, isAge = false) => {
  if (status === "correct") return "bg-green-500 text-white";
  if (status === "incorrect") return "bg-gray-400 text-white";
  if (isAge) {
    return status === "lower"
      ? "bg-yellow-500 text-white"
      : "bg-orange-500 text-white";
  }
  return "bg-gray-400 text-white";
};

export const getAgeDisplay = (status, age) => {
  if (status === "correct") return age;
  if (status === "lower") return `${age} ↑`;
  return `${age} ↓`;
};
