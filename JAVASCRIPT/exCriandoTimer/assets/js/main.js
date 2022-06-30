//
function relogio() {
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio ')

//variável que mantenha os segundos
let segundos = 0

let timer

//função para retornar segundos
function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}
//tudo é igual para todos os elementos.

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pause')
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pause')
        clearInterval(timer)
        iniciaRelogio()
        }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('pause')
        clearInterval(timer)
        }
})
}
relogio()
