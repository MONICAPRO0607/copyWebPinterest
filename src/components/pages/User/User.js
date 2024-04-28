import "./User.css";

export const User = () => {
  const userSection = document.createElement("section");
  userSection.id = "user";

  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const passwordLabel = document.createElement("label");
  const passwordInput = document.createElement("input");
  const loginButton = document.createElement("button");
  const registerButton = document.createElement("button");

  emailLabel.textContent = "Correo electrónico:";
  emailInput.type = "email";
  passwordLabel.textContent = "Contraseña:";
  passwordInput.type = "password";
  loginButton.textContent = "Iniciar sesión";
  registerButton.textContent = "Registrarse";

  userSection.appendChild(emailLabel);
  userSection.appendChild(emailInput);
  userSection.appendChild(passwordLabel);
  userSection.appendChild(passwordInput);
  userSection.appendChild(loginButton);
  userSection.appendChild(registerButton);

  return userSection;
  // document.body.appendChild(userSection);
};


// export const User = () => {
//   const divApp = document.querySelector("#app");

//   divApp.innerHTML = `<h1>Usuario</h1>`;
  
// }