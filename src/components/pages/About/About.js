import "./About.css";


export const About = () => {
  const aboutSection = document.createElement("section");
  aboutSection.id = "about";

  const title = document.createElement("h2");
  const paragraph = document.createElement("p");

  title.textContent = "Acerca de Nosotros";
  paragraph.textContent = "Bienvenido o bienvenida a nuestra empresa, donde las imágenes te darán lo que necesitas para que las ideas se convierten en realidad. Aquí siempre encontrarás creatividad, nosotros te proporcionamos el lienzo perfecto: una amplia variedad de imágenes que te inspirarán y despertarán la imaginación. Ya sea que estés creando un proyecto personal o buscando material para tu próximo proyecto profesional, estamos aquí para proveerte de la inspiración que necesitas. Desde paisajes impresionantes hasta retratos cautivadores, nuestra biblioteca de imágenes diversa y dinámica te ofrece infinitas posibilidades. ¡Estamos encantados de acompañarte en el viaje de la creatividad y juntos llevaremos tus ideas más allá de la imaginación! ";
  
  aboutSection.appendChild(title);
  aboutSection.appendChild(paragraph);

  return aboutSection;

  // document.body.appendChild(aboutSection);
};



// export const About = () => {
//   const divApp = document.querySelector("#app");

//     const heading = document.createElement("h1");
//     heading.textContent = "Sobre nosotros"; 

//     const paragraph = document.createElement("p");
//     paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
//     divApp.appendChild(heading);
//     divApp.appendChild(paragraph);
//   }

  // divApp.innerHTML = `<h1>Sobre nosotros</h1>`;
  // divApp.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"

