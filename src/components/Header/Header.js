import './Header.css'

const arrayEnlaces = [
  {
    url: '#user',
    texto: 'Acceder',
    page: 'user'
  },
  {
    url: '#about',
    texto: 'Sobre nosotros',
    page: 'about'
  },
  {
    url: '#contact',
    texto: 'Contacto',
    page: 'contact'
  }
]

export const header = () => {
  const headerHTML = document.createElement('header')
  headerHTML.id = 'header'
  const headerContainer = document.createElement('div')
  const logoLink = document.createElement('a')
  const logo = document.createElement('img')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  headerContainer.appendChild(logoLink)
  headerContainer.appendChild(nav)
  let currentSection = null

  logo.src = '/assets/logo.png'
  logo.id = 'logoHome'

  logoLink.href = 'index.html'
  logoLink.appendChild(logo)

  arrayEnlaces.forEach((enlace) => {
    const li = document.createElement('li')
    const a = document.createElement('span')
    a.classList.add('itemLink')

    a.href = enlace.url
    a.textContent = enlace.texto

    a.addEventListener('click', (event) => {
      event.preventDefault()

      // Ocultar todos los componentes abiertos
      arrayEnlaces.forEach((enlace) => {
        const pageComponent = document.getElementById(enlace.page)
        if (pageComponent && !pageComponent.classList.contains('hide')) {
          pageComponent.classList.add('hide')
        }
      })

      // Obtener el componente de la página correspondiente del objeto enlace
      const pageComponent = document.getElementById(enlace.page)

      // Si el componente existe, mostrarlo
      if (pageComponent) {
        pageComponent.classList.remove('hide')
      }
    })

    li.appendChild(a)
    ul.appendChild(li)
  })

  headerHTML.appendChild(headerContainer)
  nav.appendChild(ul)
  document.body.insertBefore(headerHTML, document.body.firstChild)
}

export const Header = () => {
  return header()
}
