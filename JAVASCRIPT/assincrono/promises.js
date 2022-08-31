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
        if(typeof msg !== 'string') reject('ERROR')
        setTimeout(() => {
            resolve(msg) //só de fazer isso já está resolvendo logo após execução
        }, tempo)
    })
}

//resolve / then será executado quando resolver a promises
//reject / catch captura o erro
// then / catch - podem receber funções
//pode retornar uma promises dentro de outra.
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
    })