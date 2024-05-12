import './User.css'

export const user = () => {
  const userSection = document.createElement('section')
  userSection.id = 'user'
  userSection.classList.add('hide')

  const emailWrapper = document.createElement('div')
  emailWrapper.classList.add('emailWrapper')
  const passwordWrapper = document.createElement('div')
  passwordWrapper.classList.add('passwordWrapper')
  const buttonsWrapper = document.createElement('div')
  buttonsWrapper.classList.add('buttonsWrapper')

  const emailLabel = document.createElement('label')
  const emailInput = document.createElement('input')
  emailWrapper.appendChild(emailLabel)
  emailWrapper.appendChild(emailInput)

  const passwordLabel = document.createElement('label')
  const passwordInput = document.createElement('input')
  passwordWrapper.appendChild(passwordLabel)
  passwordWrapper.appendChild(passwordInput)

  const loginButton = document.createElement('button')
  const registerButton = document.createElement('button')
  buttonsWrapper.appendChild(loginButton)
  buttonsWrapper.appendChild(registerButton)

  emailLabel.textContent = 'Correo electrónico:'
  emailInput.type = 'email'
  passwordLabel.textContent = 'Contraseña:'
  passwordInput.type = 'password'
  loginButton.textContent = 'Iniciar sesión'
  registerButton.textContent = 'Registrarse'

  userSection.appendChild(emailWrapper)
  userSection.appendChild(passwordWrapper)
  userSection.appendChild(buttonsWrapper)

  const header = document.getElementById('header')
  header.appendChild(userSection)
}
export const User = () => {
  return user()
}

// export const User = () => {
//   const divApp = document.querySelector("#app");

//   divApp.innerHTML = `<h1>Usuario</h1>`;

// }
