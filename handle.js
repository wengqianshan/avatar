const React = require('react');
const RDS = require('react-dom/server');
const seedrandom = require('seedrandom');

const {
  BigHead,
  theme,
  eyesMap,
  eyebrowsMap,
  mouthsMap,
  hairMap,
  facialHairMap,
  clothingMap,
  accessoryMap,
  graphicsMap,
  hatMap,
  bodyMap,
} = require('@bigheads/core');

function getRandomOptions(rng) {
  function selectRandomKey(object) {
    return Object.keys(object)[Math.floor(rng() * Object.keys(object).length)];
  }

  const skinTone = selectRandomKey(theme.colors.skin);
  const eyes = selectRandomKey(eyesMap);
  const eyebrows = selectRandomKey(eyebrowsMap);
  const mouth = selectRandomKey(mouthsMap);
  const hair = selectRandomKey(hairMap);
  const facialHair = selectRandomKey(facialHairMap);
  const clothing = selectRandomKey(clothingMap);
  const accessory = selectRandomKey(accessoryMap);
  const graphic = selectRandomKey(graphicsMap);
  const hat = selectRandomKey(hatMap);
  const body = selectRandomKey(bodyMap);

  const hairColor = selectRandomKey(theme.colors.hair);
  const clothingColor = selectRandomKey(theme.colors.clothing);
  const circleColor = selectRandomKey(theme.colors.bgColors);
  const lipColor = selectRandomKey(theme.colors.lipColors);
  const hatColor = selectRandomKey(theme.colors.clothing);
  const faceMaskColor = selectRandomKey(theme.colors.clothing);

  const mask = true;
  const faceMask = false;
  const lashes = rng() > 0.5;

  return {
    skinTone,
    eyes,
    eyebrows,
    mouth,
    hair,
    facialHair,
    clothing,
    accessory,
    graphic,
    hat,
    body,
    hairColor,
    clothingColor,
    circleColor,
    lipColor,
    hatColor,
    faceMaskColor,
    mask,
    faceMask,
    lashes,
  };
}

module.exports = (seed) => {
  const rng = seed ? seedrandom(seed) : Math.random;

  const html = RDS.renderToString(
    React.createElement(BigHead, getRandomOptions(rng))
  );

  return html;
};
