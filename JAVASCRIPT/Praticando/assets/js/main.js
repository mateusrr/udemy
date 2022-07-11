function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes()
            this.backSpace()
            this.pressionaEnter()
        },

        backSpace() {
            this.display.addEventListener('keydown', e => {
            if(e.keyCode === 8) {
                e.preventDefault()
                this.clearDisplay()
            }
            })
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.contaFinal()
                }
            })
        },
        
        clearDisplay() {
            this.display.value = ''
        },

        apagar() {
            this.display.value = this.display.value.slice(0, -1)
        },

        contaFinal() {
            let conta = this.display.value
            try {
                conta = eval(conta)
                if(!conta) {
                    alert('Conta inválida')
                    return
                }
                this.display.value = String(conta)
            } catch (e) {
                alert('Conta inválida')
                return

            }
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')) {
                    this.apagar()
                }

                if(el.classList.contains('btn-eq')) {
                    this.contaFinal()
                }

                this.display.focus()
            })   
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()