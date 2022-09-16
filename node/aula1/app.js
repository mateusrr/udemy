//importando todo o conteúdo
/*const mod = require('./mod')

//importando apenas uma parte
const falaNome = mod.falaNome
console.log(mod.falaNome())
*/

//padrão do node
const path = require('path')
const axios = require('axios')


const { People } = require('./mod')
const p1 = new People('mateus')
console.log(p1)