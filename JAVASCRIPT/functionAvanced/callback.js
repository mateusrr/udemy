//Função de callback é quando é chamado um comando após terminar outro.

function rand(min = 1000, max = 3000) { //rand gerador de números aleatórios
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}
console.log(rand())

function f1(callback) {
    setTimeout(function () {
        console.log('um')
        if (callback) callback()
    }, rand())
}

function f2(callback) {
    setTimeout(function () { //setTimeout simulando o que demoraria na internet
        console.log('dois')
        if (callback) callback()
    }, rand())
}

function f3(callback) {
    setTimeout(function () {
        console.log('tres')
        if (callback) callback()
    }, rand())
}

//1º forma
/*f1(function() {
    f2(function() {
        f3(function() {
            console.log('ola')
        })
    })
})*/

//2º forma
f1(f1Callback)

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Olá!')
}