const somar = require('./atoms/somar')
const subtrair = require('./atoms/subtrair')
const multiplicar = require('./multiplicar')

const transformaDecimal = (x) => parseFloat(
  Number(x+'e-'+x
                .toString()
                .split('.')[0]
                .length
  )
)

// Solução da FRAN
// const transformaDecimal = (x) => {
//   if (x === 1) return 0.1
//   let tam = x.toString().split('.')[0].length - 1
//   let zeros = Array(tam).fill(0).join(''); 
//   let decimal = "0."+zeros+"1"
//   return parseFloat(decimal)
// }

const dividir = (x, y, decimal=0) => {
  let menor = false
  let passos = decimal 
  let resto = x
  if (!y) 
    return Infinity
  switch (true) {
    case (y === 1): return x]
      break
    case (y === x): return 1
      break
    case (y > x): 
      menor = true
      resto = multiplicar(x,10)
    default:
      while(resto > 1) {
        resto = subtrair(resto, y)
        passos = somar(passos, 1)
        if (resto < y && resto) 
          return dividir(multiplicar(resto,10), y, multiplicar(passos,10))
        if (!resto) { // === 0
          if (decimal || menor) return transformaDecimal(passos)
          return passos
        }
      }
  }
}

console.log('4/0:', dividir(4, 0))
console.log('4/2:', dividir(4, 2))
console.log('16/2:', dividir(16, 2))
console.log('1/2:', dividir(1, 2))
console.log('1/4:', dividir(1, 4))
console.log('1/8:', dividir(1, 8))

