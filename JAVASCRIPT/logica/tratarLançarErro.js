function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números')
    }

    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
}   catch (error) {
    //console.log(error)
    console.log('O que foi digitado não corrresponde a números, digita novamente.')
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new Error('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pr-BR', 
    {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
const data = new Date('01-01-1970 12:56:11')
const hora = retornaHora()
console.log(hora)
} catch (e) {
    //trate o erro
} finally {
    console.log('good morning')
}