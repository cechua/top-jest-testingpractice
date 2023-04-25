function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(word) {
  let splitString = word.split("");
  return splitString.reverse().join("");
}

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

const caesarCipher = (word) => {
  const arrayWord = Array.from(word);
  console.log(arrayWord);
  let result = "";
  if (arrayWord.length > 0) {
    arrayWord.forEach((letter) => {
      result += changeLetter(letter);
    });
  }
  return result;
};

const changeLetter = (letter) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const arrayAlphabets = Array.from(alphabets);
  const index = arrayAlphabets.indexOf(letter);
  if (index == 25) {
    return arrayAlphabets[0];
  }
  return arrayAlphabets[index + 1];
};

const analyzeArray = (numbers) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const length = numbers.length;
  const sum = numbers.reduce((accu, curr) => accu + curr, 0);
  const average = sum / length;

  return { min, max, average, length };
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
