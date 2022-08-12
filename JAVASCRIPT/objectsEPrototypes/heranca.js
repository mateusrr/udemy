function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

// call - método 
function Camisa(nome, preco, cor, tamanho) {
    Produto.call(this, nome, preco)
    this.tamanho = tamanho
    this.cor = cor
}

// prototype da camisa será igual ao do produto. 
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

Camisa.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Bermuda(nome, preco, cor, tamanho, estoque) {
    Produto.call(this, nome, preco)
    this.cor = cor
    this.tamanho = tamanho

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () { 
            return estoque
        },
        set: function (valor) {
            if(typeof valor !== 'number') return
            return estoque = valor
        }
    })
}

// linkando os prototype
Bermuda.prototype = Object.create(Produto.prototype)
Bermuda.prototype.constructor = Bermuda


const camisa = new Camisa('Social', 60, 'Blue', 'P')
const bermuda = new Bermuda('Sarja', 70, 'Marron', 'G', 40)

console.log(camisa)
console.log(bermuda)