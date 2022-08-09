/*const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]

// agrupar array
// 1º forma usando concat
const conjunto = numeros1.concat(numeros2, [7,8,9])
console.log(conjunto)

// 2º forma usando ...rest
// quando se pega o resto do array
const numeros3 = [...numeros1, ...numeros2]
console.log(numeros3)
*/

// FILTER
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados)
*/

/*
const pessoas = [
    {nome: 'Maria', idade: 20},
    {nome: 'Maraje', idade: 21},
    {nome: 'Antonio', idade: 27},
    {nome: 'Silva', idade: 40},
    {nome: 'Paula', idade: 35},
]

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 6)
const pessoasComMaisDeTrinta = pessoas.filter(obj => obj.idade < 30)
const nomeTerminaE = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('e')
})

console.log('1º ',pessoasNomeGrande)
console.log('2º ',pessoasComMaisDeTrinta)
console.log('3º ',nomeTerminaE)
*/

// MAP
// Sempre vai ter o mesmo tamanho do Array original.
/*
const pessoas = [
    {nome: 'Maria', idade: 20},
    {nome: 'Maraje', idade: 21},
    {nome: 'Antonio', idade: 27},
    {nome: 'Silva', idade: 40},
    {nome: 'Paula', idade: 35},
]

// retorno de apenas nomes
const nomes = pessoas.map(obj => obj.nome)

// retorno de apenas idades
const idades = pessoas.map(obj => ({idade: obj.idade}))

// retorno do array com os ids
const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }
    newObj.id = indice //(indice + 1) * 1000
    return newObj
})
console.log(comIds)
*/

// REDUCE
