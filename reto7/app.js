function drawGift (size, symbol) {
  const bordes = '#'
  const SPACE = ' '
  if (size === 1) return '#\n'
  const x = Math.abs(size - 2)
  let b = '\n'
  let c = ''

  const top = SPACE.repeat(size - 1) + bordes.repeat(size)
  const bottom = bordes.repeat(size) + '\n'
  const center = bordes.repeat(size) + symbol.repeat(x) + bordes + '\n'

  for (let i = x; i > 0; i--) {
    const c = Math.abs(i - x)
    b +=
      `${SPACE.repeat(i)}${bordes}${symbol.repeat(x)}${bordes}${
        c > 0 ? symbol.repeat(c) : ''
      }${bordes}` + '\n'
  }

  for (let i = 0; i < x; i++) {
    const t = Math.abs(i - x) - 1
    c +=
      `${bordes}${symbol.repeat(x)}${bordes}${
        t > 0 ? symbol.repeat(t) : ''
      }${bordes}` + '\n'
  }

  const result = top + b + center + c + bottom

  return result
}

console.log(drawGift(15, '+'))
/*
  ***####
  **#++##
  *#++#+#
  ####++#
  #++#+#*
  #++##**
  ####***
  */

// drawGift(5, '*')
/*
  ****#####
  ***#***##
  **#***#*#
  *#***#**#
  #####***#
  #***#**#*
  #***#*#**
  #***##***
  #####****
  */
