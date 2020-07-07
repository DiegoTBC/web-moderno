const contadorA = require('./5-instanciaUnica')
const contadorB = require('./5-instanciaUnica')

const contadorC = require('./5-instanciaNova')()
const contadorD = require('./5-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
