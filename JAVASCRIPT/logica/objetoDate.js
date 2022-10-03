// Date - função construtora
// precisa utilizar a palavra NEW
// primeira letra inicia maiúscula

/*
const date = new Date(1996, 5, 2, 9, 16, 32) //ano, mes, dia, hora, minuto, segundo, ms
console.log(date.toString())
*/

/*
const data = new Date('2020-03-01 05:40:55:10')
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() +1) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia da semana', data.getDay()) // 0 - Domingo, 6 - Sábado
console.log(data.toString())
*/

function zero(num) {
    return num >= 10 ? num : `0${num}`
}

function formatDate(data) {
    const dia = zero(data.getDate())
    const mês = zero(data.getMonth())
    const ano = zero(data.getFullYear())
    const horas = zero(data.getHours())
    const min = zero(data.getMinutes())
    const seg = zero(data.getSeconds())
    const day = zero(data.getDay())

    return `${dia} ${mês} ${ano} ${horas}:${min}:${seg} - ${day}`
}

const data = new Date()
const dataBrasil = formatDate(data)
console.log(dataBrasil)