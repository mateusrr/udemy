const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        //utilizar verbo http, chamado também de método... "GET"
        //padrão do navegador
        //async (true) or sync
        xhr.open(obj.method, obj.url, true)
        xhr.send() //se fosse feito com POST teria que mandar os dados.

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
            //callback de sucesso
            resolve(xhr.responseText)
            } else {
                rejected(xhr.statusText)
            }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
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