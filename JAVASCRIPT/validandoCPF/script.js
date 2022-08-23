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

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const novoCPF = cpfParcial + digito1 + digito2
    
    return novoCPF === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencia = function() {
    const return this.cpfLimpo[0].repeat()
}
const cpf = new ValidaCPF('031.615.381-88')
console.log(cpf.valida())