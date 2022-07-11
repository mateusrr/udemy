function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        this.capturaCliques()
        this.enter()
    }

    this.enter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return
                this.contaFinal()
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target // referencia ao botão que está sendo pressionado
            if (el.classList.contains('btn-num')) this.addNumDisplay(el)
            if (el.classList.contains('btn-clear')) this.clear()
            if (el.classList.contains('btn-del')) this.del()
            if (el.classList.contains('btn-eq')) this.contaFinal()
        })
    }

    this.addNumDisplay = el => this.display.value += el.innerText
    this.clear = () => this.display.value = ''
    this.del = () => this.display.value = this.display.slice(0, -1)

    this.contaFinal = () => {
        try {
            const conta = eval(this.display.value)

            if(!conta) {
                alert('Error')
                return
            }

            this.display.value = conta

        } catch (e) {
            alert('Error')
            return
        }
    }
}

const calculadora = new Calculadora()
calculadora.inicia()