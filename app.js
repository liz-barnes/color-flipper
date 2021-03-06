'use strict';

const colors = [
  {
    colorName: 'Peru',
    hexCode: '#cd853f',
  },
  {
    colorName: 'Olive',
    hexCode: '#808000',
  },
  {
    colorName: 'Cadet Blue',
    hexCode: '#5f9ea0',
  },
  {
    colorName: 'Lavender Blush',
    hexCode: '#fff0f5',
  },
  {
    colorName: 'Peach Puff',
    hexCode: '#ffdab9',
  },
  {
    colorName: 'Thistle',
    hexCode: '#d8bfd8',
  },
  {
    colorName: 'Rosy Brown',
    hexCode: '#bc8f8f',
  },
  {
    colorName: 'Sienna',
    hexCode: '#a0522d ',
  },
  {
    colorName: 'Alice Blue',
    hexCode: '#f0f8ff',
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

const init = () => {
  hexBtnClick();
};

init();
