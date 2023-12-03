function findNaughtyStep (original, modified) {
  let first = original.split('')
  let second = modified.split('')
  let diff1 = first.filter((fir, posF) => second.indexOf(fir, posF) === -1)
  let diff2 = second.filter((sec, posS) => first.indexOf(sec, posS) === -1)

  return diff1[0] ?? diff2[0] ?? ''
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

const original1 = 'stepfor'
const modified1 = 'stepor'
console.log(findNaughtyStep(original1, modified1)) // 'f'

const original2 = 'abcde'
const modified2 = 'abcde'
console.log(findNaughtyStep(original2, modified2)) // ''

const original3 = 'iiiii'
const modified3 = 'iiiii'
console.log(findNaughtyStep(original3, modified3)) // 'i'

const original4 = 'xxxx'
const modified4 = 'xxoxx'
console.log(findNaughtyStep(original4, modified4)) // 'o'
