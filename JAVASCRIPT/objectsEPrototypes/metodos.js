// ASSIGN
// Copiar objeto
// Podendo acrescentar mais dados no objeto de destino
/*const produto = {nome: 'teclado', preco: 150}
const produto2 = Object.assign({}, produto)

produto2.nome = 'mouse'
produto2.preco = 200

console.log(produto)
console.log(produto2)
*/

// getOwnPropertyDescriptor

const produto = {nome: 'teclado', preco: 150}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
})

// lista as propriedades do Define Properties
//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

produto.nome = 'monitor'
produto.preco = 200
console.log(produto)

// VALUES   
console.log(Object.values(produto))

for( let valor of Object.entries(produto)) {
    console.log(produto)
}