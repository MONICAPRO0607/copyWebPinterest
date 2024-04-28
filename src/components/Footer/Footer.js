import "./Footer.css";

export const Footer = () => {
  const footerHTML = document.createElement("footer");
  const p = document.createElement("p");

  p.textContent = "© 2024 Mónica Sánchez Carrillo. Todos los derechos reservados.";

  footerHTML.appendChild(p);
  document.body.appendChild(footerHTML);
};
