function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false // argumento para que a hora seja contada em 24h.
    })
}

// é criado uma função anônima para a exibição da hora em tempo real.
const timer = setInterval(function() {
    console.log(mostraHora())
}, 1000)

setTimeout(function() {
    clearInterval(timer)
}, 4000)

setTimeout(function() {
    console.log('Good morning!')
}, 7000)