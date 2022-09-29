function getRandomArbitrary (min, max) {
  if (min >= 0 && max >= 0) {
    max = Math.ceil(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (max - min) + min);
  } return NaN;
}

function checkLength (string,number) {
  let numberString = string.length;
  if (numberString <= number) {
    return console.log(`${string},длина строки : ${string.length}`);
  }
  return false
}

console.log(getRandomArbitrary(0,34));
console.log(checkLength('Привет мир', 11));
