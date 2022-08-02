/*const numeros1 = [1, 2, 3]
const numeros2 = [4, 5, 6]

const conjunto = numeros1.concat(numeros2)
console.log(conjunto)*/

// FILTER
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltradose)
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
const pessoasComMaisDeTrinta = pessoas.filter(obj => obj.idade >= 30)
const nomeTerminaA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a')
})

console.log('1º ',pessoasNomeGrande)
console.log('2º ',pessoasComMaisDeTrinta)
console.log('3º ',nomeTerminaA)
*/

// MAP
// Sempre vai ter o mesmo tamanho do Array original.

const pessoas = [
    {nome: 'Maria', idade: 20},
    {nome: 'Maraje', idade: 21},
    {nome: 'Antonio', idade: 27},
    {nome: 'Silva', idade: 40},
    {nome: 'Paula', idade: 35},
]

const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map(obj => ({idade: obj.idade}))

const comIds = pessoas.map(function(obj, indice) {
    const newObj = { ...obj }
    newObj.id = indice
    return newObj
})
console.log(comIds)


// REDUCE
