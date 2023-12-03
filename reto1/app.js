function findFirstRepeated (gifts) {
  let regalosRepetidos = []
  let regalosUnicos = []
  gifts.forEach(gift => {
    regalosUnicos.includes(gift)
      ? regalosRepetidos.push(gift)
      : regalosUnicos.push(gift)
  })
  return regalosRepetidos[0] ?? -1
}

// const giftIds = [1, 1, 2, 2, 3, 3]
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
