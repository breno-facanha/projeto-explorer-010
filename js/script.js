import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notAnumber} from './util.js'
// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    const showAlertError = notAnumber(height) || notAnumber(weight)

    if(showAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    Modal.message.innerText = message
    Modal.open()
}

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
