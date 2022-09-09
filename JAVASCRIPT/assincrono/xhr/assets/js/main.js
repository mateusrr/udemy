const request = obj => {
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
}

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
    const href = el.getAttribute('href')
    
    const objConfig = {
        method: 'GET',
        url: href,
    }
    try{
    const response = await request(objConfig)
    carregaResultado(response)
    } catch(e) {
        console.log(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}