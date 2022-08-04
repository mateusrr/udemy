// Argumentos que sustenta todos os argumentos enviados
// Não funciona em arrow function
function umaFuncao() {
    let total = 0
    for (let argumentos of arguments) {
        total += argumentos
    }

    console.log(total)
}
umaFuncao(5,5,5,5)