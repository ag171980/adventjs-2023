function adjustLights (lights) {
  const ON = '🟢',
    OFF = '🔴'
  let odd = 0,
    even = 0,
    counter = 0
  for (const light of lights) {
    even += counter % 2 !== 0 ? +(light !== ON) : +(light !== OFF)
    odd += counter % 2 !== 0 ? +(light !== OFF) : +(light !== ON)

    counter++
  }
  return Math.min(even, odd)
}
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)
