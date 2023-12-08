function organizeGifts (gifts) {
  let response = ''
  let text = ''
  for (const gift of gifts) {
    if (isNaN(gift)) {
      let num = Number(text)
      let cajas = Math.floor((num % 50) / 10)
      let palets = Math.floor(num / 50)
      let bolsas = num % 10
      response +=
        `[${gift}]`.repeat(palets) +
        `{${gift}}`.repeat(cajas) +
        `(${gift.repeat(bolsas)})`.repeat(bolsas > 0)

      text = ''
    } else {
      text += gift
    }
  }
  return response
}

const result1 = organizeGifts(`76a11b`)
const result2 = organizeGifts(`66a11b`)
const result3 = organizeGifts(`20a`)
console.log(result1)
console.log(result2)
console.log(result3)

// '[a]{a}{a}(aaaaaa){b}(b)'
/*
76a = 1pale + 2 cajas + 1 bolsa de 6 = 5 cajas + 2 cajas + 1 bolsa de 6 = 7 cajas
[]: Pale es un conjunto de 5 cajas = 50 regalos
{}: Caja de 10 regalos
(): Bolsa
*/
/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
*/
