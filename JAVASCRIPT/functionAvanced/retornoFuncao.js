// return
// retorna um valor
// termina a função

//1
function soma(a, b) {
    return a + b
}
console.log(soma(2,5))

//2
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome}
}
const p1 = criaPessoa('mateus', 'rocha')
console.log(p1)

//3
// Retornando uma função dentro de outra função
function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)

console.log('Duplicação:', duplica(3))
console.log('Triplicação:', triplica(4))
console.log('Quadruplicação:', quadruplica(5))