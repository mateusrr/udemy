const nome = 'mateus'
const sobrenome = 'rocha'

const falaNome = () => nome + ' ' + sobrenome

//exportando uma determinada variável usando o Exports visto em Module.
//module.exports.nome = {nome, sobrenome, falaNome}
//console.log(module.exports)

//atalho - 
exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
