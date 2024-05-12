import './Contact.css'

export const contact = () => {
  const contactSection = document.createElement('section')
  contactSection.id = 'contact'
  contactSection.classList.add('hide')

  const form = document.createElement('form')
  const nameLabel = document.createElement('label')
  const nameInput = document.createElement('input')
  const emailLabel = document.createElement('label')
  const emailInput = document.createElement('input')
  const messageLabel = document.createElement('label')
  const messageTextarea = document.createElement('textarea')
  const submitButton = document.createElement('button')

  nameLabel.textContent = 'Nombre:'
  nameInput.type = 'text'
  emailLabel.textContent = 'Correo electrónico:'
  emailInput.type = 'email'
  messageLabel.textContent = 'Mensaje:'
  submitButton.textContent = 'Enviar'

  form.appendChild(nameLabel)
  form.appendChild(nameInput)
  form.appendChild(emailLabel)
  form.appendChild(emailInput)
  form.appendChild(messageLabel)
  form.appendChild(messageTextarea)
  form.appendChild(submitButton)
  contactSection.appendChild(form)

  const header = document.getElementById('header')
  header.appendChild(contactSection)
}
export const Contact = () => {
  return contact()
}
