/*const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        //utilizar verbo http, chamado também de método... "GET"
        //padrão do navegador
        //async (true) or sync
        xhr.open(obj.method, obj.url, true)
        xhr.send() //se fosse feito com POST teria que mandar os dados.

        //checar quando a requisição levou para ocorrer.
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText)
            } else {
                rejected(xhr.statusText)
            }
        })
    })
}*/

//capturando os clicks
//
document.addEventListener('click', e => {
    const el = e.target
    //garantindo que está pegando o nome de qualquer Tag e transformando para lower case.
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault() //quando clicar no link não irá carregar uma nova página.
        carregaPag(el)
    }
})

async function carregaPag(el) {
    try{
    const href = el.getAttribute('href')
    const response = await fetch(href)
    if(response.status !== 200) throw new Error('404')
    const html = await response.text()
    carregaResultado(html)
    } catch(e) {
        console.error(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}

//já retorna por padrão uma promise.
//é necessário converter esses dados para o que é preciso.
/*fetch('pag1.html')
.then(resposta => {
    //código da resposta
    //no then e lanço o erro, o código automaticamente vai para o catch.
    if(resposta.status !== 200) throw new Error('Error 404')
    return resposta.text()
})
.then(html => console.log(html))

//    console.warn - erro aparece em amarelo
//    console.error - erro aparece em vermelho

.catch( e => console.error(e))*/