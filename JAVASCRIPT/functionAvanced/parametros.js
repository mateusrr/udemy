// Argumentos que sustenta todos os argumentos enviados
function umaFuncao() {
    let total = 0
    for (let argumentos of arguments) {
        total += argumentos
    }

    console.log(total)
}
umaFuncao(5,5,5,5)