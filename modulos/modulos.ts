// import { areaRetangulo } from './retangulo'
// import { areaCircunferencia } from './circunferencia'
import retangulo from './retangulo'
import { areaCircunferencia as cisc } from './circunferencia'

console.log('Módulo carregado...')
console.log(retangulo(7, 8))
console.log(cisc(2))

const { digaOi } = require('./novo')
console.log(digaOi('Ana'))