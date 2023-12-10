function createChristmasTree (ornaments, height) {
  let print = ''
  let heightO = height
  let contador = 0
  const BREAK = '\n'
  const SPACE = ' '
  const STICK = `${SPACE.repeat(heightO - 1)}|`
  for (let i = 0; i < height; i++) {
    print += `${SPACE.repeat(heightO - 1)}`
    for (let cont = 0; cont <= i; cont++) {
      print += `${ornaments[contador % ornaments.length]}${
        ['', SPACE][+(cont < i)]
      }`
      contador++
    }
    print += BREAK
    heightO--
  }
  print += STICK
  print += BREAK
  return print ?? BREAK
}
console.log(createChristmasTree('123', 4))
console.log(createChristmasTree('*@o', 3))
console.log(createChristmasTree('x', 3))
// let cadena = '123'

// for (let i = 0; i < 4; i++) {
//   console.log(cadena[i % cadena.length])
// }

/*
++++1
+++2+3
++1+2+3
1+2+3+1+2
++++|
*/
