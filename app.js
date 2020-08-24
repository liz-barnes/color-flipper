'use strict';

const colors = [
  {
    colorName: 'Peru',
    hexCode: '#CD853F',
  },
  {
    colorName: 'Olive',
    hexCode: '#808000',
  },
  {
    colorName: 'Cadet Blue',
    hexCode: '#5F9EA0',
  },
  {
    colorName: 'Lavender Blush',
    hexCode: '#FFF0F5',
  },
  {
    colorName: 'Peach Puff',
    hexCode: '#FFDAB9',
  },
  {
    colorName: 'Thistle',
    hexCode: '#D8BFD8',
  },
  {
    colorName: 'Rosy Brown',
    hexCode: '#BC8F8F',
  },
  {
    colorName: 'Sienna',
    hexCode: '#A0522D ',
  },
  {
    colorName: 'Alice Blue',
    hexCode: '#F0F8FF',
  },
];

const colorRandomizer = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const chosenColor = () => {
  const randomColor = colorRandomizer();
  document.body.style.backgroundColor = randomColor.hexCode;

  document.getElementById(
    "chosenBackgroundColor"
  ).innerHTML = `Background Color: ${randomColor.colorName} ${randomColor.hexCode}`;
};

const hexBtnClick = () => {
  document
    .getElementById("hexBtn")
    .addEventListener("click", chosenColor);
};

const simpleBtnClink = () => {
  document
    .getElementById("simpleBtn")
    .addEventListener("click", chosenColor);
}

const init = () => {
  hexBtnClick();
  simpleBtnClink();
};

init();
