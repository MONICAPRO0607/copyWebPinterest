import { PinterCard } from './components/card/card'

import { Filters } from './components/filters/filters'

const filtersGallery = document.getElementById('filters')
filtersGallery.innerHTML = Filters(false)

const searchApi =
  'https://api.unsplash.com/search/photos/?client_id=8-wfDOXOj_ZGvcxzqlkvG_bzwHCurt9SwtHVHfWKZ1Y'

let searchParam = ''
const inputFilter = document.getElementById('inputFilter')
inputFilter.addEventListener('input', () => {
  searchParam = inputFilter.value
  console.log(searchParam)

  if (searchParam.length > 3) {
    search(searchParam)
  }
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

fetch(`${api}`)
  .then((response) => response.json())
  .then((response) => {
    const ulGallery = document.querySelector('.galleryList')
    // console.log(response)
    response.forEach((element) => {
      ulGallery.innerHTML += PinterCard(element.width, element.urls.full)
      // console.log(element)
    })
  })
  .catch((error) => {
    console.log(error)
  })

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
        ulGallery.innerHTML = "<p class='emptyGallery'>No se han encontrado resultados</p>";
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
