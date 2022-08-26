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
    constructor(fabricante) {
        this.fabricante = fabricante
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

class Notebook extends DispositivoEletronico {
    constructor(fabricante, modelo) {
        super(fabricante)
        this.modelo = modelo
    }
}

class ControleRemoto extends DispositivoEletronico {
    constructor(fabricante, Wifi, USB) {
        super(fabricante)
        this.Wifi = Wifi
        this.USB = USB
    }

    ligar() {
        if(this.Wifi === true) {
            console.log('Controle remoto conectado via Wifi.')
        } else {
            console.log('Controle remoto conectado via USB.')
        }
    }
}

const s1 = new Notebook('Samsung',  'Expert X40')
console.log(s1)

const cr = new ControleRemoto('Xbox', false, true)
console.log(cr)
