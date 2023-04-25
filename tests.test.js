import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./script";

test("capitalize", () => {
  expect(capitalize("aRandomWord")).toBe("ARandomWord");
});

test("reverseString", () => {
  expect(reverseString("aRandomWord")).toBe("droWmodnaRa");
});

test("calculator: add", () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test("calculator: subtract", () => {
  expect(calculator.subtract(1, 3)).toBe(-2);
});

test("calculator: multiply", () => {
  expect(calculator.multiply(1, 3)).toBe(3);
});

test("calculator: divide", () => {
  expect(calculator.divide(33, 3)).toBe(11);
});
test("caesarCipher", () => {
  expect(caesarCipher("abcdefghijklmnoz")).toBe("bcdefghijklmnopa");
});
test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    min: 1,
    max: 8,
    average: 4,
    length: 6,
  });
});
