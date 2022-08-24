/*

0  3  1  6  1  5  3  8  1
10 9  8  7  6  5  4  3  2
0  27 8  42 6  25 12 24 2 = 146

11 - (146 % 11) = 8

0  3  1  6  1  5  3  8  1  8
11 10 9  8  7  6  5  4  3  2
0  30 9  48 7  30 15 32 3  16 = 190

11 - (190 % 11) = 8

*/

//função construtora
//para tirar todo ponto e traço do cpf, transformando em uma string
//cpf limpo
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); //expressão regular que substitui tudo o que não for número
        }
    })
}

//prototype
// valida para retornar true ou false para o cpf enviado.
ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false //se o cpf limpo não for válido, retornar false
    if(this.cpfLimpo.length !== 11) return false //tamanho diferente de 11, retornar false
    if(this.isSequencia()) return false

    //cpfParcial aqui é uma variável
    //os 9 primeiros dígitos
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    //Comparando com o cpf enviado.
    const novoCpf = cpfParcial + digito1 + digito2
    
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) { //cpfParcial aqui é um parâmetro
    //a partir da variável declarada na função anterior
    //através do Array tem o acesso nos 9 dígitos
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val)) //Garantindo que (val) seja Number.
        regressivo--
        return ac
    }, 0) //garantir que o regressivo comece do zero (0).

    //Cálculo para validação do 10º dígito.
    const digito = 11 - (total % 11)

    //Return se dígito for > que 9, será 0.
    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}
const cpf = new ValidaCPF('031.615.381-88')
if (cpf.valida()) {
    console.log('cpf válido')
} else 
    console.log('inválido')