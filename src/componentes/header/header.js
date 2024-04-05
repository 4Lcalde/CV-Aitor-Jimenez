import { encabezado, iconos, indice } from '../plantillas/plantillas.js'
import './header.css'

export const headerContainer = () => {
  const header = document.createElement('header')
  header.className = 'header'

  const logo = document.createElement('img')
  logo.className = 'logo'
  logo.src = './assets/AJF.png'
  logo.alt = 'logo'

  logo.addEventListener('click', () => {
    window.location.href = '#'
  })
  const nav = document.createElement('nav')
  nav.className = 'header-nav'
  const navUl = document.createElement('ul')
  navUl.className = 'nav-ul'

  const toggle = document.createElement('img')

  toggle.src = './assets/menu.png'
  toggle.id = 'toggle'

  const divIconos = document.createElement('div')
  divIconos.className = 'div-iconos'
  const UlIconos = document.createElement('ul')
  UlIconos.className = 'ul-iconos'

  divIconos.append(UlIconos)

  iconos.forEach((icono) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    li.append(a)
    a.innerHTML = icono
    UlIconos.append(li)
  })

  header.append(logo, nav, toggle, divIconos)

  nav.appendChild(navUl)
  let direccion = 0

  for (const enlace of encabezado) {
    const li = document.createElement('li')
    li.className = 'nav-li'
    const a = document.createElement('a')
    a.textContent = enlace
    a.href = `#${indice[direccion]}`
    direccion++

    li.appendChild(a)
    navUl.append(li)
  }

  document.body.append(header)

  const p = document.querySelector('#toggle')
  const navtoggle = document.querySelector('.nav-ul')
  const iconostoggle = document.querySelector('.div-iconos')

  p.addEventListener('click', () => {
    navtoggle.classList.toggle('cerrado')
    iconostoggle.classList.toggle('cerrado-iconos')
  })
  navtoggle.addEventListener('click', () => {
    navtoggle.classList.toggle('cerrado')
    iconostoggle.classList.toggle('cerrado-iconos')
  })
}

document.addEventListener('DOMContentLoaded', function () {
  let ubicacion = window.scrollY
  let headerElement = document.querySelector('header')
  let navUl = document.querySelector('.nav-ul')
  let divIconos = document.querySelector('.div-iconos')

  window.addEventListener('scroll', () => {
    let ubicacionActual = window.scrollY

    if (ubicacion > ubicacionActual) {
      headerElement.classList.remove('oculto')
    } else {
      headerElement.classList.add('oculto')
      navUl.classList.remove('cerrado')
      divIconos.classList.remove('cerrado-iconos')
    }

    ubicacion = ubicacionActual
  })
})
