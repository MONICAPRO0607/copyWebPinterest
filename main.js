import { Header } from './src/components/Header/Header'
import { PinterCard } from './src/components/card/card'
import { Filters } from './src/components/filters/filters'
import { Footer } from './src/components/Footer/Footer'
import { User } from './src/components/pages/User/User'
import { About } from './src/components/pages/About/About'
import { Contact } from './src/components/pages/Contact/Contact'
Header()
User()
About()
Contact()

document.addEventListener('DOMContentLoaded', photos)

const filtersGallery = document.getElementById('filters')
filtersGallery.innerHTML = Filters(false)

const searchApi =
  'https://api.unsplash.com/search/photos/?client_id=8-wfDOXOj_ZGvcxzqlkvG_bzwHCurt9SwtHVHfWKZ1Y'

let searchParam = ''
const inputFilter = document.getElementById('inputFilter')

const buttonFilter = document.getElementById('myButton')

buttonFilter.addEventListener('click', () => {
  searchParam = inputFilter.value
  console.log(searchParam)

  search(searchParam)
})

const buttonsFilter = document.querySelectorAll('.buttonCall')

buttonsFilter.forEach((button) => {
  button.addEventListener('click', () => {
    const searchTerm = button.getAttribute('value')
    inputFilter.value = searchTerm
    search(searchTerm)
  })
})

const api =
  'https://api.unsplash.com/photos/?client_id=8-wfDOXOj_ZGvcxzqlkvG_bzwHCurt9SwtHVHfWKZ1Y'

function photos() {
  fetch(`${api}`)
    .then((response) => response.json())
    .then((response) => {
      const ulGallery = document.querySelector('.galleryList')
      response.forEach((element) => {
        ulGallery.innerHTML += PinterCard(element.width, element.urls.regular)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
const apiRandom =
  'https://api.unsplash.com/photos/random/?client_id=8-wfDOXOj_ZGvcxzqlkvG_bzwHCurt9SwtHVHfWKZ1Y&count=30'

function random() {
  fetch(`${apiRandom}`)
    .then((response) => response.json())
    .then((response) => {
      const ulGallery = document.querySelector('.galleryList')
      ulGallery.innerHTML = ''
      response.forEach((element) => {
        ulGallery.innerHTML += PinterCard(element.width, element.urls.regular)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

function search(searchParamValue) {
  fetch(`${searchApi}&query=${searchParamValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const ulGallery = document.querySelector('.galleryList')
      if (data.results.length > 1) {
        ulGallery.innerHTML = ''
        data.results.forEach((element) => {
          ulGallery.innerHTML += PinterCard(element.width, element.urls.full)
          console.log(element)
        })
        filtersGallery.querySelector('.request').classList.add('hidden')
      } else {
        filtersGallery.querySelector('.request').classList.remove('hidden')
        ulGallery.innerHTML =
          "<p class='emptyGallery'>No se han encontrado resultados</p>"
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

const clickFilters = document.getElementById('clearFilters')

clickFilters.addEventListener('click', () => {
  inputFilter.value = ''
  random()
})

Footer()
