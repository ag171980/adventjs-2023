function maxDistance(movements) {
  let arrSteps = [...movements];
  let num = 0;
  let star = 0;
  for (const mov of movements) {
    if (mov === "*") {
      num++;
    } else {
      mov === ">" ? num++ : num--;
    }
  }
  return Math.abs(num) + star;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5

const movements4 = ">>*<>>><<<";
const result4 = maxDistance(movements4);
console.log(result4); // -> 5
