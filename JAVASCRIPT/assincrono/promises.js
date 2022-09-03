function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg, tempo) {
    //promises
    //chamando o construtor da promises
    //receberá uma função (arrow)
    //parametros resolve e reject
    //resolve - esse código exceutou com sucesso 
    //reject - deu erro no código para ser rejeitado.
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('ERROR')
            return
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - passei na promise') //só de fazer isso já está resolvendo logo após execução
            return
        }, tempo)
    })
}

//resolve / then será executado quando resolver a promises
//reject / catch captura o erro
// then / catch - podem receber funções
//pode retornar uma promises dentro de outra.
/*
espera('Conectando...', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return espera('Checando as informações...', rand(1, 4))
    })
    .then(resposta => {
        console.log(resposta)
        return espera('Aguarde um momento...', rand(1, 5))
    })
    .then(resposta => {
        console.log(resposta)
        return espera(1, rand(1, 2))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch(e => {
        console.log('Ops:', e)
    })*/

//métodos úteis
// 1 promise.all - 2 promise.race - 3 promise.resolve - 4 promise.reject

//promise.all - retorna uma promise que é resolvida quando todas as promises no
//argumento lista forem resolvidas ou rejeitada assim que uma das promises da lista for
//rejeitada.
/* const promises = [
    'primeiro valor',
    espera('promise 1', 3000),
    espera('promise 2', 400),
    espera('promise 3', 1000),
    //espera(100, 1000), // vai apresentar error por não ser string.
    'outro valor'
]
Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(error) {
        console.log(error)
    })
*/

//promise.race
//retorna a primeira que resolver.
// 'primeiro valor' não é uma promessa, e sempre será entregue como primeiro.
// precisa ser alterado, para que fique só as promessas.

const promises = [
    //'primeiro valor',
    //RAND irá deixar como aleatório.
    espera('promise 1', rand(1, 5)),
    espera('promise 2', rand(1, 5)),
    espera('promise 3', rand(1, 5)),
    //espera(100, 1000), //vai apresentar error por não ser string.
    //'outro valor'
]

Promise.race(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(error) {
        console.log(error)
    })

function baixaPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve('Em cache.')
    } else {
        return espera('Baixei', 2000)
    }
}

baixaPagina() 
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))