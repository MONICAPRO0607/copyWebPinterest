import { User } from "../pages/User/User.js";
import { About } from "../pages/About/About.js";
import { Contact } from "../pages/Contact/Contact.js";
import "./Header.css";

const arrayEnlaces = [
  {
    url: "#user",
    texto: "Acceder",
    page: User
  }, 
  {
    url: "#about",
    texto: "Sobre nosotros",
    page: About
  }, 
  {
    url: "#contact",
    texto: "Contacto",
    page: Contact
  }
];

const sections = {};

export const Header = () => {
  const headerHTML = document.createElement("header");
  const logoLink = document.createElement("a");
  const logo = document.createElement("img");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  let currentSection = null;

  logo.src = "/assets/logo.png";
  logo.id = "logoHome";
 
  logoLink.href = "index.html";
  logoLink.appendChild(logo);

  for (const enlace of arrayEnlaces) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${enlace.texto.toLowerCase()}`;
    a.textContent = enlace.texto;

    a.addEventListener("click", (event) => {
      event.preventDefault(); 
      
      const page = enlace.page(); 
      const section = page; 

      if (currentSection) {
        // Si hay una sección actual, la eliminamos
        currentSection.remove();
      }

      // Almacenamos la nueva sección como la sección actual
      currentSection = section;

      // Agregamos la nueva sección al principio del cuerpo del documento
      document.body.prepend(section);
    });

    li.appendChild(a);
    ul.appendChild(li);
  }
  
  headerHTML.appendChild(logoLink)
  headerHTML.appendChild(nav);
  nav.appendChild(ul);
  document.body.appendChild(headerHTML);

};