/*
const pessoa1 = new Object()
pessoa1.idade = 26

pessoa1.getNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

//console.log(pessoa1.getNascimento())

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}
*/

// factory function AND constructor function
/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p = criaPessoa('mateus', 'rocha')
console.log(p.nomeCompleto())
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

// o NEW cria objeto vazio
//atrelando a palavra THIS ao objeto vazio
const p1 = new Pessoa('mateus', 'rocha')
console.log(p1)

//Object.freeze(p1) - trava um objeto de ser alterado.
//Object.freeze(this) - trava todos os objetos feitos na função.