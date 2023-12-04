function decode(message) {
  const regex = /\(([^())]+)\)/;
  let textPar = regex.exec(message);
  while (textPar !== null) {
    let textReverse = textPar[1].split("").reverse().join("");
    message = message.replace(textPar[0], textReverse);
    textPar = regex.exec(message);
  }
  return message;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

// const c = decode("sa(ua(lca)tn)s");
// const c = decode("el(ci(tro(cem)an)ce)a");
const c = decode("(la(uaw(ula(uap)la)ama)la)");

console.log(c);

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
