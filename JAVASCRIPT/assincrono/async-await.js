function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random(0, 3) * (max - min) + min)
}

function espera(msg, tempo) {
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


//async e await
//permitir promises dentro da função de forma mais limpa
async function executa() {
    //try - catch para trazer o erro se houver e parar a execução.
    try {
        const fase1 = await espera('fase 1', rand())
            console.log(fase1)
        const fase2 = await espera('fase 2', rand())
            console.log(fase2)
        const fase3 = await espera('fase 3', rand())
            console.log(fase3)
        console.log('terminamos na', fase3)
    } catch(e) {
        console.log(e)
    }
}
executa()