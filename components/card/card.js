import './card.css';

const pinterCard = (width,src) => {
  return `
  <li class='card'>
  <img class='photo' src='${src}'>
  </li>`
}

export const PinterCard = (width,src) => {
  return pinterCard(width,src);
};