// defineProperty (uma chave) -> Getters e Setters - defineProperties (várias chaves)
/*
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave.
        value: estoque, // valor da chave.
        writable: false, //controla se o valor pode ou não ser alterado.
        configurable: true // reconfigurável ou não.
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)

console.log(Object.keys(p1))

for(let chave in p1) {
    console.log(chave)
}
*/

// GETTERS E Setters
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePriv = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave.
        configurable: true, // reconfigurável ou não.
        get: function () { 
            return estoquePriv
        },
        set: function (valor) {
            /*if(typeof valor !== 'number') {
                console.log('bad')
                return
            }*/
            if(typeof valor !== 'number') {
                throw new TypeError('arruma isso ai meu')
            }
            estoquePriv = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 10
console.log(p1.estoque)