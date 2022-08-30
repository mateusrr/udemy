class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario') //selecionando o formulário pela classe.
        this.eventos()
    }

    //método
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    //método
    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        //verificação para saber se as validações estão corretas antes de enviar o formulário.
        if(camposValidos && senhasValidas) {
            alert('Formulário enviado')
            this.formulario.submit()
        }
    }

    //método para fazer com que a SENHA e REPETIR SENHA sejam iguais.
    senhasSaoValidas() {
        let valid = true
        const senha = this.formulario.querySelector('.senha')
        const repetirsenha = this.formulario.querySelector('.repetirsenha')

        if(senha.value !== repetirsenha.value) {
            valid = false
            this.criaErro(senha, 'Campo senha e repetir senha precisam ser iguais.')
            this.criaErro(repetirsenha, 'Campo senha e repetir senha precisam ser iguais.')
        }
        return valid
    }

    camposSaoValidos() {
        let valid = true

        //FOR para fazer com que os erros não sejam exibidos várias vezes ao tentar enviar o formulário.
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        //validação dos campos
        for(let campo of this.formulario.querySelectorAll('.validar')) {
            //seleção do label para que campo exiba sua própria msg de erro.
            const label = campo.previousElementSibling.innerText

            //se o campo estiver vazio, retornará msg de erro.
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar vazio.`)
                valid = false
            }

            //verificação para saber se o CPF é válido.
            if(campo.classList.contains('cpf')) {
                if(this.validaCPF(campo)) valid = false
            }

            //verificação para saber se o USUARIO está de acordo com a regra.
            if(campo.classList.contains('usuario')) {
                if(this.validaUsuario(campo)) valid = false
            }
        }
    }

    //método para validar o USUARIO com uma regra própria.
    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true
        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'usuario precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário precisa conter apenas letras e números.')
            valid = false
        }

        return valid
    }

    //método validação do CPF.
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)
        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido')
            return false
        }
        return true
    }

    //método para apresentar msg de erro para os campos.
    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div) //msg aparecerá após o campo.
        
    }
}

const valida = new ValidaFormulario()