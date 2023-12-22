function getIndexsForPalindrome(word) {
  let response = [0, 0];
  let wordReverse = [...word].reverse().join("");
  if (word === wordReverse) return [];
  let aux;
  let flag = true;
  for (let pos = 0; pos < word.length; pos++) {
    for (let i = 1; i < word.length; i++) {
      let wordAux = [...word];
      aux = wordAux[pos];
      wordAux[pos] = wordAux[i];
      wordAux[i] = aux;

      if (wordAux.join("") === wordAux.reverse().join("") && flag) {
        response[0] = pos;
        response[1] = i;
        flag = false;
      }
    }
  }

  return flag === true ? null : response;
}

console.log(getIndexsForPalindrome("anna")); // []
console.log(getIndexsForPalindrome("abab")); // [0, 1]
console.log(getIndexsForPalindrome("abac")); // null
console.log(getIndexsForPalindrome("aaaaaaaa")); // []
console.log(getIndexsForPalindrome("aaababa")); // [1, 3]
console.log(getIndexsForPalindrome("caababa")); // null
