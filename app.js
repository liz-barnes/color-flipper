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

const colorSelector = () => {
  const randomColor = colorRandomizer();
  document.body.style.backgroundColor = randomColor.hex;

  document.getElementById(
    "color-indicator"
  ).innerHTML = `${randomColor.name} ${randomColor.hex}`;
};

const buttonClick = () => {
  document
    .getElementById("simpleButton")
    .addEventListener("click", colorSelector);
};



const init = () => {
  buttonClick();
  
};

init();





const handleButtonClick = () => {

  const colorFlipper = (array) => {
  return array[Math.floor(Math.random() * array.length)].hexCode;
}

  document.querySelector('body').style.backgroundColor = `#${colorFlipper(colorArraySimple)}`;
}


const buttonEvents = () => {
  document.querySelector('#click-btn').addEventListener('click', handleButtonClick)
}

buttonEvents();



const printToDom = (divID, textToPrint) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = textToPrint;
}

const addColorNameToPage = (color) => {

  const textToPrint = `<div>Chosen Color: ${color}</div>`;
  console.log(textToPrint);
  printToDom('colorName', textToPrint);
}

const handleButtonClick = e => {
  const buttonId = e.target.id;
  const randomNum = Math.floor(Math.random() * Math.floor(10));
  const chosenColor = colors[randomNum];
  addColorNameToPage(chosenColor);
  const bodySelector = (document.querySelector(
      'body'
  ).style.backgroundColor = chosenColor);
};

const buttonEvents = () => {
  document.querySelector('#myBtn').addEventListener('click', handleButtonClick);
};

buttonEvents();
