// Function hoisting - irá levar as definições para o topo do javascript
function falaOi() {
    console.log('Oi')
}
falaOi()

// First-class objects - pode tratar as funções como dados
// Function express
const dado = function(){
    console.log('Dado')
}
dado()

// Uma função executando outra função no parâmetro
function executaFuncao (funcao) {
    funcao()
}
executaFuncao(dado)

// Arrow function - como se fosse uma function express mais curta
const funcaoArrow = () => {
    console.log('Arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar() {
        console.log('estoy a falar...')
    }
}
obj.falar()