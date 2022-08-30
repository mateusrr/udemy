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

//validando cpf com classes
//para tirar todo ponto e traço do cpf, transformando em uma string
//cpf limpo
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') //expressão regular para remover o que não número.
        })
    }

    //checagem para saber se o cpf tem 11 dígitos
    sequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    //
    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    //não foi usado THIS e consequentemente não precisa da instância 
    //pode ser tornar estático, mas reportará quando for colocado
    //solução: no método geraNovoCpf usa o nome da classe em vez de THIS.
    static geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica)
            reverso--
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : 0
    }

    valida() {
        if(!this.cpfLimpo) return false //se não existir cpfLimpo retornar falso
        if(typeof this.cpfLimpo !== 'string') return false 
        if(this.cpfLimpo.length !== 11) return false //se for diferente de 11 é inválido
        if(this.sequencia()) return false
        this.geraNovoCpf()

        return this.novoCPF === this.cpfLimpo
    }
}

/*
const validacpf = new ValidaCPF('070.987.720-03')

if(validacpf.valida()) {
    console.log('CPF Válido')
} else {
    console.log('CPF inválido.')
}*/