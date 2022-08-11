/* JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para
outro.

Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo
de modelo ou molde para futuras produções.

Todoso os objetos tem uma referência interna para um protótipo (__proto__).
*/

/*
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.eu = 'bão demais'

const pessoa = new Pessoa('mateus', 'rocha')
console.dir(pessoa)
*/

// MANIPULANDO PROTOTYPES

/*
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

// Acessando o objA pelo objB

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA)


const objC = new Object()
objC.chaveC = 'C'

// Aqui é feito um encadeamento do qual o objC passa pelo objB que passa pelo objA
// objA ligando ao prototype
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveA)
*/

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
p1.aumento(10)
const p2 = {
    nome: 'Calça',
    preco: 100
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
console.log(p1)
console.log(p2)

// Já cria o objeto e seta o prototype
// Produto.prototype acaba se tornando o 'pai' do objeto p3 nessa execução.
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 10
    }
})
p3.aumento(10)
console.log(p3)