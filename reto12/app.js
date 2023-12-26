function checkIsValidCopy(original, copy) {
  original = original.toLowerCase();
  copy = copy.toLowerCase();
  let posLetter = 0;
  let check = true;
  const esLetraOEspacio = (letter) => {
    return /^[a-zA-Z\s]$/.test(letter);
  };
  while (posLetter < original.length) {
    if (
      esLetraOEspacio(original[posLetter]) &&
      esLetraOEspacio(copy[posLetter])
    ) {
      if (original[posLetter] !== copy[posLetter]) {
        check = false;
      }
      console.log(`${original[posLetter]} == ${copy[posLetter]}`);
    }

    posLetter++;
  }
  return check;
}

// console.log(checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#")); // true
// console.log(checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#")); // false (por la p inicial)
console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")); // false (hay un # donde no debería)
