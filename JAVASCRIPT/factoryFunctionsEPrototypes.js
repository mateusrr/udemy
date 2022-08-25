    const falar = {
        falar() {
            console.log(`${nome} está falando.`)
        }
    }

    const comer = {
        comer() {
            console.log(`${nome} está comendo.`)
        }
    }

    const beber = {
        beber() {
            console.log(`${nome} está bebendo.`)
        }
    }
    const pessoaProto = {...falar, ...beber, ...comer}
    const pessoaProto2 = {...beber}

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaProto, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

function criaPessoa2(nome, sobrenome) {
    return Object.create(pessoaProto2, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Mateus', 'Rocha')
const p2 = criaPessoa2('Marcos','Silva')
console.log(p1)
console.log(p2)