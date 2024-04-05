import {
  aitor,
  experiencias,
  fotoPerfil,
  habilidades,
  sobreMi,
  formacion,
  plantillaPortfolio
} from '../plantillas/plantillas'
import './main.css'
const main = document.createElement('main')

export const createHero = () => {
  const heroSection = document.createElement('section')
  heroSection.className = 'hero'
  heroSection.id = 'inicio'

  const imgHerodiv = document.createElement('div')
  imgHerodiv.className = 'hero-div'
  const imgHerofoto = document.createElement('img')
  imgHerofoto.className = 'hero-img'
  imgHerofoto.src = fotoPerfil
  imgHerodiv.appendChild(imgHerofoto)

  const textDiv = document.createElement('div')
  textDiv.className = 'hero-text-div'

  const h1 = document.createElement('h1')
  h1.textContent = aitor.nombre
  const h3 = document.createElement('h3')
  h3.textContent = aitor.descripcion
  h3.className = 'subtitulo'

  textDiv.append(h1, h3, imgHerodiv)

  main.appendChild(heroSection)
  heroSection.append(textDiv)

  document.body.append(main)
}

export const about = () => {
  const section = document.createElement('section')
  section.className = 'sobre-mi'
  section.id = 'sobre-mi'
  const h2 = document.createElement('h2')
  h2.innerHTML = sobreMi.title

  const h3 = document.createElement('h3')
  h3.className = 'Mi-nombre'
  h3.innerHTML = sobreMi.presentacion

  const p = document.createElement('p')

  p.innerHTML = sobreMi.texto
  section.append(h2, h3, p)
  main.append(section)
  document.body.append(main)
}

export const cards = () => {
  const section = document.createElement('section')
  section.className = 'habilidades'
  section.id = 'habilidades'
  const divContainer = document.createElement('div')
  divContainer.className = 'cards-container'
  main.append(section)

  const h2 = document.createElement('h2')
  h2.className = 'titulo-seccion'
  h2.innerHTML = 'Habilidades'
  section.append(h2)
  section.append(h2, divContainer)

  for (const habilidad of habilidades) {
    let carta = `
      <div class="carta">
        <div class="carta-title">
          <h3 class="title">${habilidad.lenguaje}</h3>
          <p>${habilidad.habilidad}%</p>
        </div>
        <div class="barra-progreso" style="--wth: ${habilidad.habilidad}%;"></div>
      </div>
    `
    divContainer.innerHTML += carta
  }

  // Función para verificar si un elemento está visible en la pantalla
  const estaEnPantalla = (elemento) => {
    var rect = elemento.getBoundingClientRect()
    var windowHeight =
      window.innerHeight || document.documentElement.clientHeight
    var windowWidth = window.innerWidth || document.documentElement.clientWidth

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth
    )
  }

  // Función para agregar la clase "progreso" cuando el elemento esté visible
  const agregarClaseSiVisible = () => {
    var barrasProgreso = document.querySelectorAll('.barra-progreso')

    barrasProgreso.forEach((barraProgreso) => {
      if (estaEnPantalla(barraProgreso)) {
        barraProgreso.classList.add('progreso')
      }
    })
  }

  // Llamar a la función cuando se cargue la página y cuando se haga scroll
  document.addEventListener('DOMContentLoaded', agregarClaseSiVisible)
  window.addEventListener('scroll', agregarClaseSiVisible)
}
export const portfolio = () => {
  const section = document.createElement('section')
  section.className = 'portfolio'
  section.id = 'portfolio'
  const h2 = document.createElement('h2')
  h2.className = 'titulo-seccion'
  h2.innerHTML = 'Mis proyectos'
  const divPortfolio = document.createElement('div')
  divPortfolio.className = 'div-portfolio'

  section.append(h2, divPortfolio)

  for (const proyecto of plantillaPortfolio) {
    const divProyecto = document.createElement('div')
    divProyecto.className = 'div-proyecto'
    const img = document.createElement('img')
    img.src = proyecto.img
    img.className = 'img-portfolio'

    const divInfo = document.createElement('div')
    divInfo.className = 'div-info'
    const titleInfo = document.createElement('h3')
    titleInfo.innerHTML = proyecto.nombre
    const pInfo = document.createElement('p')
    pInfo.innerHTML = proyecto.descripcion

    divProyecto.append(img, divInfo)
    divInfo.append(titleInfo, pInfo)
    divPortfolio.append(divProyecto)
  }

  main.append(section)
}

export const sectionCV = () => {
  const section = document.createElement('section')
  section.id = 'experiencia-laboral'
  section.className = 'experiencia'
  const h2 = document.createElement('h2')
  h2.innerHTML = 'Experiencia y formación'
  h2.className = 'titulo-seccion'
  const divAgrupado = document.createElement('div')
  divAgrupado.className = 'div-agrupado'

  const articleLaboral = document.createElement('article')
  articleLaboral.className = 'laboral-container'
  const divExperiencia = document.createElement('div')
  divExperiencia.className = 'formacion-container'
  const h3laboral = document.createElement('h3')
  h3laboral.innerHTML = 'Experiencia'

  for (const experiencia of experiencias) {
    let puesto = `

      <div class="experiencia">
        <h4 class="experiencia-titulo">${experiencia.puesto}</h3>
        <p class="experiencia-puesto">${experiencia.empresa}</p>
        <p class="experiencia-duracion">${experiencia.duración}</p>
      </div>`

    divExperiencia.innerHTML += puesto
  }

  articleLaboral.append(h3laboral, divExperiencia)

  const articleEstudios = document.createElement('article')
  articleEstudios.className = 'laboral-container'
  const formacionContainer = document.createElement('div')
  formacionContainer.className = 'formacion-container'
  const h3academico = document.createElement('h3')
  h3academico.innerHTML = 'Formación'

  for (const estudios of formacion) {
    let formacion = `

      <div class="formacion">
        <h4 class="formacion-estudio">${estudios.estudios}</h3>
        <p class="formacion-centro">${estudios.centro}</p>
        <p class="formacion-centro">${estudios.duración}</p>
      </div>`

    formacionContainer.innerHTML += formacion
  }

  articleEstudios.append(h3academico, formacionContainer)
  divAgrupado.append(articleLaboral, articleEstudios)
  section.append(h2, divAgrupado)
  main.append(section)
  document.body.appendChild(main)
}

document.addEventListener('DOMContentLoaded', function () {
  let ubicacion = window.scrollY
  let navUL = document.querySelector('.nav-ul')

  window.addEventListener('scroll', () => {
    let ubicacionActual = window.scrollY

    if (ubicacion > ubicacionActual) {
      navUL.classList.remove('oculto')
    } else {
      navUL.classList.add('oculto')
    }

    ubicacion = ubicacionActual
  })
})

const verificarVisibilidad = (entries) => {
  let entry = entries[0]
  if (entry.isIntersecting) {
    console.log('true')
  } else {
    console.log('false')
  }
}
