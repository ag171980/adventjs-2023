function manufacture (gifts, materials) {
  let response = []
  gifts.map(gift => {
    let inMaterial = gift.split('').every(letter => materials.includes(letter))
    if (inMaterial) response.push(gift)
  })
  return response
}
gifts = ['tren', 'oso', 'pelota']
materials = 'tronesa'

console.log(manufacture(gifts, materials))

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

console.log(manufacture(gifts, materials))

gifts = ['libro', 'ps5']
materials = 'psli'
console.log(manufacture(gifts, materials))
