// Função que recebe dois números e retorna o maior deles

const max = (x, y) => x > y ? x : y;
console.log(max(10, 20))

//argumentos de largura e altura e retorna true se estiver em paisagem
const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1220,1380))

/*função que recebe um número
se divisível por 3 = 'fizz'
se divisível por 5 = 'buzz'
se divisível por 3 e 5 = 'fizzbuzz'
se não for divisível retorna o próprio número
*/

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'FizzBuzz'
    return numero
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}