import { contacto } from '../plantillas/plantillas'
import './footer.css'

const footer = document.createElement('footer')
footer.id = 'contacto'

export const footerCreator = () => {
  const divContact = document.createElement('div')
  divContact.className = 'div-contact'

  let divContactContainer = document.createElement('div')
  divContactContainer.className = 'div-contact-container'
  const h2 = document.createElement('h2')
  h2.innerHTML = '¡No lo dudes!'
  h2.className = 'titulo-footer'
  const h3 = document.createElement('h3')
  divContact.appendChild(h3)
  h3.innerHTML = 'Ponte en <span>contacto</span>'

  let formaContacto = []
  let datoContacto = []
  let linkContacto = []
  for (const tipoContacto of contacto) {
    for (const tipo in tipoContacto) {
      if (tipoContacto.hasOwnProperty(tipo)) {
        formaContacto.push(tipoContacto[tipo].nombre)
        datoContacto.push(tipoContacto[tipo].contacto)
        linkContacto.push(tipoContacto[tipo].link)
      }
    }
  }

  for (let i = 0; i < formaContacto.length; i++) {
    let cartaContacto = `      <div class="contact-element">
    ${formaContacto[i]}
    <p><a href=${linkContacto[i]}>${datoContacto[i]}</a></p>
  </div>`
    divContactContainer.innerHTML += cartaContacto
  }

  const divDerechos = document.createElement('div')
  divDerechos.className = 'div-derechos'
  const pDerechos = document.createElement('p')
  pDerechos.innerHTML = 'Todos los derechos reservados - 2024'
  divDerechos.append(pDerechos)

  divContact.appendChild(divContactContainer)
  divContact.append(h2, h3, divContactContainer)
  footer.append(divContact, divDerechos)
  document.body.append(footer)
}
