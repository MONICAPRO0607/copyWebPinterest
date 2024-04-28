import './filters.css';

const filters = (buttonsVisible) => {
  return `
  <div class='buttonFiltercontainer'>
    <div class='buttonFilter'>
    <input id='inputFilter' placeholder='Buscar' type="text">
    </div>
    <button id='myButton'>Haz click aquí</button>
    <button id='clearFilters'>Limpiar</button>
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