//Só pode ter um método CONSTRUCTOR na Classe
//se houver mais de um, apresentará um erro.
/*
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.CalcuraArea()
    }

    CalcuraArea() {
        return this.altura * this.largura
    }
}

const quadrado = new Retangulo(10, 20)
console.log(quadrado.area)
*/

//usando extends
/*
class Animal {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(this.nome + 'emite.')
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(this.nome + ' come a ração.')
    }
}

let cachorro = new Cachorro('Tantan')
//cachorro.falar()
*/

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log('Ligado.')
            return
        }

        this.ligado = true
    }
    desligar() {
        if(!this.ligado) {
            console.log('Desligado.')
            return
        }

        this.ligado = false
    }
}

class Som extends DispositivoEletronico {
    constructor(nome, tipo) {
        super(nome)
        this.tipo = tipo
    }
}

const s1 = new Som('Estéreo',  'Carro')
console.log(s1)