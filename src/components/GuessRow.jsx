// src/components/GuessRow.jsx

import { getColorClass, getAgeDisplay } from "../utils/gameLogic";
import SurveyCorpsIcon from "../assets/survey-corps.jpg";
import MarleyIcon from "../assets/marley.png";

// Import all character images
import erenYeager from "../assets/eren-yaeger.jpg";
import mikasaAckerman from "../assets/mikasa-ackerman.jpg";
import arminArlert from "../assets/armin-arlert.jpg";
import leviAckerman from "../assets/levi-ackerman.jpg";
import reinerBraun from "../assets/reiner-braun.jpg";
import annieLeonhart from "../assets/annie-leonhart.jpg";
import zekeYeager from "../assets/zeke-yeager.jpg";
import hangeZoe from "../assets/hange-zoe.jpg";
import erwinSmith from "../assets/erwin-smith.jpg";
import jeanKirstein from "../assets/jean-kirstein.jpg";
import connieSpringer from "../assets/connie-springer.jpg";
import sashaBlouse from "../assets/sasha-blouse.jpg";
import historiaReiss from "../assets/historia-reiss.jpg";
import ymir from "../assets/ymir.jpg";
import bertholdtHoover from "../assets/bertholdt-hoover.jpg";
import pieckFinger from "../assets/pieck-finger.jpg";
import porcoGalliard from "../assets/porco-galliard.jpg";
import falcoGrice from "../assets/falco-grice.jpg";
import gabiBraun from "../assets/gabi-braun.jpg";
import grishaYeager from "../assets/grisha-yeager.jpg";

const getAffiliationIcon = (affiliation) => {
  const icons = {
    "Survey Corps": SurveyCorpsIcon,
    Marley: MarleyIcon,
  };
  return icons[affiliation];
};

const characterImages = {
  "eren-yeager.jpg": erenYeager,
  "mikasa-ackerman.jpg": mikasaAckerman,
  "armin-arlert.jpg": arminArlert,
  "levi-ackerman.jpg": leviAckerman,
  "reiner-braun.jpg": reinerBraun,
  "annie-leonhart.jpg": annieLeonhart,
  "zeke-yeager.jpg": zekeYeager,
  "hange-zoe.jpg": hangeZoe,
  "erwin-smith.jpg": erwinSmith,
  "jean-kirstein.jpg": jeanKirstein,
  "connie-springer.jpg": connieSpringer,
  "sasha-blouse.jpg": sashaBlouse,
  "historia-reiss.jpg": historiaReiss,
  "ymir.jpg": ymir,
  "bertholdt-hoover.jpg": bertholdtHoover,
  "pieck-finger.jpg": pieckFinger,
  "porco-galliard.jpg": porcoGalliard,
  "falco-grice.jpg": falcoGrice,
  "gabi-braun.jpg": gabiBraun,
  "grisha-yeager.jpg": grishaYeager,
};

export default function GuessRow({ guess }) {
  const icon = getAffiliationIcon(guess.affiliationValue);
  const characterImage = guess.image ? characterImages[guess.image] : null;

  const attributes = [
    {
      content: guess.name,
      colorClass: "bg-blue-600",
      isBold: true,
      hasImage: true,
    },
    { content: guess.genderValue, colorClass: getColorClass(guess.gender) },
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
    <div className="grid grid-cols-6 gap-2 text-center">
      {attributes.map((attr, index) => (
        <div
          key={index}
          className={`p-3 rounded ${attr.colorClass} ${
            attr.isBold ? "font-semibold" : ""
          } ${attr.hasImage ? 'flex-col' : 'flex items-center justify-center gap-2'} flex animate-fade-in opacity-0`}
          style={{
            animationDelay: `${index * 500}ms`,
            animationFillMode: "forwards",
          }}
        >
          {attr.hasImage && characterImage && (
            <img
              src={characterImage}
              alt={guess.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-2"
            />
          )}
          {attr.icon && (
            <img src={attr.icon} alt="" className="w-10 h-15 inline-block" />
          )}
          <span className={attr.hasImage ? 'text-sm' : ''}>{attr.content}</span>
        </div>
      ))}
    </div>
  );
}
