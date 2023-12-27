function checkIsValidCopy (original, copy) {
  // generar la regex
  let regex = '^'
  const orden = '#+:. '
  for (const char of original) {
    let pos = char + char.toLowerCase()

    let ind = orden.indexOf(char)
    // convertir -1 a 0 sin modificar el resto
    ind++
    ind = ind - !!ind

    const tmp = orden.slice(ind)
    pos += tmp

    regex += `[${pos}]`
  }
  regex += '$'

  // comprobar la regex
  const reg = new RegExp(regex)

  return reg.test(copy)
}
console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')) // true
console.log(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
