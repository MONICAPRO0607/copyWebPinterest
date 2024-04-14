import './filters.css';

const filters = (buttonsVisible) => {
  return `
  <div class='buttonFilter'>
  <label>La palabra debe contenter más de 3 letras</label>
    <input id='inputFilter' placeholder='Buscar' type="text">
  </div>
  <div class='request ${buttonsVisible 
    == false ? 'hidden' : ''}'>
   <button value='lugares' class='buttonCall'>Lugares</button>
   <button value='comidas' class='buttonCall'>Comidas</button>
   <button value='animales' class='buttonCall'>Animales</button>
  </div>
  `
  
}

export const Filters = (buttonsVisible) => {
  return filters(buttonsVisible);
};