import './card.css';

const pinterCard = (width,src) => {
  return `
  <li style='width:${width > 1000 ? width/100 : width/10}%;'>
  <img class='photo' src='${src}'>
  </li>`
}

export const PinterCard = (width,src) => {
  return pinterCard(width,src);
};