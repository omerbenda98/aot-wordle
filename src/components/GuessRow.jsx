// src/components/GuessRow.jsx
import { getColorClass, getAgeDisplay } from "../utils/gameLogic";
import SurveyCorpsIcon from "../../public/images/survey-corps.jpg";
import MarleyIcon from "../assets/marley.png";

const getAffiliationIcon = (affiliation) => {
  const icons = {
    "Survey Corps": SurveyCorpsIcon,
    Marley: MarleyIcon,
  };
  return icons[affiliation];
};

export default function GuessRow({ guess }) {
  const icon = getAffiliationIcon(guess.affiliationValue);

  const attributes = [
    {
      content: guess.name,
      colorClass: "bg-blue-600",
      isBold: true,
      showImage: true,
      image: guess.image,
    },
    {
      content: guess.genderValue,
      colorClass: getColorClass(guess.gender),
    },
    {
      content: guess.affiliationValue,
      colorClass: getColorClass(guess.affiliation),
      icon,
    },
    {
      content: guess.titanShifterValue,
      colorClass: getColorClass(guess.titanShifter),
    },
    {
      content: guess.firstAppearanceValue,
      colorClass: getColorClass(guess.firstAppearance),
    },
    {
      content: getAgeDisplay(guess.age, guess.ageValue),
      colorClass: getColorClass(guess.age, true),
      isBold: true,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-6 gap-2 text-center">
        {attributes.map((attr, index) => (
          <div
            key={index}
            className={`p-2 rounded ${attr.colorClass} ${
              attr.isBold ? "font-semibold" : ""
            } flex flex-col items-center justify-center gap-1 animate-fade-in opacity-0 min-h-[80px]`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            {attr.showImage && attr.image && (
              <img
                src={`/aot-wordle/images/${attr.image}`}
                alt={attr.content}
                className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover border-2 border-white/40 shadow-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            )}
            {attr.icon && (
              <img
                src={attr.icon}
                alt=""
                className="w-10 h-10 drop-shadow-md"
              />
            )}
            <span className="text-[10px] sm:text-base leading-tight px-1 break-words">
              {attr.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
